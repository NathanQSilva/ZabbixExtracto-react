// Importações visuais
import styles from './LoginPage.module.scss'
// Imagens
import logo from '../../assets/logo.png'
import { FiUser, FiServer, FiLock } from 'react-icons/fi'

// Importações externas
import { useState } from 'react'

export default function LoginPage() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [server, setServer] = useState("")

    return(
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <div className={styles.sideLeft}>
                    <img src={logo} alt="Logo zabbix extractor" />
                </div>
                <div className={styles.sideRight}>
                    <h3 className={styles.title}>Connect API</h3>
                    <form action="">
                        <div>
                            <label htmlFor="User">
                                <FiUser size={25} color="#373331" />
                                <input
                                    type="text"
                                    name="User"
                                    id="User"
                                    value={user}
                                    onChange={evento => setUser(evento.target.value)}
                                    placeholder="User"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Password">
                                <FiLock size={25} color="#373331" />
                                <input
                                    type="password"
                                    name="Password"
                                    id="Password"
                                    value={password}
                                    onChange={evento => setPassword(evento.target.value)}
                                    placeholder="Password"
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Server">
                                <FiServer size={25} color="#373331" />
                                <input
                                    type="text"
                                    name="Server"
                                    id="Server"
                                    value={server}
                                    onChange={evento => setServer(evento.target.value)}
                                    placeholder="Server"
                                    required
                                />
                            </label>
                        </div>
                        <button>Logar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}