import styles from "./error_notify.module.css";

const ErrorNotify = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default ErrorNotify;
