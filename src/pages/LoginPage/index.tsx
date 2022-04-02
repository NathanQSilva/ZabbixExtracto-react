// Importações visuais
import styles from './LoginPage.module.scss'
import logo from '../../assets/logo.png'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as UnlockIcon } from '../../assets/icons/unlock.svg'
import { ReactComponent as ServerIcon } from '../../assets/icons/server.svg'

// Importações externas
import { useState } from 'react'
import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles"

//Importações internas
import ParticlesOptions from "../../data/particles.json"

export default function LoginPage() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [server, setServer] = useState("")

    return(
        <div className={styles.loginPage}>
            <div className={styles.logoContainer}>
                <Particles className={styles.particles} options={ParticlesOptions as ISourceOptions} />
                <img className={styles.logo} src={logo} alt="Logo zabbix extractor" />
            </div>
            <div className={styles.loginContainer}>
                    <form action="">
                        <h3 className={styles.title}>Conecte na API</h3> 

                        <label htmlFor="User">
                        <UserIcon className={styles.icon} />
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
                            <UnlockIcon className={styles.icon} />
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
                            <ServerIcon className={styles.icon} />
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
                            
                        <button>ENTRAR</button>
                    </form>
                </div>
            </div>
    )
}