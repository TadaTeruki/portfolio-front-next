import Header from "../components/all/header/header";
import HeadLink from "../components/all/link/headlink/headlink";
import ImageBox from "../components/all/imagebox/imagebox";
import IndentBox from "../components/all/indentbox/indentbox";
import Base from "../components/all/base/base";

export default function Component() {
  return (
    <>
      <Header />
      <Base>
        <ImageBox image="/static/welcome.jpg">
          <h1>Peruki&apos;s Portfolio</h1>
          <p>
            ぺるきのポートフォリオです。
            <br />
            様々な情報を共有します。
            <br />
          </p>
          <IndentBox>
            <HeadLink href="/profile">
              <h2>Profile</h2>
            </HeadLink>
            <p>所属・技術スタックなど、ぺるきに関する主な情報を載せています。</p>
          </IndentBox>
          <IndentBox>
            <HeadLink href="/blog">
              <h2>Blog</h2>
            </HeadLink>
            <p>技術や生活に関する記事を載せています。</p>
          </IndentBox>
        </ImageBox>
      </Base>
    </>
  );
}
