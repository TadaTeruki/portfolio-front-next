import styles from './indentbox.module.css';

const IndentBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default IndentBox;
