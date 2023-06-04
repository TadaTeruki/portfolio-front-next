import styles from './perufetch.module.css';

const Perufetch = (props: { context: string }) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                $ curl https://perufetch.peruki.dev
                {props.context} <br />
                See:{' '}
                <a className={styles.link} href="https://github.com/TadaTeruki/perufetch">
                    https://github.com/TadaTeruki/perufetch
                </a>
            </div>
        </div>
    );
};

export default Perufetch;
