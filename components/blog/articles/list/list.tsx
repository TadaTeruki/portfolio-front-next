import styles from "./list.module.css";
import Timestamp from "../../../timestamp/timestamp";
import TagTable from "../../tagtable/tagtable";
import PlainLink from "../../../plainlink/plainlink";

const Unit = (props: { article: any }) => {
  return (
    <PlainLink
      href={
        "/blog/article/" +
        (props.article.is_public ? "public/" : "private/") +
        props.article.id
      }
    >
      <div className={styles.unit}>
        {props.article.is_public ? (
          <></>
        ) : (
          <div className={styles.is_private}>
            非公開記事
            <span style={{ fontSize: "small" }}>
              (見つけたら@PerukiFUNまで)
            </span>
          </div>
        )}
        <h3>{props.article.title}</h3>
        <p>{props.article.subtitle}</p>
        <Timestamp
          raw={props.article.created_at}
          withTime={false}
          label={"記事作成日"}
        />
        <TagTable tags={props.article.tags} />
      </div>
    </PlainLink>
  );
};

const ArticleList = (props: { articles: any[] }) => {
  var items = [];

  for (let i = 0; i < props.articles.length; i++) {
    items.push(<Unit article={props.articles[i]} key={i} />);
  }

  return <>{items}</>;
};

export default ArticleList;
