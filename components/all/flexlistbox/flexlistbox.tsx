import styles from "./flexlistbox.module.css";

const FlexListBox = (props: { children: React.ReactNode }) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default FlexListBox;