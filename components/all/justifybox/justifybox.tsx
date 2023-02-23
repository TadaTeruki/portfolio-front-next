import styles from "./justifybox.module.css";

const JustifyBox = (props: { children: React.ReactNode, type: string }) => {
  switch(props.type) {
    case "center":
      return <div className={styles.center}>{props.children}</div>;
    case "left":
      return <div className={styles.left}>{props.children}</div>;
  }

  return <div className={styles.left}>{props.children}</div>;
  
};

export default JustifyBox;
