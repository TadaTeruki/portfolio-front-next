import styles from './panel.module.css';

const Panel = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default Panel;
