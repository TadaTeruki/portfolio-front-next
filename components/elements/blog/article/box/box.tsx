import Timestamp from '../../timestamp/timestamp';
import ArticleView from '../view/view';
import styles from './box.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PlainLink from '../../../../layout/link/plainlink/plainlink';
import { QueryToken } from '../../../../../packages/token/token';
import RequestDeleteArticle from '../../../../../packages/requests/article/DeleteArticle';
import ErrorNotify from '../../../general/error_notify/error_notify';

const ArticleBox = (props: { article: any; auth: boolean; showTimestamp: boolean }) => {
    const [stateCheckDelete, setCheckDelete] = useState<boolean>(false);
    const [stateErr, setErr] = useState<string>('');
    const router = useRouter();

    const deleteArticle = () => {
        RequestDeleteArticle(
            {
                id: props.article.id
            },
            QueryToken()
        )
            .then(() => {
                router.push('/blog');
            })
            .catch((err) => {
                setErr(err);
            });
    };

    return (
        <>
            {props.auth && props.article != null ? (
                <>
                    <PlainLink href={'/blog/article/edit/' + props.article.id}>
                        <button>編集</button>
                    </PlainLink>
                    &emsp;
                    <button className={styles.danger} onClick={() => setCheckDelete(true)}>
                        削除
                    </button>
                    {stateCheckDelete ? (
                        <>
                            <br />
                            <br />
                            本当に削除しますか？
                            <br />
                            <button className={styles.danger} onClick={deleteArticle}>
                                はい
                            </button>
                            &emsp;
                            <button onClick={() => setCheckDelete(false)}>いいえ</button>
                        </>
                    ) : (
                        <></>
                    )}
                </>
            ) : (
                <></>
            )}
            {props.article == null ? (
                <p>記事取得中...</p>
            ) : (
                <ArticleView article={props.article} showTimestamp={true} tablink={true} />
            )}

            <div className={styles.footer}>
                <h2>Peruki&apos;s Portfolio</h2>
                <p>記事作成者: 多田 瑛貴 Teruki TADA</p>
                {props.article == null ? (
                    <></>
                ) : (
                    <>
                        <Timestamp raw={props.article.created_at} withTime={true} label={'記事作成日'} />
                        <br />
                        <Timestamp raw={props.article.updated_at} withTime={true} label={'最終更新日'} />
                        <br />
                    </>
                )}
            </div>
            <PlainLink href="/blog">
                <button>リストに戻る</button>
            </PlainLink>
            <ErrorNotify>{stateErr}</ErrorNotify>
        </>
    );
};

export default ArticleBox;
