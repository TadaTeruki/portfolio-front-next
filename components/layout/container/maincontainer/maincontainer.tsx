import styles from './maincontainer.module.css';

const MainContainer = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default MainContainer;
