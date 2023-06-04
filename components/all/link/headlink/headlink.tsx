import styles from './headlink.module.css';
import Link from 'next/link';

const HeadLink = (props: { href: string; children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <Link href={props.href} className={styles.main}>
                {props.children}
            </Link>
        </div>
    );
};

export default HeadLink;
