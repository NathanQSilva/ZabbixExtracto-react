// Importações visuais
import styles from './LoginPage.module.scss'
// Imagens
import logo from '../../assets/logo.png'
import { FiUser, FiServer, FiLock } from 'react-icons/fi'

// Importações externas
import { useState } from 'react'
import ParticlesBack from 'components/ParticlesBack'

export default function LoginPage() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [server, setServer] = useState("")

    return(
        <div className={styles.loginPage}>
            <div className={styles.logoContainer}>
                <ParticlesBack />
                <img className={styles.logo} src={logo} alt="Logo zabbix extractor" />
            </div>
            <div className={styles.loginContainer}>
                    <form action="">
                        <h3 className={styles.title}>Conecte na API</h3> 

                        <label htmlFor="User">
                        <FiUser size={30} color="#38A576" className={styles.icon} />
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

                        <label htmlFor="Password">
                            <FiLock size={30} color="#38A576" className={styles.icon} />
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

                        <label htmlFor="Server">
                            <FiServer size={30} color="#38A576" className={styles.icon} />
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
                            
                        <button>Entrar</button>
                    </form>
                </div>
            </div>
    )
}