import Header from "../../components/header/header";
import StyledLink from "../../components/styledlink/styledlink";
import ImageBox from "../../components/imagebox/imagebox";
import Base from "../../components/base/base";

const Profile = () => {
  return (
    <>
      <Header />
      <Base>
        <ImageBox image="static/myicon.jpg">
          <h2>基本情報</h2>
          <h4>名前</h4>
          多田 瑛貴 Teruki TADA
          <h4>所属</h4>
          公立はこだて未来大学 システム情報科学部 (2026年卒予定)
          <h4>主な活動領域</h4>
          Web開発 - バックエンド (Go, Rust) コンピュータグラフィックス -
          手続き的地形生成
          <h4>アクセス</h4>
          Twitter :{" "}
          <StyledLink href="https://twitter.com/PerukiFUN">
            {" "}
            @PerukiFUN{" "}
          </StyledLink>
          <br />
          GitHub :{" "}
          <StyledLink href="https://github.com/TadaTeruki">
            {" "}
            TadaTeruki{" "}
          </StyledLink>
        </ImageBox>
      </Base>
    </>
  );
};

export default Profile;
