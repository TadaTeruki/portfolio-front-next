import Header from "../components/all/header/header";
import Base from "../components/all/base/base";
import Config from "../components/config/config";
import TabLinkBox from "../components/toppage/tablinkbox/tablinkbox";
import CenteringBox from "../components/all/centeringbox/centeringbox";
import FlexListBox from "../components/all/flexlistbox/flexlistbox";

export default function Component() {
  return (
    <>
      <Config title="Welcome!" subtitle="ぺるきのポートフォリオ" />
      <Header />
      <Base>

        <CenteringBox>

          <h1>~ Peruki&apos;s Portfolio ~</h1>
          <p>
            ぺるきのポートフォリオです。
            <br />
            様々な情報を共有します。
            <br />
          </p>

          <h2>目次</h2>

          <FlexListBox>
            <TabLinkBox href="/profile" tabname="Profile" description="基本情報"></TabLinkBox>
            <TabLinkBox href="/activity" tabname="Activities" description="活動成果"></TabLinkBox>
            <TabLinkBox href="/blog" tabname="Blog" description="技術や生活に関する記事"></TabLinkBox>
          </FlexListBox>

        </CenteringBox>

      </Base>
    </>
  );
}
