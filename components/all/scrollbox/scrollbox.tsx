import styles from './scrollbox.module.css';

const ScrollBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default ScrollBox;
