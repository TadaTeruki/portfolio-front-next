import styles from './list.module.css'
import Timestamp from '../../timestamp/timestamp'
import TagTable from '../../tagtable/tagtable'
import PlainLink from '../../../all/link/plainlink/plainlink'
import ImageBox from '../../../all/imagebox/imagebox'

const Unit = (props: { article: any }) => {
    return (
        <PlainLink href={'/blog/article/' + (props.article.is_public ? 'public/' : 'private/') + props.article.id}>
            <div className={styles.unit}>
                {props.article.is_public ? (
                    <></>
                ) : (
                    <div className={styles.is_private}>
                        非公開記事
                        <span style={{ fontSize: 'small' }}>(見つけたら@PerukiFUNまで)</span>
                    </div>
                )}
                <div className={styles.flex}>
                    <div className={styles.info}>
                        <h3>{props.article.title}</h3>
                        <p>{props.article.subtitle}</p>
                        <Timestamp raw={props.article.created_at} withTime={false} label={'記事作成日'} />
                        <TagTable tags={props.article.tags} />
                    </div>
                    <img src={props.article.thumbnail} alt={props.article.title} className={styles.thumbnail} />
                </div>
            </div>
        </PlainLink>
    )
}

const ArticleList = (props: { articles: any[]; size: number }) => {
    var items = []
    var length = props.articles.length
    if (props.size >= 0 && length > props.size) length = props.size

    for (let i = 0; i < length; i++) {
        items.push(<Unit article={props.articles[i]} key={i} />)
    }

    return <>{items}</>
}

export default ArticleList
