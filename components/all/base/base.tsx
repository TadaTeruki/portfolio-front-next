import styles from "./base.module.css";

const Base = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default Base;
