import styles from "./edit.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import RequestCheckAuth from "../../../../requests/auth/CheckAuth";
import RequestReadArticle from "../../../../requests/article/ReadArticle";
import RequestUpdateArticle from "../../../../requests/article/UpdateArticle";
import { QueryToken } from "../../../../packages/token/token";
import ArticleView from "../view/view";
import ErrorNotify from "../../../all/error_notify/error_notify";

const ArticleEdit = (props: { id: string }) => {
  const [stateErr, setErr] = useState<string>("");
  const [stateNewTitle, setNewTitle] = useState<string>("");
  const updateNewTitle = (event: any) => setNewTitle(event.target.value);

  const [stateNewSubtitle, setNewSubtitle] = useState<string>("");
  const updateNewSubtitle = (event: any) => setNewSubtitle(event.target.value);

  const [stateNewBody, setNewBody] = useState<string>("");
  const updateNewBody = (event: any) => setNewBody(event.target.value);

  const [stateNewTags, setNewTags] = useState<string>("");
  const updateNewTags = (event: any) => setNewTags(event.target.value);

  const [stateNewIsPublic, setNewIsPublic] = useState<boolean>(false);
  const updateNewIsPublic = () => setNewIsPublic(!stateNewIsPublic);

  const router = useRouter();

  useEffect(() => {
    RequestCheckAuth({ token: QueryToken() })
      .then(() => {
        RequestReadArticle({ id: props.id })
          .then((article) => {
            setErr("");
            setNewTitle(article.title);
            setNewSubtitle(article.subtitle);
            setNewBody(article.body);
            setNewIsPublic(article.is_public);

            var newTags = "";
            if (article.tags.length >= 0) {
              newTags = article.tags[0];
              for (let i = 1; i < article.tags.length; i++) {
                newTags += " " + article.tags[i];
              }
            }
            setNewTags(newTags);
          })
          .catch((err) => {
            setErr(err);
          });
      })
      .catch((err) => {
        setErr(err);
      });
  }, [props.id]);

  const updateArticle = () => {
    RequestUpdateArticle({
      token: QueryToken(),
      id: props.id,
      article: {
        title: stateNewTitle,
        subtitle: stateNewSubtitle,
        body: stateNewBody,
        tags: stateNewTags.split(" "),
        is_public: stateNewIsPublic,
      },
    })
      .then(() => {
        router.push("/blog");
      })
      .catch((err) => {
        setErr(err);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.edit_box}>
          <h2>記事を編集</h2>
          <p className={styles.edit_label}>
            タイトル
            <input
              type="text"
              className={styles.text_entry}
              value={stateNewTitle}
              onChange={updateNewTitle}
            />
          </p>

          <p className={styles.edit_label}>
            説明文
            <input
              type="text"
              className={styles.text_entry}
              value={stateNewSubtitle}
              onChange={updateNewSubtitle}
            />
          </p>

          <p className={styles.edit_label}>
            タグ (空白で区切る)
            <input
              type="text"
              className={styles.text_entry}
              value={stateNewTags}
              onChange={updateNewTags}
            />
          </p>

          <p className={styles.edit_label}>
            本文
            <textarea
              className={styles.text_entry + " " + styles.text_area}
              value={stateNewBody}
              onChange={updateNewBody}
            />
          </p>
        </div>
        <div className={styles.preview_box}>
          <ArticleView
            article={{
              title: stateNewTitle,
              subtitle: stateNewSubtitle,
              body: stateNewBody,
              tags: stateNewTags.split(" "),
            }}
            showTimestamp={false}
          />
        </div>
      </div>
      <ErrorNotify>{stateErr}</ErrorNotify>
      <button onClick={updateArticle}>更新</button>
      <input
        type="checkbox"
        checked={stateNewIsPublic}
        onChange={updateNewIsPublic}
      />{" "}
      公開する
    </div>
  );
};

export default ArticleEdit;
