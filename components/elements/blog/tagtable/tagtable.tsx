import TagBox from '../../general/tagbox/tagbox';
import styles from './tagtable.module.css';

const TagTable = (props: { tags: string[] }) => {
    var items: any = [];
    for (let i = 0; i < props.tags.length; i++) {
        if (props.tags[i] === '') continue;
        items.push(<TagBox key={i}>#{props.tags[i]}</TagBox>);
    }

    return <div className={styles.main}>{items.length !== 0 ? <>{items}</> : <></>}</div>;
};

export default TagTable;
