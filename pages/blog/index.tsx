import { GetStaticProps } from 'next';
import Base from '../../components/layout/base/base';
import RequestListArticles from '../../packages/requests/articles/ListArticles';
import BlogBox from '../../components/elements/blog/articles/box/box';
import HeadInfo from '../../components/headinfo/headinfo';
import RequestVerify from '../../packages/requests/auth/Verify';
import { QueryToken } from '../../packages/token/token';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Banner from '../../components/elements/general/banner/banner';
import PlainLink from '../../components/layout/link/plainlink/plainlink';
import JustifyBox from '../../components/layout/container/justifybox/justifybox';
import SearchBox from '../../components/elements/blog/articles/searchbox/searchbox';
import { useRouter } from 'next/router';
import TagBox from '../../components/elements/general/tagbox/tagbox';
import FlexListBox from '../../components/layout/container/flexlistbox/flexlistbox';
import InlineBox from '../../components/layout/container/inlinebox/inlinebox';

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

    const [stateNewKeyword, setNewKeyword] = useState<string>('');

    const router = useRouter();
    if (router.query.search) {
        let query = router.query.search as string;
        if (query != stateNewKeyword) {
            setNewKeyword(query);
        }
    }

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setNewKeyword(inputRef.current?.value as string);
    };

    const AddTag = (tag: string) => {
        if (stateNewKeyword == '') {
            setNewKeyword(tag);
        } else {
            setNewKeyword(inputRef.current?.value + ' ' + tag);
            inputRef.current!.value = inputRef.current?.value + ' ' + tag;
        }
    };

    const TagItem = (props: { tag: string }) => {
        return (
            <div
                onClick={() => {
                    AddTag(props.tag);
                }}
            >
                <TagBox hover={true}>{props.tag}</TagBox>
            </div>
        );
    };

    return (
        <>
            <HeadInfo title="Blogs" subtitle="技術や生活に関する記事" />
            <Banner background_mode={'white'} height={'18em'} image_src="/static/banners/hakodate_landscape.webp">
                <h1>Peruki&apos;s Blog</h1>
                <p>技術や生活に関する記事を載せています</p>
            </Banner>
            <Base>
                <h2>検索</h2>
                <SearchBox>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            ref={inputRef}
                            placeholder="キーワード（半角空白で複数指定）"
                            defaultValue={stateNewKeyword}
                        />
                        &nbsp;
                        <button type="submit">検索</button>
                    </form>
                </SearchBox>
                <div style={{ marginTop: '0.5em' }}>
                    <InlineBox>
                        <TagItem tag="#技術" />
                        <TagItem tag="#日記" />
                        <TagItem tag="#旅行" />
                        <TagItem tag="#活動" />
                        <TagItem tag="#函館" />
                        <TagItem tag="#未来大" />
                    </InlineBox>
                </div>

                <BlogBox articles={stateArticles} verified={stateVerified} keywords={stateNewKeyword.split(/;|,| /)} />
                <br />
                <JustifyBox type="center">
                    <PlainLink href={'/'}>
                        <button>トップへ戻る</button>
                    </PlainLink>
                </JustifyBox>
            </Base>
        </>
    );
};

export default Blog;
