import PlainLink from '../../../layout/link/plainlink/plainlink';
import styles from './header.module.css';

const Logo = (props: { children: React.ReactNode }) => {
    return <div className={styles.logo}>{props.children}</div>;
};

const Tab = (props: { children: React.ReactNode }) => {
    return <div className={styles.tab}>{props.children}</div>;
};

const Header = () => {
    return (
        <header className={styles.main}>
            <div className={styles.header_container}>
                <PlainLink href="/">
                    <Tab>
                        <Logo>Peruki&apos;s Portfolio</Logo>
                    </Tab>
                </PlainLink>
                <div className={styles.tab_container}>
                    <PlainLink href="https://twitter.com/PerukiFUN">
                        <Tab>
                            <img
                                className={styles.twitter_logo}
                                alt="twitter logo"
                                height={103}
                                width={85}
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2F2021%20Twitter%20logo%20-%20blue.png?alt=media&token=605c9665-4b15-4c47-8ce8-010971b11f62&_gl=1*1pp84ev*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg4MDc1My4zMy4xLjE2ODU4ODIwNzIuMC4wLjA."
                            />
                        </Tab>
                    </PlainLink>
                    <PlainLink href="https://github.com/TadaTeruki">
                        <Tab>
                            <img
                                className={styles.github_logo}
                                alt="github logo"
                                height={120}
                                width={120}
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fgithub-mark.png?alt=media&token=606de0ae-46f7-47dc-8495-31717abfbe00&_gl=1*1puj20k*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg4MDc1My4zMy4xLjE2ODU4ODA4NjguMC4wLjA."
                            />
                        </Tab>
                    </PlainLink>
                    <PlainLink href="/blog">
                        <Tab>Blog</Tab>
                    </PlainLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
