import axios from "axios";
import { createContext, ReactNode, useContext } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface formData {
    User?: string;
    Password?: string;
    server?: string;
}

interface AuthContextData {
    loginZabbix: (formData: formData) => void
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider ({ children }: AuthProviderProps) {

    function loginZabbix(formData: formData) {
        axios({
            url: formData.server,
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({
                jsonrpc: "2.0",
                method: "user.login",
                params: {
                user: formData.User,
                password: formData.Password,
                },
                id: 1,
                auth: null,
            })
        })
        .then((response) => {
            if (response.data.error) {
                console.log("ERRO")
            }
            else {
                console.log(response.data.result)
            }
        })
        .catch((error) => {console.log(error)})
    }

    return (
        <AuthContext.Provider
            value={{
                loginZabbix
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