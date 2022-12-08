import PlainLink from "../plainlink/plainlink";
import styles from "./header.module.css";

const Logo = (props: { children: React.ReactNode }) => {
  return <div className={styles.logo}>{props.children}</div>;
};

const Tab = (props: { children: React.ReactNode }) => {
  return <div className={styles.tab}>{props.children}</div>;
};

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.tab_container}>
        <PlainLink href="/">
          <Logo>Peruki&apos;s Portfolio</Logo>
        </PlainLink>
        <PlainLink href="/profile">
          <Tab>Profile</Tab>
        </PlainLink>
        <PlainLink href="/blog">
          <Tab>Blog</Tab>
        </PlainLink>
      </div>
    </div>
  );
};

export default Header;
