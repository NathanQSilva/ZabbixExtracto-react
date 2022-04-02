import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [server, setServer] = useState("")

    return (
        <AuthContext.Provider
            value={{
                
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}