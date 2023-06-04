import styles from './tagtable.module.css';

const TagTable = (props: { tags: string[] }) => {
    var items: any = [];
    for (let i = 0; i < props.tags.length; i++) {
        if (props.tags[i] === '') continue;
        items.push(
            <div className={styles.unit} key={i}>
                #{props.tags[i]}
            </div>
        );
    }

    return <div className={styles.main}>{items.length !== 0 ? <>{items}</> : <></>}</div>;
};

export default TagTable;
