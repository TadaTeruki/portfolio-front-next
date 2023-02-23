import { GetStaticProps } from "next";
import Base from "../../../../components/all/base/base";
import Header from "../../../../components/all/header/header";
import RequestReadArticle from "../../../../packages/requests/article/ReadArticle";
import RequestVerify from "../../../../packages/requests/auth/Verify";
import ArticleBox from "../../../../components/blog/article/box/box";
import Config from "../../../../components/config/config";
import RequestListArticles from "../../../../packages/requests/articles/ListArticles";
import { QueryToken } from "../../../../packages/token/token";
import { useEffect, useState } from "react";

type Props = {
  article: any | null;
};

export async function getStaticPaths() {
  const responses = await RequestListArticles("");

  const paths = responses.map(
    (response) => "/blog/article/public/" + response.id
  );
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const article = await RequestReadArticle({
    id: params?.id as string,
  });

  return {
    props: {
      article: article,
    },
  };
};

const Index = (props: Props) => {

  const [stateVerified, setVerified] = useState<boolean>(false);

  useEffect(() => {
    const token = QueryToken();
    
    if(token) {
      RequestVerify(token).then((res) => {
        if(res.owner_id != "") {
          setVerified(true);
        }
      });
    }
  },[])

  return (
    <>
      <Config title={props.article == null ? "":props.article.title} subtitle={props.article == null ? "":props.article.subtitle} />
      <Header />
      <Base>
        <ArticleBox
          article={props.article}
          auth={stateVerified}
          showTimestamp={true}
        />
      </Base>
    </>
  );
};

export default Index;
