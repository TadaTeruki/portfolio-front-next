import Header from "../../../../components/all/header/header";
import Base from "../../../../components/all/base/base";
import RequestReadArticle from "../../../../packages/requests/article/ReadArticle";
import ArticleBox from "../../../../components/blog/article/box/box";
import Config from "../../../../components/config/config";
import RequestVerify from "../../../../packages/requests/auth/Verify";
import { GetStaticProps } from "next";
import { QueryToken } from "../../../../packages/token/token";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index = () => {

  const router = useRouter();

  const [stateArticle, setArticle] = useState<any>(null);
  const [stateVerified, setVerfied] = useState<boolean>(false);

  useEffect(() => {
    RequestVerify(QueryToken()).then(() => {
      setVerfied(true);
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
          auth={stateVerified}
          showTimestamp={true}
        />
      </Base>
    </>
  );
};

export default Index;
