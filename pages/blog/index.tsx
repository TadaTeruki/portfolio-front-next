import { GetStaticProps } from "next";
import Base from "../../components/all/base/base";
import Header from "../../components/all/header/header";
import RequestListArticles from "../../requests/articles/ListArticles";
import BlogBox from "../../components/blog/articles/box/box";
import Config from "../../components/config/config";

type Props = {
  articles: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const response = await RequestListArticles({
    token: "",
  });

  return {
    props: {
      articles: response,
    },
  };
};

const Blog = (props: Props) => {
  
  return (
    <>
      <Config title="Blogs" subtitle="ぺるきのブログです 技術や生活に関する記事を載せています" />
      <Header />
      <Base>
        <BlogBox articles={props.articles} />
      </Base>
    </>
  );
};

export default Blog;
