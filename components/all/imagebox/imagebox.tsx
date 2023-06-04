import styles from './imagebox.module.css'

const ImageBox = (props: { image: string; children: React.ReactNode; height: string }) => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>{props.children}</div>
            <div className={styles.image}>
                <img
                    src={props.image}
                    alt=""
                    style={{
                        maxHeight: props.height,
                        width: 'auto',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    )
}

export default ImageBox
