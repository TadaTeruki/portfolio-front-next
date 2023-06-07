import Banner from '../../general/banner/banner';
import styles from './perufetch.module.css';

const Perufetch = (props: { context: string }) => {
    return (
        <Banner
            height={'28em'}
            background_mode={'black'}
            image_src="/static/banners/fun.webp"
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
