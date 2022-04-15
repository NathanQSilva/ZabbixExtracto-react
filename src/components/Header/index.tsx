import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from 'contexts/AuthContext'

export default function Header() {

    const { serverVersion } = useAuth()

    const [version, setVersion] = useState("")

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
            console.log("teste get version")
            setVersion(response.data.result)
        })
    }

    useEffect(() => {
        console.log("teste use effect")
        getZabbixVersion()
    }, [])

    return (
        <>
            <nav className={styles.menuContainer}>
                <div className={styles.infosContainer}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Logo zabbix extractor" />
                    </div>
                    <div className={styles.serverContainer}>
                        <strong>V</strong> {version}
                    </div>
                </div>
                <div className={styles.optionsContainer}>
                    <label htmlFor="options">
                        <select name="option" id="options">
                            <option value="1"> teste1 </option>
                            <option value="2"> teste2 </option>
                            <option value="3"> teste3 </option>
                            <option value="4"> teste4 </option>
                            <option value="5"> teste5 </option>
                        </select>
                    </label>
                </div>
            </nav>
        </>
    )
}