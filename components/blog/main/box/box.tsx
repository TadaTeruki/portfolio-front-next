import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./box.module.css";
import ArticleList from "../list/list";
import RequestListArticles from "../../../../requests/articles/ListArticles";
import RequestCreateArticle from "../../../../requests/article/CreateArticle";
import RequestCheckAuth from "../../../../requests/auth/CheckAuth";
import { QueryToken } from "../../../../packages/token/token";
import ErrorNotify from "../../../all/error_notify/error_notify";

const BlogBox = (props: { articles: any[] }) => {
  const [stateArticles, setArticles] = useState<any>(props.articles ? props.articles: []);
  const [stateAuth, setAuth] = useState<boolean>(false);
  const [stateErr, setErr] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token_ = QueryToken();
    if (token_ != "") {
      RequestCheckAuth({ token: token_ }).then(() => {
        setAuth(true);
        RequestListArticles({ token: token_ }).then((articles) => {
          setArticles(articles);
        });
      });
    }
  }, []);

  const createArticle = () => {
    RequestCreateArticle({
      token: QueryToken(),
      article: {
        title: "新しい記事",
        subtitle: "",
        body: "",
        tags: [""],
        is_public: false,
      },
    })
      .then(({ id }) => {
        router.push("/blog/article/edit/" + id);
      })
      .catch((err) => {
        setErr(err);
      });
  };

  return (
    <>
      <h2>Blog</h2>
      <p>技術や生活に関する記事を載せています</p>
      <div className={styles.main}>
        {stateAuth ? (
          <>
            <button onClick={createArticle}>+ 新規作成</button>
          </>
        ) : (
          <></>
        )}
        <ArticleList articles={stateArticles} />
        <ErrorNotify>{stateErr}</ErrorNotify>
      </div>
    </>
  );
};

export default BlogBox;
