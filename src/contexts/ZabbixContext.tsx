import axios from "axios";
import { getServers } from "dns";
import { stringify } from "querystring";
import { createContext, ReactNode, useContext, useState } from "react";


interface AuthProviderProps {
    children: ReactNode;
}

interface ZabbixContextData {
    zabbixVersion: string
    getZabbixVersion: () => void;
}

export const ZabbixContext = createContext({} as ZabbixContextData);

export function ZabbixContextProvider ({ children }: AuthProviderProps) {

    const [zabbixVersion, setZabbixVersion] = useState("")

    function getZabbixVersion() {
        axios({
            url: String(sessionStorage.getItem("zabbixServer")),
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "apiinfo.version",
                "params": [],
                "id": 1
            })
        })
        .then((response) => {
            setZabbixVersion(response.data.result)
        })
    }

    return (
        <ZabbixContext.Provider
            value={{
                getZabbixVersion,
                zabbixVersion
            }}
        >
            { children }
        </ZabbixContext.Provider>
    )
}
//---------------------------------------------------------------------------------//
export function useZabbix() {
    const value = useContext(ZabbixContext)
    return value
}