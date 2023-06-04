import { useState } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '../list/list';
import { QueryToken } from '../../../../../packages/token/token';
import ErrorNotify from '../../../general/error_notify/error_notify';
import RequestPostArticle from '../../../../../packages/requests/article/PostArticle';
import BlogContainer from '../container/container';

const BlogBox = (props: { articles: any[]; verified: boolean }) => {
    const [stateErr, setErr] = useState<string>('');
    const router = useRouter();

    const createArticle = async () => {
        RequestPostArticle(
            {
                title: '新しい記事',
                subtitle: '',
                body: '',
                tags: [''],
                thumbnail: '',
                is_public: false
            },
            QueryToken()
        )
            .then(({ id }) => {
                router.push('/blog/article/edit/' + id);
            })
            .catch(() => {
                setErr('failed to load');
            });
    };

    return (
        <>
            <h1>Blog</h1>
            <p>技術や生活に関する記事を載せています</p>

            <BlogContainer>
                {props.verified ? (
                    <>
                        <button onClick={createArticle}>+ 新規作成</button>
                    </>
                ) : (
                    <></>
                )}
                <ArticleList articles={props.articles} size={-1} />
                <ErrorNotify>{stateErr}</ErrorNotify>
            </BlogContainer>
        </>
    );
};

export default BlogBox;
