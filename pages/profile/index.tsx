import Header from "../../components/all/header/header";
import Base from "../../components/all/base/base";
import Config from "../../components/config/config";
import Markdown from "../../components/blog/markdown/markdown";

const Profile = () => {

  const context = `

  ※開発中により、仮の内容となっています。

  # 基本情報
  
  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2FPeruki2.png?alt=media&token=dd376d91-4543-4a3e-bc4f-03a3f5895aca" />
  
  > **多田 瑛貴**, ただ てるき, Teruki TADA
  
  > 在住: 北海道函館市<br>
    出身: 京都府、広島県
  
  ## 所属

  > 公立はこだて未来大学 システム情報科学部<br>
    (2022年4月入学, 2026年卒業予定)

  ## 経歴
  > 2022年3月 京都府立清明高等学校 (昼間定時制・4年卒コース) 卒業<br>
    2021年3月 国立情報学研究所 情報科学の達人プログラム(第一期) 第二段階修了<br>
    2018年3月 龍谷大学付属平安中学校 卒業 

  ## 技術スタック
  
   - **Go**<br>
     Webアプリ開発 (echo, gin)<br>
     コンピュータグラフィックス

   - **Rust**<br>
     Webアプリ開発 (axum)<br>

   - **C/C++**<br>
     情報科学研究<br>
     Linux向けGUIシステム開発<br>

   - **JavaScript/TypeScript**<br>
     フロントエンド開発

  # 活動実績

  ## ソフトウェア開発 (個人開発)

   - **Peruki's Portfolio (ぺるきのポートフォリオ)** [frontend(GitHub)](https://github.com/TadaTeruki/portfolio-front-next) / [server(GitHub)](https://github.com/TadaTeruki/portfolio-server)<br>
     個人用ブログ兼ポートフォリオサイト。<br>
      - 使用知識: <br>
        TypeScript + Next.js + React + axios(frontend)<br>
        Rust + tokio + axum + serde (server)<br>
        render.com, Cloudflare Pages (hosting)<br>
        Cloud Firestore (database)<br>
        jwt (その他)<br>
      - 備考: <br>
        [開発記](https://portfolio-front-next.pages.dev/blog/article/public/36fead8f-536d-49d6-9a25-cd08e659fddf)

   - **TextBookBreakout(教科書ブロック崩し)** [(GitHub)](https://github.com/TadaTeruki/TextBookBreakout)<br>
      講義"情報表現入門"にて開発。Processing作品  <br>
      - 使用知識: <br>
        Processing<br>
      - 備考: <br>
        情報表現入門 **最優秀作品賞(教員・TA評価部門)**

  ## ソフトウェア開発 (チーム開発)

   - **Flyme** [(GitHub)](https://github.com/p2hacks2022/pre-team03)<br>
     Androidアプリケーション。学内ハッカソン[p2hacks](https://p2hacks2022.github.io/) にて開発 ( テーマ: 「未来」)。
      - 担当:<br>
        Webバックエンド<br>
      - 使用知識:<br>
        Go + echo (server)<br>
        Cloud FireStore, CloudFlare Pages (hosting)<br>
        swagger, jwt (その他)
      - 備考:<br>
        **pixiv賞受賞**<br>

    
   - **Depotify** [(GitHub)](https://github.com/fung-hackathon/depotify)<br>
     Webサービス。学内ハッカソン[Hackathon for FUN 2022](https://www.miraisai.fun/hackathon.html) にて開発 ( テーマ: 「函館の交通課題をハックする」)。<br>
      - 担当:<br>
        Webバックエンド / ロゴデザイン / デモ登場人物<br>
      - 使用知識:<br>
        Go + echo (server)<br>

   - **Spell Hunter** [(itch.io)](https://tadateruki.itch.io/spell-hunter)<br>
     ブラウザゲーム。[いわしジャム #1]() 投稿作品 (テーマ : "魔法")
      - 担当:<br>
        企画/プログラム/UIデザイン<br>
      - 使用知識:<br>
        JavaScript<br>

   - **魚網シューター(Breakout Fishing)** [(itch.io)](https://tadateruki.itch.io/breakout-fishing)<br>
     ブラウザゲーム。[いわしジャム #0]() 投稿作品 (テーマ : "群")
      - 担当:<br>
        企画/プログラム/ゲームシステム<br>
      - 使用知識:<br>
        JavaScript<br>
      
  ## 情報科学研究

  - **CurtainRail構造** (2020-2022) [総合資料](https://github.com/TadaTeruki/CurtainRail-2022)<br>
      分野: 空間データ構造<br>
      期間: 2020-2022<br>
    
      - ポスター発表: <u>CurtainRail 構造 – 空間インデックス 新手法の提案</u> <br>
        情報処理学会 第3回中高生情報学研究コンテストにて掲載&nbsp;奨励賞受賞<br>
        [掲載資料](https://www.ipsj.or.jp/event/taikai/83/83PosterSession/files/63.pdf)<br>

      - 論文: <u>CurtainRail:多層の線形構造に基づいた動的空間データ構造</u><br>
        <span style="font-size:smaller">( CurtainRail: A linear-structure-based kinetic data structure for spatial searching )</span><br>
        情報科学技術フォーラム(FIT2022)にて講演・掲載<br>
        情報科学技術フォーラム講演論文集, 21巻, 第1分冊, pp.123-126 (2022)
  
  ## アクセス
  
  > Twitter :&nbsp;<a href="https://twitter.com/PerukiFUN">@PerukiFUN</a><br>
  > GitHub :&nbsp;<a href="https://github.com/TadaTeruki">TadaTeruki</a>
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
