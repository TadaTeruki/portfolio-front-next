import Header from "../../components/all/header/header";
import StyledLink from "../../components/all/link/styledlink/styledlink";
import ImageBox from "../../components/all/imagebox/imagebox";
import Base from "../../components/all/base/base";

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
          Twitter :&nbsp;
          <StyledLink href="https://twitter.com/PerukiFUN">
            &nbsp;@PerukiFUN&nbsp;
          </StyledLink>
          <br />
          GitHub :&nbsp;
          <StyledLink href="https://github.com/TadaTeruki">
            &nbsp;TadaTeruki&nbsp;
          </StyledLink>
        </ImageBox>
      </Base>
    </>
  );
};

export default Profile;
