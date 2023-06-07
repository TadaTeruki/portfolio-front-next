import MainContainer from '../container/maincontainer/maincontainer';
import styles from './base.module.css';

const Base = (props: { children: React.ReactNode }) => {
    return (
        <MainContainer>
            <main className={styles.main}>{props.children}</main>
        </MainContainer>
    );
};

export default Base;
