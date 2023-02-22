import Markdown from "../../markdown/markdown";
import TagTable from "../../tagtable/tagtable";
import Timestamp from "../../timestamp/timestamp";
import styles from "./view.module.css";

const ArticleView = (props: { article: any; showTimestamp: boolean }) => {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.credit}>Peruki&apos;s Blog</p>
        <h1>{props.article.title}</h1>
        <p className={styles.subtitle}>{props.article.subtitle}</p>
        <br />
        {props.showTimestamp ? (
          <>
            <Timestamp
              raw={props.article.created_at}
              withTime={true}
              label={"記事作成日"}
            />
            <br />
            <Timestamp
              raw={props.article.updated_at}
              withTime={true}
              label={"最終更新日"}
            />
            <br />
          </>
        ) : (
          <></>
        )}
        <br />
        <TagTable tags={props.article.tags} />
      </div>
      <Markdown body={props.article.body} />
    </>
  );
};

export default ArticleView;
