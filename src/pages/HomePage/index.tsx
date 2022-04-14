import styles from './Home.module.scss'

import Header from 'components/Header'

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <>
              <Header />  
            </>
        </div>
    )
}