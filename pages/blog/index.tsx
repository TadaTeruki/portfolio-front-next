import { GetServerSideProps } from "next";
import Base from "../../components/all/base/base";
import Header from "../../components/all/header/header";
import RequestListArticles from "../../packages/requests/articles/ListArticles";
import BlogBox from "../../components/blog/articles/box/box";
import Config from "../../components/config/config";
import RequestVerify from "../../packages/requests/auth/Verify";

type Props = {
  articles: any[];
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

  const response = await RequestListArticles(verified);

  return {
    props: {
      articles: response,
      verified: verified,
    },
  };
};

const Blog = (props: Props) => {
  return (
    <>
      <Config title="Blogs" subtitle="技術や生活に関する記事" />
      <Header />
      <Base>
        <BlogBox articles={props.articles} verified={props.verified}/>
      </Base>
    </>
  );
};

export default Blog;
