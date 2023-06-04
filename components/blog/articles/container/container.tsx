import styles from './container.module.css';

const BlogContainer = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default BlogContainer;
