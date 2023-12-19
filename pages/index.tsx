import Base from '../components/layout/base/base';
import HeadInfo from '../components/headinfo/headinfo';
import TabLinkBox from '../components/elements/home/tablinkbox/tablinkbox';
import FlexListBox from '../components/layout/container/flexlistbox/flexlistbox';
import ArticleList from '../components/elements/blog/articles/list/list';
import { GetStaticProps } from 'next';
import RequestListArticles from '../packages/requests/articles/ListArticles';
import JustifyBox from '../components/layout/container/justifybox/justifybox';
import PlainLink from '../components/layout/link/plainlink/plainlink';
import IndentBox from '../components/layout/container/indentbox/indentbox';
import ProductBox from '../components/elements/home/productbox/productbox';
import StyledLink from '../components/layout/link/styledlink/styledlink';
import Perufetch from '../components/elements/home/perufetch/perufetch';
import RequestPerufetch from '../packages/requests/Perufetch';
import ScrollBox from '../components/layout/container/scrollbox/scrollbox';
import styles from '../styles/Home.module.css';
import ButtonContainer from '../components/layout/container/buttoncontainer/buttoncontainer';

type Props = {
    articles: any[];
    perufetch: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
    const response = await RequestListArticles('');
    const perufetch = await RequestPerufetch();
    return {
        props: {
            articles: response,
            perufetch: perufetch
        }
    };
};

