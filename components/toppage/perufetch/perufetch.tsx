import styles from './perufetch.module.css'

const Perufetch = (props: {context: string}) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                $ perufetch
                {props.context} <br />
                See: https://github.com/TadaTeruki/perufetch
            </div>
        </div>
    );
};

export default Perufetch;