import { GetStaticProps } from "next";
import Base from "../../components/all/base/base";
import Header from "../../components/all/header/header";
import RequestListArticles from "../../requests/articles/ListArticles";
import BlogBox from "../../components/blog/articles/box/box";

type Props = {
  articles: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  
  try {
    const response = await RequestListArticles({
      token: "",
    });
    return {
      props: {
        articles: response,
      },
    };
  } catch {
    return {
      props: {
        articles: [],
      },
    };
  }
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
