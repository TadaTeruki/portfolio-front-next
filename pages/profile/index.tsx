import Header from "../../components/all/header/header";
import Base from "../../components/all/base/base";
import Config from "../../components/config/config";
import Markdown from "../../components/blog/markdown/markdown";

const Profile = () => {

  const context = `

  # 基本情報
  
  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2FPeruki2.png?alt=media&token=dd376d91-4543-4a3e-bc4f-03a3f5895aca" />
  
  > **多田 瑛貴** ,Teruki TADA
  
  > 出身: 広島県(生まれ)、京都府(高校時代まで)
  
  ## 所属

  > 公立はこだて未来大学 システム情報科学部<br>
    (2022年4月入学, 2026年卒業予定)

  ### 過去の所属
  > 2022年3月 京都府立清明高等学校 (昼間定時制・4年卒コース) 卒業<br>
  > 2021年3月 国立情報学研究所 情報科学の達人プログラム(第一期) 第二段階修了<br>
  > 2018年3月 龍谷大学付属平安中学校 卒業 
  
  # 活動実績

  ### 情報科学研究

   - **[CurtainRail構造](https://github.com/TadaTeruki/CurtainRail-2022) (2020-2022)**<br>
     分野: 空間データ構造<br>
     期間: 2020-2022<br>
     
      - ポスター発表: <u>CurtainRail 構造 – 空間インデックス 新手法の提案</u> <br>
        情報処理学会 第3回中高生情報学研究コンテストにて掲載&nbsp;奨励賞受賞<br>
        [掲載資料](https://www.ipsj.or.jp/event/taikai/83/83PosterSession/files/63.pdf)<br>

      - 論文: <u>CurtainRail:多層の線形構造に基づいた動的空間データ構造</u><br>
        <span style="font-size:smaller">( CurtainRail: A linear-structure-based kinetic data structure for spatial searching )</span><br>
        情報科学技術フォーラム(FIT2022)にて講演・掲載<br>
        情報科学技術フォーラム講演論文集, 21巻, 第1分冊, pp.123-126 (2022)
  
  ### ソフトウェア開発

    (記述中)
  
  ## アクセス
  
  Twitter :&nbsp;
  <a href="https://twitter.com/PerukiFUN">@PerukiFUN</a>
  
  GitHub :&nbsp;
  <a href="https://github.com/TadaTeruki">TadaTeruki</a>
  `

  return (
    <>
      <Config title="Profile" subtitle="ぺるきのプロフィールです" />
      <Header />
      <Base>
        <Markdown body={context} />
      </Base>
    </>
  );
};

export default Profile;
