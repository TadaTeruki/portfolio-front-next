import Header from "../components/all/header/header";
import Base from "../components/all/base/base";
import Config from "../components/config/config";
import TabLinkBox from "../components/toppage/tablinkbox/tablinkbox";
import FlexListBox from "../components/all/flexlistbox/flexlistbox";
import ArticleList from "../components/blog/articles/list/list";
import { GetStaticProps } from "next";
import RequestListArticles from "../packages/requests/articles/ListArticles";
import BlogContainer from "../components/blog/articles/container/container";
import JustifyBox from "../components/all/justifybox/justifybox";
import PlainLink from "../components/all/link/plainlink/plainlink";
import IndentBox from "../components/all/indentbox/indentbox";
import ImageBox from "../components/all/imagebox/imagebox";
import ProductBox from "../components/toppage/productbox/productbox";
import StyledLink from "../components/all/link/styledlink/styledlink";
import Perufetch from "../components/toppage/perufetch/perufetch";
import RequestPerufetch from "../packages/requests/Perufetch";
import ScrollBox from "../components/all/scrollbox/scrollbox";

type Props = {
    articles: any[];
    perufetch: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const response = await RequestListArticles("");
    const perufetch = await RequestPerufetch();
    return {
        props: {
            articles: response,
            perufetch: perufetch,
        },
    };
};

