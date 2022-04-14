import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface loginData {
    User: string;
    Password: string;
    Server: string;
}

interface AuthContextData {
    isError: boolean;
    loginZabbix: (formValues: loginData) => void
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider ({ children }: AuthProviderProps) {

    const [isError, setIsError] = useState(false)

    function urlValidation(serverString: string) {
        var r = /^(?:[a-z]+:)?\/\//i;

        if (r.test(serverString)) {
            return serverString+"/api_jsonrpc.php"
        }
        else {
            return "https://"+serverString+"/api_jsonrpc.php"
        }
    }

    function loginZabbix(formValues: loginData) {

        axios({
            url: urlValidation(formValues.Server),
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({
                jsonrpc: "2.0",
                method: "user.login",
                params: {
                user: formValues.User,
                password: formValues.Password,
                },
                id: 1,
                auth: null,
            })
        })
        .then((response) => {
            if (response.data.error) {
                setIsError(true)
            }
            else {
                sessionStorage.setItem("zabbixKey", response.data.result)
                sessionStorage.setItem("zabbixServer", urlValidation(formValues.Server))
                setIsError(false)
            }
        })
        .catch(() => {
            setIsError(true)
        })
    }

    return (
        <AuthContext.Provider
            value={{
                loginZabbix,
                isError
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}
//---------------------------------------------------------------------------------//
export function useAuth() {
    const value = useContext(AuthContext)
    return value
}