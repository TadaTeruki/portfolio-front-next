import MainContainer from '../../../layout/container/maincontainer/maincontainer';
import styles from './perufetch.module.css';

const Perufetch = (props: { context: string }) => {
    return (
        <div className={styles.main}>
            <div className={styles.filter}>
                <MainContainer>
                    $ curl https://perufetch.peruki.dev
                    {props.context} <br />
                    See:{' '}
                    <a className={styles.link} href="https://github.com/TadaTeruki/perufetch">
                        https://github.com/TadaTeruki/perufetch
                    </a>
                </MainContainer>
            </div>
        </div>
    );
};

export default Perufetch;
