import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import { useZabbix } from 'contexts/ZabbixContext'
import { useEffect } from 'react'

export default function Header() {
    useEffect(() => {
        getZabbixVersion()
    },[])

    const { zabbixVersion, getZabbixVersion } = useZabbix()

    return (
        <>
            <nav className={styles.menuContainer}>
                <div className={styles.infosContainer}>
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Logo zabbix extractor" />
                    </div>
                    <div className={styles.server}>
                        V {zabbixVersion}
                    </div>
                </div>
                <div className={styles.optionsContainer}>
                    <button onClick={getZabbixVersion}>
                        opção1
                    </button>
                    <button>
                        opção2
                    </button>
                    <button>
                        opção3
                    </button>
                    <button>
                        opção4
                    </button>
                    <button>
                        opção5
                    </button>
                </div>
            </nav>
        </>
    )
}