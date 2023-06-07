import { GetStaticProps } from 'next';
import Base from '../../../../components/layout/base/base';
import RequestReadArticle from '../../../../packages/requests/article/ReadArticle';
import RequestVerify from '../../../../packages/requests/auth/Verify';
import ArticleBox from '../../../../components/elements/blog/article/box/box';
import HeadInfo from '../../../../components/headinfo/headinfo';
import RequestListArticles from '../../../../packages/requests/articles/ListArticles';
import { QueryToken } from '../../../../packages/token/token';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MainContainer from '../../../../components/layout/container/maincontainer/maincontainer';
import Banner from '../../../../components/elements/general/banner/banner';

type Props = {
    article: any | null;
};

export async function getStaticPaths() {
    const responses = await RequestListArticles('');

    const paths = responses.map((response) => '/blog/article/public/' + response.id);
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const article = await RequestReadArticle({
        id: params?.id as string
    });

    return {
        props: {
            article: article
        }
    };
};

const BlogPublic = (props: Props) => {
    const [stateVerified, setVerified] = useState<boolean>(false);

    useEffect(() => {
        const token = QueryToken();

        if (token) {
            RequestVerify(token).then((res) => {
                if (res.owner_id != '') {
                    setVerified(true);
                }
            });
        }
    }, []);

    return (
        <>
            <HeadInfo
                title={props.article == null ? '' : props.article.title}
                subtitle={props.article == null ? '' : props.article.subtitle}
            />
            <Banner
                image_src={props.article == null ? '' : props.article.thumbnail}
                height={'9em'}
                background_mode={'white'}
            >
                <h2>Peruki&apos;s Blog</h2>
                <p>技術や生活に関する記事を載せています</p>
            </Banner>

            <Base>
                <ArticleBox article={props.article} auth={stateVerified} showTimestamp={true} />
            </Base>
        </>
    );
};

export default BlogPublic;
