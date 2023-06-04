import styles from './contentbox.module.css'

const ContentBox = (props: { children: React.ReactNode; content: any; height: string }) => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>{props.children}</div>
            <div
                className={styles.content}
                style={{
                    maxHeight: props.height,
                    width: 'auto',
                    height: 'auto'
                }}
            >
                {props.content}
            </div>
        </div>
    )
}

export default ContentBox
