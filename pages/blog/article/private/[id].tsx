import Base from '../../../../components/layout/base/base';
import RequestReadArticle from '../../../../packages/requests/article/ReadArticle';
import ArticleBox from '../../../../components/elements/blog/article/box/box';
import HeadInfo from '../../../../components/headinfo/headinfo';
import RequestVerify from '../../../../packages/requests/auth/Verify';
import { QueryToken } from '../../../../packages/token/token';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BlogPrivate = () => {
    const router = useRouter();

    const [stateArticle, setArticle] = useState<any>(null);
    const [stateVerified, setVerfied] = useState<boolean>(false);

    useEffect(() => {
        RequestVerify(QueryToken()).then(() => {
            setVerfied(true);
        });
        RequestReadArticle({ id: router.query.id as string }).then((article) => {
            setArticle(article);
        });
    }, [router.query.id]);

    return (
        <>
            <HeadInfo
                title={stateArticle == null ? '' : stateArticle.title}
                subtitle={stateArticle == null ? '' : stateArticle.subtitle}
            />
            <Base>
                <ArticleBox article={stateArticle} auth={stateVerified} showTimestamp={true} />
            </Base>
        </>
    );
};

export default BlogPrivate;
