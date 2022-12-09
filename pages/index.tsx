import Header from "../components/header/header";
import PlainLink from "../components/plainlink/plainlink";
import ImageBox from "../components/imagebox/imagebox";
import Base from "../components/base/base";

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
            <br />
          </p>
          <PlainLink href="/profile">
            <h3>Profile</h3>
          </PlainLink>

          <p>所属・技術スタックなど、ぺるきに関する主な情報を載せています。</p>
          <PlainLink href="/blog">
            <h3>Blog</h3>
          </PlainLink>
          <p>技術や生活に関する記事を載せています。</p>
        </ImageBox>
      </Base>
    </>
  );
}
