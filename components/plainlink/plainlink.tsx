import styles from "./plainlink.module.css";
import Link from "next/link";

const PlainLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={props.href} className={styles.main}>
      {props.children}
    </Link>
  );
};

export default PlainLink;
