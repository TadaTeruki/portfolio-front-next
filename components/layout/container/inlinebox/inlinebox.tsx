import styles from './inlinebox.module.css';

const InlineBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default InlineBox;
