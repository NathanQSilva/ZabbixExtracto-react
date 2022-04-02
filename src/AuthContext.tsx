import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    loginZabbix: ({user, password, server}:InfoLogin) => void
}

interface InfoLogin {
    user: string;
    password: string;
    server: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {

    function loginZabbix({user, password, server}: InfoLogin) {
        console.log(user, password, server)
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