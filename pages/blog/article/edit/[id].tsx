import { useRouter } from "next/router";
import Header from "../../../../components/header/header";
import Base from "../../../../components/base/base";
import ArticleEdit from "../../../../components/blog/article/edit/edit";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <ArticleEdit id={router.query.id as string} />
    </>
  );
};

export default Index;
