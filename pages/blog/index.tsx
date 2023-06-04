import { GetStaticProps } from 'next';
import Base from '../../components/all/base/base';
import RequestListArticles from '../../packages/requests/articles/ListArticles';
import BlogBox from '../../components/blog/articles/box/box';
import Config from '../../components/headinfo/headinfo';
import RequestVerify from '../../packages/requests/auth/Verify';
import { QueryToken } from '../../packages/token/token';
import { useEffect, useState } from 'react';

type Props = {
    articles: any[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const articles = await RequestListArticles('');

    return {
        props: {
            articles: articles
        }
    };
};

const Blog = (props: Props) => {
    const [stateArticles, setArticles] = useState<any[]>(props.articles);
    const [stateVerified, setVerified] = useState<boolean>(false);

    useEffect(() => {
        const token = QueryToken();

        if (token) {
            RequestVerify(token).then((res) => {
                if (res.owner_id != '') {
                    setVerified(true);
                }
            });
            RequestListArticles(token).then((res) => {
                setArticles(res);
            });
        }
    }, []);

    return (
        <>
            <Config title="Blogs" subtitle="技術や生活に関する記事" />
            <Base>
                <BlogBox articles={stateArticles} verified={stateVerified} />
            </Base>
        </>
    );
};

export default Blog;
