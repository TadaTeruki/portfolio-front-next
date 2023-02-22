import { GetServerSideProps } from "next";
import Base from "../../../../components/all/base/base";
import Header from "../../../../components/all/header/header";
import RequestReadArticle from "../../../../packages/requests/article/ReadArticle";
import RequestVerify from "../../../../packages/requests/auth/Verify";
import ArticleBox from "../../../../components/blog/article/box/box";
import Config from "../../../../components/config/config";

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
