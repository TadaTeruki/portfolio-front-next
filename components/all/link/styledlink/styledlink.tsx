import styles from "./styledlink.module.css";
import Link from "next/link";

const StyledLink = (props: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={props.href} className={styles.main}>
            {props.children}
        </Link>
    );
};

export default StyledLink;
