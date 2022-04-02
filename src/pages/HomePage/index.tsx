import ParticlesBack from 'components/ParticlesBack'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <ParticlesBack />
            <div>
                teste
            </div>
        </div>
    )
}