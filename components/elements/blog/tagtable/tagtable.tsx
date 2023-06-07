import Link from 'next/link';
import PlainLink from '../../../layout/link/plainlink/plainlink';
import TagBox from '../../general/tagbox/tagbox';
import styles from './tagtable.module.css';

const TagTable = (props: { tags: string[]; link: boolean }) => {
    var items: any = [];
    for (let i = 0; i < props.tags.length; i++) {
        if (props.tags[i] === '') continue;
        if (props.link) {
            items.push(
                <PlainLink key={i} href={'/blog?search=%23' + props.tags[i]}>
                    <TagBox key={i} hover={true}>
                        #{props.tags[i]}
                    </TagBox>
                </PlainLink>
            );
        } else {
            items.push(
                <TagBox key={i} hover={false}>
                    #{props.tags[i]}
                </TagBox>
            );
        }
    }

    return <div className={styles.main}>{items.length !== 0 ? <>{items}</> : <></>}</div>;
};

export default TagTable;
