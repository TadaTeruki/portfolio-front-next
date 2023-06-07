import { useState } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '../list/list';
import { QueryToken } from '../../../../../packages/token/token';
import ErrorNotify from '../../../general/error_notify/error_notify';
import RequestPostArticle from '../../../../../packages/requests/article/PostArticle';
import styles from './box.module.css';

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
            {props.verified ? <button onClick={createArticle}>+ 新規作成</button> : <></>}
            <h2 className={styles.head}>新着順</h2>
            <ArticleList articles={props.articles} size={-1} />
            <ErrorNotify>{stateErr}</ErrorNotify>
        </>
    );
};

export default BlogBox;
