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
            <Banner
                background_mode={'white'}
                height={'18em'}
                image_src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fpreset%2Fhakodate_landscape.webp?alt=media&token=c56b1fae-783a-4099-8af6-18b1081aeff6&_gl=1*njf2uv*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTk2ODM2Ny4zNS4xLjE2ODU5Njk5MTkuMC4wLjA."
            >
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
