import IndentBox from "../../all/indentbox/indentbox";
import PlainLink from "../../all/link/plainlink/plainlink";
import styles from "./tablinkbox.module.css";

const TabLinkBox = (props: {
    href: string;
    tabname: string;
    description: string;
}) => {
    return (
        <div className={styles.main}>
            <PlainLink href={props.href}>
                <IndentBox>
                    <h2>{props.tabname}</h2>
                    <p>{props.description}</p>
                </IndentBox>
            </PlainLink>
        </div>
    );
};

export default TabLinkBox;
