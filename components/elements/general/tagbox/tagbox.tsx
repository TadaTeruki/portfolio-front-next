import styles from './tagbox.module.css';

const TagBox = (props: { children: React.ReactNode; hover: boolean }) => {
    if (props.hover) {
        return <div className={styles.main + ' ' + styles.hoverbox}>{props.children}</div>;
    } else {
        return <div className={styles.main}>{props.children}</div>;
    }
};

export default TagBox;
