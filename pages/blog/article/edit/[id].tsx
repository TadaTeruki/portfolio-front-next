import { useRouter } from "next/router";
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
