import styles from './tagbox.module.css';

const TagBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default TagBox;
