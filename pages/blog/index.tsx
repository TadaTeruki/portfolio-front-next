import { GetStaticProps } from 'next';
import Base from '../../components/layout/base/base';
import RequestListArticles from '../../packages/requests/articles/ListArticles';
import BlogBox from '../../components/elements/blog/articles/box/box';
import HeadInfo from '../../components/headinfo/headinfo';
import RequestVerify from '../../packages/requests/auth/Verify';
import { QueryToken } from '../../packages/token/token';
import { useEffect, useState } from 'react';
import Banner from '../../components/elements/general/banner/banner';

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
            <HeadInfo title="Blogs" subtitle="技術や生活に関する記事" />
            <Banner background_mode={'white'} height={'18em'} image_src="/static/banners/hakodate_landscape.webp">
                <h1>Peruki&apos;s Blog</h1>
                <p>技術や生活に関する記事を載せています</p>
            </Banner>
            <Base>
                <BlogBox articles={stateArticles} verified={stateVerified} />
            </Base>
        </>
    );
};

export default Blog;
