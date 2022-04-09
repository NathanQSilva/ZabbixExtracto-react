// Importações visuais
import styles from './LoginPage.module.scss'
import logo from '../../assets/logo.png'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as UnlockIcon } from '../../assets/icons/unlock.svg'
import { ReactComponent as ServerIcon } from '../../assets/icons/server.svg'

// Importações externas
import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles"
import { useFormik } from 'formik'

//Importações internas
import ParticlesOptions from "../../data/particles.json"
import { useAuth } from '../../contexts/AuthContext'

export default function LoginPage() {

    const { loginZabbix } = useAuth()

    const formData = useFormik({
        initialValues: {
            User: '',
            Password: '',
            Server: '',
        },
        onSubmit: values => {
            loginZabbix(values)
        }
    });

    return(
        <div className={styles.loginPage}>
            <div className={styles.logoContainer}>
                <Particles className={styles.particles} options={ParticlesOptions as ISourceOptions} />
                <img className={styles.logo} src={logo} alt="Logo zabbix extractor" />
            </div>
            <div className={styles.loginContainer}>
                    <form onSubmit={formData.handleSubmit}>
                        <h3 className={styles.title}>Conecte na API</h3> 

                        <label htmlFor="User">
                        <UserIcon className={styles.icon} />
                        <input
                            id="User"
                            name="User"
                            type="text"
                            placeholder="User"                          
                            onChange={formData.handleChange}
                            value={formData.values.User}
                            required
                        />
                        </label>

                        <label htmlFor="Password">
                            <UnlockIcon className={styles.icon} />
                            <input
                                id="Password"
                                name="Password"
                                type="password"
                                placeholder="Password"
                                onChange={formData.handleChange}
                                value={formData.values.Password}                                
                                required
                            />
                        </label>

                        <label htmlFor="Server">
                            <ServerIcon className={styles.icon} />
                            <input
                                id="Server"
                                name="Server"
                                type="text"
                                placeholder="Server"
                                onChange={formData.handleChange}
                                value={formData.values.Server}
                                required
                            />
                        </label>
                            
                        <button
                            type='submit'
                        >
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
    )
}