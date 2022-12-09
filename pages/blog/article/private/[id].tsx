import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../../components/all/header/header";
import Base from "../../../../components/all/base/base";
import RequestCheckAuth from "../../../../requests/auth/CheckAuth";
import { QueryToken } from "../../../../packages/token/token";
import RequestReadArticle from "../../../../requests/article/ReadArticle";
import ArticleBox from "../../../../components/blog/article/box/box";
import Config from "../../../../components/config/config";

const Index = () => {
  const router = useRouter();

  const [stateArticle, setArticle] = useState<any>(null);
  const [stateAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    RequestCheckAuth({ token: QueryToken() }).then(() => {
      setAuth(true);
    });
    RequestReadArticle({ id: router.query.id as string }).then((article) => {
      setArticle(article);
    });
  }, [router.query.id]);

  return (
    <>
      <Config title={stateArticle == null ? "":stateArticle.title} subtitle={stateArticle == null ? "":stateArticle.subtitle} />
      <Header />
      <Base>
        <ArticleBox
          article={stateArticle}
          auth={stateAuth}
          showTimestamp={true}
        />
      </Base>
    </>
  );
};

export default Index;
