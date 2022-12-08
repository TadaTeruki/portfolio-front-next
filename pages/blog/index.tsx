import { GetStaticProps } from "next";
import Base from "../../components/base/base";
import Header from "../../components/header/header";
import RequestListArticles from "../../requests/articles/ListArticles";
import BlogBox from "../../components/blog/articles/box/box";

type Props = {
  articles: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await RequestListArticles({
    token: null,
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
      <Header />
      <Base>
        <BlogBox articles={props.articles} />
      </Base>
    </>
  );
};

export default Blog;