const Component = (props: Props) => {
    return (
        <>
            <Config title="Welcome!" subtitle="ぺるきのポートフォリオ" />
            <Header />
            <Perufetch context={props.perufetch} />
            <Base>
                <JustifyBox type="center">
                    <h1>~ Peruki&apos;s Portfolio ~</h1>
                    <p>ぺるきのポートフォリオ</p>
                    <FlexListBox>
                        <TabLinkBox
                            href="#profile"
                            tabname="Profile"
                            description="プロフィール"
                        ></TabLinkBox>
                        <TabLinkBox
                            href="#activity"
                            tabname="Activities"
                            description="活動成果"
                        ></TabLinkBox>
                    </FlexListBox>
                    <FlexListBox>
                        <TabLinkBox
                            href="#blog"
                            tabname="Blog"
                            description="技術や生活に関する記事"
                        ></TabLinkBox>
                        <TabLinkBox
                            href="#access"
                            tabname="Contact"
                            description="連絡先"
                        ></TabLinkBox>
                    </FlexListBox>

                    <JustifyBox type="left">
                        <br />
                        <a id="profile">
                            <h1>Profile</h1>
                        </a>
                        
                        <IndentBox>
                            <h2>基本情報</h2>
                            <ScrollBox>
                                <IndentBox>
                                    本名 : 多田 瑛貴, ただ てるき, Teruki TADA
                                    <br />
                                    在住 : 北海道函館市
                                    <br />
                                    生年月 : 2002年8月 (26卒)
                                    <br />
                                    <br />
                                </IndentBox>
                            </ScrollBox>
                            <h2>経歴</h2>
                            <ScrollBox>
                                <IndentBox>
                                    現在 : 公立はこだて未来大学 システム情報科学部
                                    在学中
                                    <br />
                                    2022年3月 : 京都府立清明高等学校
                                    (昼間定時制・4年卒コース) 卒業
                                    <br />
                                    2021年3月 : 国立情報学研究所
                                    情報科学の達人プログラム(第一期) 第二段階修了
                                    <br />
                                    2018年3月 : 龍谷大学付属平安中学校 卒業
                                </IndentBox>
                            </ScrollBox>
                            <h2>キャリア</h2>
                            <ScrollBox>
                            <IndentBox>
                                <h3>インターンシップ</h3>
                                <IndentBox>
                                    2022年3月 : 株式会社メルカリ&nbsp;
                                    <StyledLink href="https://mercan.mercari.com/articles/31914/">
                                        Online Spring Internship for Gophers
                                        2022
                                    </StyledLink>
                                </IndentBox>
                            </IndentBox>
                            </ScrollBox>
                        </IndentBox>
                        <br />
                        <a id="activity">
                            <h1>Activities</h1>
                        </a>
                        <IndentBox>
                            <h2>情報表現</h2>
                            <IndentBox>
                               ・地形生成
                                <br />
                               ・アート活動
                                <br />
                               ・ゲーム開発
                                <br />
                                <h3></h3>
                                <IndentBox>
                                    <ProductBox
                                        name="RDGL"
                                        description="地形生成ライブラリ"
                                        link="https://github.com/TadaTeruki/RDGL"
                                        skills={["Go", "個人開発"]}
                                        image="https://user-images.githubusercontent.com/57752033/144703530-7a11bd6b-ef2f-4f66-bf7f-e2b42098eedc.png"
                                        awards={[]}
                                    />
                                    <ProductBox
                                        name="教科書Breakout"
                                        description="教科書をコントローラーにする体感ゲーム"
                                        link="https://github.com/TadaTeruki/TextBookBreakout"
                                        skills={["Processing", "講義課題"]}
                                        image="https://user-images.githubusercontent.com/69315285/181797584-5ee26c4f-5110-453d-ae63-7e4d67915e36.png"
                                        awards={[
                                            "講義:情報表現入門 最優秀作品賞(教員・TA評価部門)",
                                        ]}
                                    />
                                    <ProductBox
                                        name="Spell Hunter"
                                        description="1week開発 魔法がテーマのシューティングゲーム"
                                        link="https://tadateruki.itch.io/spell-hunter"
                                        skills={["JavaScript", "チーム開発"]}
                                        image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fspellhunter.png?alt=media&token=67b1c917-3588-4075-b09e-16e33e140f18"
                                        awards={["いわしジャム#1 投票1位"]}
                                    />
                                    <ProductBox
                                        name="TransportNetworkSimulator"
                                        description="探索アルゴリズムを用いた交通網の再現シミュレーション"
                                        link="https://github.com/Perukii/TransportNetworkSimulator"
                                        skills={["Go", "個人開発"]}
                                        image="https://user-images.githubusercontent.com/57752033/131674598-3f096d48-1b9f-45d2-9d17-067218a0c2a3.png"
                                        awards={[]}
                                    />
                                </IndentBox>
                            </IndentBox>
                            <h2>GUI</h2>
                            <IndentBox>
                               ・ウインドウマネージャ
                                <br />
                               ・ウインドウアプリケーションフレームワーク
                                <br />
                                <h3></h3>
                                <IndentBox>
                                    <ProductBox
                                        name="MiteWM"
                                        description="Linux向けウインドウマネージャ"
                                        link="https://github.com/Perukii/MiteWM"
                                        skills={["C", "個人開発"]}
                                        image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fmitewm.png?alt=media&token=e2f6e520-8947-492a-82d0-281e479c2009"
                                        awards={[
                                            "技育展2020 敢闘賞 (テーマ: ぼくのさいきょうの◯◯)",
                                        ]}
                                    />
                                </IndentBox>
                            </IndentBox>
                            <h2>情報科学研究</h2>
                            
                                <IndentBox>
                                ・空間的データ構造
                                    <br />
                                ・コンピュータグラフィックス
                                    <br />
                                    <h3></h3>
                                    <IndentBox>
                                        <h3>CurtainRail構造 (2020-2022)</h3>
                                        <ScrollBox>
                                            <IndentBox>
                                                分野 :{" "}
                                                空間データ構造
                                                <br />
                                                期間 : 2020-2022
                                                <br />
                                                <br />
                                                
                                                    ポスター発表: CurtainRail 構造 –
                                                    空間インデックス 新手法の提案
                                                
                                                <IndentBox>
                                                    情報処理学会
                                                    第3回中高生情報学研究コンテストにて掲載
                                                    <br />
                                                </IndentBox>
                                                <br />
                                                
                                                    論文(査読無):
                                                    CurtainRail:多層の線形構造に基づいた動的空間データ構造
                                                
                                                <br />( CurtainRail: A
                                                linear-structure-based kinetic data
                                                structure for spatial searching )
                                                <IndentBox>
                                                    情報科学技術フォーラム(FIT2022)にて講演・掲載
                                                    <br />
                                                    情報科学技術フォーラム講演論文集,
                                                    21巻, 第1分冊, pp.123-126 (2022)
                                                    <br />
                                                </IndentBox>
                                            </IndentBox>
                                        </ScrollBox>

                                        <ProductBox
                                            name="総合資料 (英語)"
                                            description=""
                                            link="https://github.com/TadaTeruki/CurtainRail-2022"
                                            skills={[]}
                                            image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fcr.png?alt=media&token=b4262300-97a4-4308-b06c-6b0d6ece28e9"
                                            awards={[]}
                                        />
                                    </IndentBox>
                                </IndentBox>
                            
                            <h2>Web開発</h2>
                            <IndentBox>
                               ・Webアプリケーション
                                <br />
                               ・フロントエンド
                                <br />
                                <h3></h3>
                                <IndentBox>
                                    <ProductBox
                                        name="Peruki's Portfolio"
                                        description="ぺるきのポートフォリオ (本サイト)"
                                        link="https://github.com/TadaTeruki/portfolio-front-next"
                                        skills={[
                                            "TypeScript",
                                            "Next.JS",
                                            "Firebase",
                                            "個人開発",
                                        ]}
                                        image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fportfolio.png?alt=media&token=71a59fca-0a75-4fcb-a2b6-aeec86c94b54"
                                        awards={[]}
                                    />
                                    <ProductBox
                                        name="Flyme"
                                        description="学内ハッカソンp2hacks にて開発 バックエンドを担当"
                                        link="https://github.com/p2hacks2022/pre-team03"
                                        skills={["Go", "echo", "チーム開発"]}
                                        image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fflyme.png?alt=media&token=878b71bb-4fef-453d-b414-ac6bbe8b65df"
                                        awards={["pixiv賞受賞"]}
                                    />
                                    <ProductBox
                                        name="Depotify"
                                        description="学内ハッカソンHackathon for FUN 2022にて開発 バックエンドおよびプロダクトデザインを担当"
                                        link="https://github.com/fung-hackathon/depotify"
                                        skills={["Go", "echo", "チーム開発"]}
                                        image="https://raw.githubusercontent.com/fung-hackathon/depotify/d9010c16ef17ff9f16b0045ac4d8fa857450e6f1/image/Icon.svg"
                                        awards={[]}
                                    />
                                </IndentBox>
                            </IndentBox>

                            <h2>基礎実装</h2>
                            <IndentBox>
                               ・グラフィックス領域<br />
                               ・データ構造
                                <br />
                                <h3></h3>
                                <IndentBox>
                                    <ProductBox
                                        name="NoiseGo"
                                        description="パーリンノイズのGo言語実装"
                                        link="https://github.com/TadaTeruki/NoiseGo"
                                        skills={[
                                            "Go",
                                            "グラフィックス",
                                            "個人開発",
                                        ]}
                                        image="https://user-images.githubusercontent.com/69315285/150670142-3a5530cf-30f3-4dd7-9d34-36e9aec0c988.png"
                                        awards={[]}
                                    />
                                    <ProductBox
                                        name="priority_queue"
                                        description="優先度つきキューの表現"
                                        link="https://github.com/TadaTeruki/go-priority-queue"
                                        skills={[
                                            "Go",
                                            "データ構造",
                                            "個人開発"]
                                        }
                                        image=""
                                        awards={[]}
                                    />
                                    <ProductBox
                                        name="graph"
                                        description="隣接リスト表現によるグラフの表現"
                                        link="https://github.com/TadaTeruki/graph"
                                        skills={[
                                            "Go",
                                            "データ構造",
                                            "個人開発"]
                                        }
                                        image=""
                                        awards={[]}
                                    />
                                </IndentBox>
                            </IndentBox>

                            <h2>コミュニティ活動</h2>
                            <IndentBox>
                               ・技術コミュニティ運営<br />
                               ・技術イベント主催
                                <br />
                                <h3></h3>
                                <IndentBox>
                                    <ProductBox
                                        name="Mariners' Conference LT '23 Spring"
                                        description="LTイベント in 函館市亀田交流プラザ 企画・運営"
                                        link="https://mariconf.connpass.com/event/276729/"
                                        skills={[
                                            "LT",
                                        ]}
                                        image="https://connpass-tokyo.s3.amazonaws.com/thumbs/74/ae/74ae2fdd51bdc282b595a4c41aa46bc7.png"
                                        awards={[]}
                                    />
                                </IndentBox>
                            </IndentBox>
                        </IndentBox>
                        <br />
                        <a id="blog">
                            <h1>Blog</h1>
                        </a>
                        <BlogContainer>
                            <h2>最新3件&emsp;</h2>
                            <ArticleList articles={props.articles} size={3} />
                            <JustifyBox type="center">
                                <PlainLink href={"/blog"}>
                                    <button style={{margin:"5mm"}}>
                                        もっと見る
                                    </button>
                                </PlainLink>
                            </JustifyBox>
                        </BlogContainer>

                        <br />
                        <a id="access">
                            <h1>Contact</h1>
                        </a>
                        <IndentBox>
                            <ImageBox
                                height="200mm"
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fkamakura.jpeg?alt=media&token=f17eb89f-330d-43ee-93a4-fbade342044d"
                            >
                                <p>
                                    Email :{" "}
                                    tadateruki.public@gmail.com
                                    <br />
                                    Twitter : <StyledLink href="https://twitter.com/PerukiFUN">@PerukiFUN</StyledLink>
                                    <br />
                                    GitHub : <StyledLink href="https://github.com/TadaTeruki">TadaTeruki</StyledLink>
                                </p>
                            </ImageBox>
                        </IndentBox>
                    </JustifyBox>
                </JustifyBox>
            </Base>
        </>
    );
};

export default Component;
