import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./box.module.css";
import ArticleList from "../list/list";
import { QueryToken } from "../../../../packages/token/token";
import ErrorNotify from "../../../all/error_notify/error_notify";
import RequestPostArticle from "../../../../packages/requests/article/PostArticle";

const BlogBox = (props: { articles: any[], verified: boolean }) => {
  const [stateErr, setErr] = useState<string>("");
  const router = useRouter();

  const createArticle = async () => {
    
    RequestPostArticle(
      {
        title: "新しい記事",
        subtitle: "",
        body: "",
        tags: [""],
        is_public: false,
      }, QueryToken())
    .then(({ id }) => {
      router.push("/blog/article/edit/" + id);
    })
    .catch(() => {
      setErr("failed to load");
    });
    
  };

  return (
    <>
      <h2>Blog</h2>
      <p>技術や生活に関する記事を載せています</p>
      <div className={styles.main}>
        {props.verified ? (
          <>
            <button onClick={createArticle}>+ 新規作成</button>
          </>
        ) : (
          <></>
        )}
        <ArticleList articles={props.articles} />
        <ErrorNotify>{stateErr}</ErrorNotify>
      </div>
    </>
  );
};

export default BlogBox;
