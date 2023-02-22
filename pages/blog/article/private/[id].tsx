import Header from "../../../../components/all/header/header";
import Base from "../../../../components/all/base/base";
import RequestReadArticle from "../../../../packages/requests/article/ReadArticle";
import ArticleBox from "../../../../components/blog/article/box/box";
import Config from "../../../../components/config/config";
import RequestVerify from "../../../../packages/requests/auth/Verify";
import { GetServerSideProps } from "next";

type Props = {
  article: any | null;
  verified: boolean;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => { 
  var verified = false;
  var cookie = require("cookie");
  if(context.req.headers.cookie) {
    const cookieData = cookie.parse(context.req.headers.cookie);
    if (cookieData.portfolioToken) {
      await RequestVerify(cookieData.portfolioToken).then(() => {
        verified = true;
      });
    }
  }

  if(verified == false) {
    // TODO: 404ページを表示
    return {
      props: {
        article: null,
        verified: verified,
      },
    };
  }

  const response = await RequestReadArticle({ id: context.params?.id as string, });
  return {
    props: {
      article: response,
      verified: verified,
    },
  };
};


const Index = (props: Props) => {
  return (
    <>
      <Config title={props.article == null ? "":props.article.title} subtitle={props.article == null ? "":props.article.subtitle} />
      <Header />
      <Base>
        <ArticleBox
          article={props.article}
          auth={props.verified}
          showTimestamp={true}
        />
      </Base>
    </>
  );
};

export default Index;
