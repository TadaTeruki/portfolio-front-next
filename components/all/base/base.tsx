import styles from './base.module.css'

const Base = (props: { children: React.ReactNode }) => {
    return (
        <main className={styles.main}>
            {props.children}
            <p className={styles.copyright}>Copyright © 2023 Teruki TADA All Rights Reserved.</p>
        </main>
    )
}

export default Base
