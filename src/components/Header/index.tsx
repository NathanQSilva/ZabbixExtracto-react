import styles from './Header.module.scss'

export default function Header() {
    return (
        <>
            <nav className={styles.menuContainer}>
                <div className={styles.infosContainer}>
                    <div className={styles.logo}>
                        Logo
                    </div>
                    <div className={styles.server}>
                        nome e versão do server
                    </div>
                </div>
                <div className={styles.optionsContainer}>
                    <button>
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