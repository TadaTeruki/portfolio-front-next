import styles from "./centeringbox.module.css";

const CenteringBox = (props: { children: React.ReactNode }) => {
  return <div className={styles.main}>{props.children}</div>;
};

export default CenteringBox;
