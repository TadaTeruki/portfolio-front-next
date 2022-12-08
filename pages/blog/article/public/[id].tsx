import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Base from "../../../../components/base/base";
import Header from "../../../../components/header/header";
import RequestListArticles from "../../../../requests/articles/ListArticles";
import RequestReadArticle from "../../../../requests/article/ReadArticle";
import RequestCheckAuth from "../../../../requests/auth/CheckAuth";
import ArticleBox from "../../../../components/blog/article/box/box";
import { QueryToken } from "../../../../packages/token/token";

type Props = {
  article: any | null;
};

export async function getStaticPaths() {
  const responses = await RequestListArticles({ token: null });
  const paths = responses.map(
    (response) => "/blog/article/public/" + response.id
  );
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const response = await RequestReadArticle({
    id: params?.id as string,
  });
  return {
    props: {
      article: response,
    },
  };
};

const Index = (props: Props) => {
  const [stateAuth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    RequestCheckAuth({ token: QueryToken() }).then(() => {
      setAuth(true);
    });
  }, []);

  return (
    <>
      <Header />
      <Base>
        <ArticleBox
          article={props.article}
          auth={stateAuth}
          showTimestamp={true}
        />
      </Base>
    </>
  );
};

export default Index;
