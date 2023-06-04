import PlainLink from '../link/plainlink/plainlink';
import styles from './header.module.css';

const Logo = (props: { children: React.ReactNode }) => {
    return <div className={styles.logo}>{props.children}</div>;
};

const Tab = (props: { children: React.ReactNode }) => {
    return (
        <div>
            <div className={styles.tab}>{props.children}</div>
        </div>
    );
};

const Header = () => {
    return (
        <header className={styles.main + ' ' + styles.tab_container}>
            <PlainLink href="/">
                <Tab>
                    <Logo>Peruki&apos;s Portfolio</Logo>
                </Tab>
            </PlainLink>
            <PlainLink href="https://twitter.com/PerukiFUN">
                <Tab>
                    <img
                        alt="twitter logo"
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2FLogo%20black.svg?alt=media&token=fd5dee03-e276-41ac-96d2-2b9d203aea49"
                    ></img>
                </Tab>
            </PlainLink>
            <PlainLink href="https://github.com/TadaTeruki">
                <Tab>
                    <img
                        alt="github logo"
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Flogo%2Fgithub-mark.svg?alt=media&token=9d486992-c57e-49a7-bccc-1bb5c408d252"
                    ></img>
                </Tab>
            </PlainLink>
            <PlainLink href="/blog">
                <Tab>Blog</Tab>
            </PlainLink>
        </header>
    );
};

export default Header;
