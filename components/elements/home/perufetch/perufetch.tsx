import MainContainer from '../../../layout/container/maincontainer/maincontainer';
import Banner from '../../general/banner/banner';
import styles from './perufetch.module.css';

const Perufetch = (props: { context: string }) => {
    /*
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
    */
    return (
        <Banner
            height={'28em'}
            background_mode={'black'}
            image_src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fpreset%2Ffun.webp?alt=media&token=93d6f787-0388-47cd-924e-0fb29aa8ff94&_gl=1*sijgdm*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NjA0ODc3MS4zNy4xLjE2ODYwNDg4MTYuMC4wLjA."
        >
            <div className={styles.container}>
                $ curl https://perufetch.peruki.dev
                {props.context} <br />
                See:{' '}
                <a className={styles.link} href="https://github.com/TadaTeruki/perufetch">
                    https://github.com/TadaTeruki/perufetch
                </a>
            </div>
        </Banner>
    );
};

export default Perufetch;
