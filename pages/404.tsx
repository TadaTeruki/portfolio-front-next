import Base from "../components/all/base/base";
import Header from "../components/all/header/header";
import JustifyBox from "../components/all/justifybox/justifybox";
import PlainLink from "../components/all/link/plainlink/plainlink";
import Config from "../components/config/config";


const Index = () => {
  return (
    <>
      <Config title="404 Not Found" subtitle="ページが見つかりません" />
      <Header />
      <Base>
        <JustifyBox type="center">

          <h1>404 Not Found</h1>
          <p>
            お探しのページは見つかりませんでした。<br />
            <span style={{fontSize:"small"}}>無効となったページにアクセスを試みたか、URLが間違っているようです。</span><br /><br />
            <PlainLink href="/">
              <button>ホームに戻る</button>
            </PlainLink><br />
          </p>
          <img width="70%" height="auto" alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-server-77440.appspot.com/o/images%2Fprofile%2Fperukun.jpeg?alt=media&token=971e9d7e-694f-4492-9f9d-33b847d147cf"></img>
        
        </JustifyBox>
      </Base> 
    </>
  )
}

export default Index;