import styles from "./imagebox.module.css";

const ImageBox = (props: { image: string; children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>{props.children}</div>
      <div className={styles.image}>
        <img src={props.image} alt=""/>
      </div>
    </div>
  );
};

export default ImageBox;