const Home = (props: Props) => {
    return (
        <>
            <HeadInfo title="Welcome!" subtitle="ぺるきのポートフォリオ" />
            <Perufetch context={props.perufetch} />
            <Base>
                <JustifyBox type="center">
                    <h1>
                        <div className={styles.page_title}>Peruki&apos;s Portfolio</div>
                        <div className={styles.page_subtitle}>ぺるきのポートフォリオ</div>
                    </h1>

                    <FlexListBox>
                        <TabLinkBox href="#profile" tabname="Profile" description="プロフィール"></TabLinkBox>
                        <TabLinkBox href="#activity" tabname="Activities" description="活動成果"></TabLinkBox>
                    </FlexListBox>
                    <FlexListBox>
                        <TabLinkBox href="#blog" tabname="Blog" description="技術や生活に関する記事"></TabLinkBox>
                        <TabLinkBox href="#access" tabname="Contact" description="連絡先"></TabLinkBox>
                    </FlexListBox>

                    <JustifyBox type="left">
                        <div id="profile">
                            <h1 className={styles.category}>Profile</h1>
                        </div>

                        <IndentBox>
                            <h2>ちょっとした自己紹介</h2>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fwelcome.webp?alt=media&token=7ef4216f-3ecd-4108-8639-fc12070364c1"
                                width="100%"
                            />
                            <IndentBox>
                                ▲ よく描くマイキャラクターです。
                                <ul>
                                    <li>
                                        地図が好きです。地図帳を毎年買い替えています。
                                        <br />
                                        <StyledLink href="https://en.wikipedia.org/wiki/Procedural_generation">
                                            手続き的生成
                                        </StyledLink>
                                        の目標になっている他、WebGIS開発にも取り組んでいます。
                                        <br />
                                        架空の世界を生成することが、目標の一つです。
                                    </li>
                                    <li>
                                        少し古いものが好きです。1980年代の文化が好き。
                                        <br />
                                        その時代のゲームを探して楽しんだり、音楽もよく聴きます。
                                    </li>
                                    <li>
                                        たま〜に絵を描いています。(講義中はずっと描いてますが...)
                                        <br />
                                        爬虫類はじめ、動物の絵をよく描きます。
                                    </li>
                                    <li>
                                        技術好きというよりも、素敵な見た目のモノを作ることが好きです。
                                        <br />
                                    </li>
                                    <br />
                                </ul>
                            </IndentBox>
                            <h2>基本情報</h2>
                            <ScrollBox>
                                <IndentBox>
                                    本名 : 多田 瑛貴, ただ てるき, Teruki TADA
                                    <br />
                                    在住 : 北海道函館市
                                    <br />
                                    ゆかり : 京都府京都市, 広島県福山市
                                    <br />
                                    生年月 : 2002年8月 (26卒)
                                </IndentBox>
                            </ScrollBox>
                            <h2>経歴</h2>
                            <ScrollBox>
                                <IndentBox>
                                    現在 : 公立はこだて未来大学 システム情報科学部 在学中
                                    <br />
                                    2022年3月 : 京都府立清明高等学校 (昼間定時制・4年卒コース) 卒業
                                    <br />
                                    2018年3月 : 龍谷大学付属平安中学校 卒業
                                </IndentBox>
                            </ScrollBox>
                            <h2>活動・キャリア</h2>
                            <ScrollBox>
                                <IndentBox>
                                    <h3>育成事業</h3>
                                    <IndentBox>
                                        2023年9月 - 現在 : 北海道ITクリエータ発掘・育成事業 (新雪プログラム) <br />
                                        2023年6月 - 現在 : サイボウズ・ラボユース 開発コース (星野ラボ) <br />
                                        2020年4月 - 2021年3月 :&nbsp;
                                        <StyledLink href="https://www.nii.ac.jp/tatsujin/">
                                            NII 情報科学の達人 第1期生
                                        </StyledLink>
                                    </IndentBox>
                                </IndentBox>
                                <IndentBox>
                                    <h3>インターンシップ</h3>
                                    <IndentBox>
                                        2023年9月 : MIERUNE Inc.&nbsp;
                                        <StyledLink href="https://note.com/mierune/n/nf03a588ec7a4">
                                            振り返り記事
                                        </StyledLink>
                                        <br />
                                        2022年3月 : 株式会社メルカリ&nbsp;
                                        <StyledLink href="https://mercan.mercari.com/articles/31914/">
                                            Online Spring Internship for Gophers 2022
                                        </StyledLink>
                                    </IndentBox>
                                </IndentBox>
                            </ScrollBox>
                            <br />
                            最終更新日: 2023年12月19日
                        </IndentBox>
                        <div id="activity">
                            <h1 className={styles.category}>Activities</h1>
                        </div>
                        <IndentBox>
                            <h2 className={styles.subcategory}>情報表現</h2>
                            <IndentBox>
                                ・手続き的生成
                                <br />
                                ・アート活動
                                <br />
                                ・ゲーム開発
                            </IndentBox>
                            <ProductBox
                                name="fastlem"
                                description="地形生成ライブラリ(開発中)"
                                link="https://github.com/TadaTeruki/fastlem"
                                skills={['Rust', '個人開発', '手続き的生成']}
                                image="https://raw.githubusercontent.com/TadaTeruki/fastlem/main/sample.webp"
                                awards={['北海道ITクリエータ発掘・育成事業 (新雪プログラム) にて開発中']}
                            />
                            <ProductBox
                                name="RDGL"
                                description="旧地形生成ライブラリ"
                                link="https://github.com/TadaTeruki/RDGL"
                                skills={['Go', '個人開発', '手続き的生成']}
                                image="https://user-images.githubusercontent.com/57752033/144703530-7a11bd6b-ef2f-4f66-bf7f-e2b42098eedc.png"
                                awards={[]}
                            />
                            <ProductBox
                                name="この世界は熱すぎる!!!"
                                description="学内ハッカソンp2hacks 2023にて開発 ゲームロジック実装を担当"
                                link="https://github.com/p2hacks2023/pre-06"
                                skills={['TypeScript', 'Vite', 'チーム開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2F%E3%81%93%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%AF%E7%86%B1%E9%81%8E%E3%81%8D%E3%82%99%E3%82%8B.webp?alt=media&token=151ade64-7a25-4dc0-8208-05381b3fdcd0"
                                awards={['Pre-PBL部門 優秀賞受賞']}
                            />
                            <ProductBox
                                name="教科書Breakout"
                                description="教科書をコントローラーにする体感ゲーム"
                                link="https://github.com/TadaTeruki/TextBookBreakout"
                                skills={['Processing', '講義課題']}
                                image="https://user-images.githubusercontent.com/69315285/181797584-5ee26c4f-5110-453d-ae63-7e4d67915e36.png"
                                awards={['講義:情報表現入門 最優秀作品賞(教員・TA評価部門)']}
                            />
                            <ProductBox
                                name="Spell Hunter"
                                description="1week開発 魔法がテーマのシューティングゲーム"
                                link="https://tadateruki.itch.io/spell-hunter"
                                skills={['JavaScript', 'チーム開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fspellhunter.png?alt=media&token=67b1c917-3588-4075-b09e-16e33e140f18"
                                awards={['いわしジャム#1 投票1位']}
                            />
                            <ProductBox
                                name="ちょっとした流体シミュレーション"
                                description="Go言語+Ebitengineでの流体シミュレーションの実装"
                                link="https://github.com/TadaTeruki/fluid-simulation-go"
                                skills={['Go', 'Ebiten', '個人開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Ffluid.webp?alt=media&token=36e62a65-d2da-4d7a-83be-615d696c6901"
                                awards={[]}
                            />
                            <ProductBox
                                name="TransportNetworkSimulator"
                                description="探索アルゴリズムを用いた交通網の再現シミュレーション"
                                link="https://github.com/Perukii/TransportNetworkSimulator"
                                skills={['Go', '個人開発']}
                                image="https://user-images.githubusercontent.com/57752033/131674598-3f096d48-1b9f-45d2-9d17-067218a0c2a3.png"
                                awards={[]}
                            />

                            <h2 className={styles.subcategory}>GUI</h2>
                            <IndentBox>
                                ・ウインドウマネージャ
                                <br />
                                ・ウインドウアプリケーションフレームワーク
                            </IndentBox>
                            <ProductBox
                                name="pdock"
                                description="sway向けドックアプリケーション"
                                link="https://github.com/TadaTeruki/pdock"
                                skills={['Rust', 'GTK4', '個人開発', 'Wayland']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fpdock.webp?alt=media&token=a86f4ca5-255e-4ad7-8e7a-a61d4878d0f4"
                                awards={['']}
                            />
                            <ProductBox
                                name="MiteWM"
                                description="Linux向けウインドウマネージャ"
                                link="https://github.com/Perukii/MiteWM"
                                skills={['C', '個人開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fmitewm.png?alt=media&token=e2f6e520-8947-492a-82d0-281e479c2009"
                                awards={['技育展2020 敢闘賞 (テーマ: ぼくのさいきょうの◯◯)']}
                            />

                            <h2 className={styles.subcategory}>Web開発</h2>
                            <IndentBox>
                                ・Webアプリケーション
                                <br />
                                ・フロントエンド
                                <br />
                                ・WebGIS
                            </IndentBox>
                            <ProductBox
                                name="RoadSide Explorer"
                                description="全国のロードサイド位置を予測し可視化"
                                link="https://roadside-explorer.pages.dev/"
                                skills={['TypeScript', 'Maplibre GL JS', '個人開発', 'OpenStreetMap']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Froadside.webp?alt=media&token=43790410-7226-48f5-8f5c-f394ee6886dc"
                                awards={['MIERUNE Inc. インターンシップ成果物']}
                            />
                            <ProductBox
                                name="松屋 vs 西松屋"
                                description="松屋と西松屋、多いのはどっちなのか"
                                link="https://matsuyanishimatsuya.pages.dev/"
                                skills={['JavaScript', 'Maplibre GL JS', '個人開発', 'OpenStreetMap']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fmatsuya.webp?alt=media&token=5fc7fd8a-b6c7-4890-8fcd-ff58dcc5711c"
                                awards={[]}
                            />
                            <ProductBox
                                name="Peruki's Portfolio"
                                description="ぺるきのポートフォリオ (本サイト)"
                                link="https://github.com/TadaTeruki/portfolio-front-next"
                                skills={['TypeScript', 'Next.JS', 'Firebase', '個人開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fportfolio.png?alt=media&token=71a59fca-0a75-4fcb-a2b6-aeec86c94b54"
                                awards={[]}
                            />
                            <ProductBox
                                name="Flyme"
                                description="学内ハッカソンp2hacks にて開発 バックエンドを担当"
                                link="https://github.com/p2hacks2022/pre-team03"
                                skills={['Go', 'echo', 'チーム開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fflyme.png?alt=media&token=878b71bb-4fef-453d-b414-ac6bbe8b65df"
                                awards={['pixiv賞受賞']}
                            />
                            <ProductBox
                                name="Depotify"
                                description="学内ハッカソンHackathon for FUN 2022にて開発 バックエンドおよびプロダクトデザインを担当"
                                link="https://github.com/fung-hackathon/depotify"
                                skills={['Go', 'echo', 'チーム開発']}
                                image="https://raw.githubusercontent.com/fung-hackathon/depotify/d9010c16ef17ff9f16b0045ac4d8fa857450e6f1/image/Icon.svg"
                                awards={[]}
                            />

                            <h2 className={styles.subcategory}>基礎実装</h2>
                            <IndentBox>
                                ・グラフィックス領域
                                <br />
                                ・データ構造
                            </IndentBox>
                            <ProductBox
                                name="naturalneighbor"
                                description="Natural Neighbor Interpolation (NNI) のRust実装"
                                link="https://github.com/TadaTeruki/naturalneighbor"
                                skills={['Rust', '個人開発']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fcolor.webp?alt=media&token=09a9f766-4f18-4eb0-8fad-e2d3a0f7993a"
                                awards={[]}
                            />
                            <ProductBox
                                name="NoiseGo"
                                description="パーリンノイズのGo言語実装"
                                link="https://github.com/TadaTeruki/NoiseGo"
                                skills={['Go', 'グラフィックス', '個人開発']}
                                image="https://user-images.githubusercontent.com/69315285/150670142-3a5530cf-30f3-4dd7-9d34-36e9aec0c988.png"
                                awards={[]}
                            />
                            <ProductBox
                                name="priority_queue"
                                description="優先度つきキューの表現"
                                link="https://github.com/TadaTeruki/go-priority-queue"
                                skills={['Go', 'データ構造', '個人開発']}
                                image=""
                                awards={[]}
                            />
                            <ProductBox
                                name="graph"
                                description="隣接リスト表現によるグラフの表現"
                                link="https://github.com/TadaTeruki/graph"
                                skills={['Go', 'データ構造', '個人開発']}
                                image=""
                                awards={[]}
                            />

                            <h2 className={styles.subcategory}>コミュニティ活動</h2>
                            <IndentBox>
                                ・技術コミュニティ運営
                                <br />
                                ・技術イベント主催
                            </IndentBox>
                            <ProductBox
                                name="函館市電LT"
                                description="市電を貸し切ってライトニングトーク 企画・運営"
                                link="https://mariconf.connpass.com/event/293719/"
                                skills={['LT']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F84f080b0-e53f-4e31-8a2b-4ccf5fcf3417%2Fshiden1.webp?alt=media&token=92883e60-b0e6-4414-ae64-0cd8bdd67058"
                                awards={[]}
                            />
                            <ProductBox
                                name="Mariners' Conference LT '23 Spring"
                                description="LTイベント in 函館市亀田交流プラザ 企画・運営"
                                link="https://mariconf.connpass.com/event/276729/"
                                skills={['LT']}
                                image="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Farticles%2F4975dc09-2020-47f6-8d1f-78b0e762a2ca%2Fmariconf.webp?alt=media&token=d214cb19-8096-46a1-a929-c0fdf9ef3cb7&_gl=1*qnywgl*_ga*NDUwOTM1NzM2LjE2Njk3Njk4NzE.*_ga_CW55HF8NVT*MTY4NTg5MDU0Ni4zNC4xLjE2ODU4OTIxMzUuMC4wLjA."
                                awards={[]}
                            />
                        </IndentBox>

                        <h2 className={styles.subcategory}>情報科学研究</h2>
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
                                        分野 : 空間データ構造
                                        <br />
                                        期間 : 2020-2022
                                        <br />
                                        ポスター発表: CurtainRail 構造 – 空間インデックス 新手法の提案
                                        <IndentBox>情報処理学会 第3回中高生情報学研究コンテストにて掲載</IndentBox>
                                        <br />
                                        論文(査読無): CurtainRail:多層の線形構造に基づいた動的空間データ構造
                                        <br />( CurtainRail: A linear-structure-based kinetic data structure for spatial
                                        searching )
                                        <IndentBox>
                                            情報科学技術フォーラム(FIT2022)にて講演・掲載
                                            <br />
                                            情報科学技術フォーラム講演論文集, 21巻, 第1分冊, pp.123-126 (2022)
                                        </IndentBox>
                                    </IndentBox>
                                </ScrollBox>
                            </IndentBox>
                        </IndentBox>

                        <div id="blog">
                            <h1 className={styles.category}>Blog</h1>
                        </div>
                        <h2>最新3件&emsp;</h2>
                        <ArticleList articles={props.articles} size={3} />
                        <br />
                        <JustifyBox type="center">
                            <PlainLink href={'/blog'}>
                                <ButtonContainer size="large" color="default">
                                    <button>もっと見る</button>
                                </ButtonContainer>
                            </PlainLink>
                        </JustifyBox>
                        <div id="access" />
                    </JustifyBox>
                </JustifyBox>
            </Base>
        </>
    );
};

export default Home;
