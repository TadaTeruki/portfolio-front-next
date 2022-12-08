import styles from "./imagebox.module.css";

const ImageBox = (props: { image: string; children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>{props.children}</div>
      <img src={props.image} className={styles.image} alt="(image)" />
    </div>
  );
};

export default ImageBox;
