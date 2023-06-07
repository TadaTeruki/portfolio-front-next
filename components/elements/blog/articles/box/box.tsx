import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArticleList from '../list/list';
import { QueryToken } from '../../../../../packages/token/token';
import ErrorNotify from '../../../general/error_notify/error_notify';
import RequestPostArticle from '../../../../../packages/requests/article/PostArticle';
import styles from './box.module.css';

const BlogBox = (props: { articles: any[]; verified: boolean; keywords: string[] }) => {
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

    let keywords = props.keywords.filter((keyword) => keyword.length > 0);

    const search_article = () => {
        if (keywords.length == 0) {
            return { matched: props.articles, possible: [], others: [] };
        }
        let matched: any[] = [];
        let possible: any[] = [];
        let others: any[] = [];
        let scores = new Array<number>(props.articles.length).fill(0);

        const tag_score = 10;
        const title_score = 3;
        const subtitle_score = 1;

        for (let i = 0; i < props.articles.length; i++) {
            // tags
            for (let j = 0; j < keywords.length; j++) {
                let keyword = keywords[j].toLowerCase();
                for (let k = 0; k < props.articles[i].tags.length; k++) {
                    let tag = props.articles[i].tags[k].toLowerCase();
                    if (keyword[0] == '#') {
                        let word = keyword.substring(1, keyword.length);
                        if (tag == word) {
                            scores[i] += tag_score;
                        }
                    } else if (tag.indexOf(keyword) != -1) {
                        scores[i] += tag_score / 2;
                    }
                }
            }
            // title
            for (let j = 0; j < keywords.length; j++) {
                let keyword = keywords[j].toLowerCase();
                if (props.articles[i].title.toLowerCase().indexOf(keyword) != -1) {
                    scores[i] += title_score;
                    break;
                }
            }
            // subtitle
            for (let j = 0; j < keywords.length; j++) {
                let keyword = keywords[j].toLowerCase();
                if (props.articles[i].subtitle.toLowerCase().indexOf(keyword) != -1) {
                    scores[i] += subtitle_score;
                    break;
                }
            }
        }

        // get max score
        let max_score = 0;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] > max_score) {
                max_score = scores[i];
            }
        }

        // get matched articles
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] == max_score && max_score > 0) {
                matched.push(props.articles[i]);
            } else if (scores[i] > 0) {
                possible.push(props.articles[i]);
            } else {
                others.push(props.articles[i]);
            }
        }

        return { matched, possible, others };
    };

    const articles = search_article();

    const [stateFadeClass, setFadeClass] = useState(true);

    useEffect(() => {
        setFadeClass(true);
        setTimeout(() => {
            setFadeClass(false);
        }, 150);
    }, [props.keywords]);

    return (
        <div className={stateFadeClass ? styles.fadein : ''}>
            {props.verified ? <button onClick={createArticle}>+ 新規作成</button> : <></>}
            {props.keywords.length == 1 && props.keywords[0] == '' ? (
                <>
                    <h2 className={styles.head}>新しい順</h2>
                    <ArticleList articles={props.articles} size={-1} />
                </>
            ) : (
                <>
                    <h2 className={styles.head}>検索結果</h2>
                    {articles.matched.length > 0 ? (
                        <ArticleList articles={articles.matched} size={-1} />
                    ) : (
                        <p>候補が見つかりませんでした。</p>
                    )}
                    {articles.possible.length > 0 ? (
                        <>
                            <h2 className={styles.head}>可能性のある候補</h2>
                            <ArticleList articles={articles.possible} size={-1} />
                        </>
                    ) : (
                        <></>
                    )}
                    <h2 className={styles.head}>その他の記事</h2>
                    <ArticleList articles={articles.others} size={-1} />
                </>
            )}
            <ErrorNotify>{stateErr}</ErrorNotify>
        </div>
    );
};

export default BlogBox;
