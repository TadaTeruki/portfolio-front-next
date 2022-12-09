import Header from "../../components/all/header/header";
import Base from "../../components/all/base/base";
import { useState, useEffect } from "react";
import RequestLogin from "../../requests/auth/Login";
import ErrorNotify from "../../components/all/error_notify/error_notify";
import { SetToken, QueryToken } from "../../packages/token/token";
import { useRouter } from "next/router";

const LoginEntry = () => {

  const [stateErr, setErr] = useState<string>("");

  const [stateName, setName] = useState<string>("");
  const updateName = (event: any) => setName(event.target.value);

  const [statePasswd, setPasswd] = useState<string>("");
  const updatePasswd = (event: any) => setPasswd(event.target.value);
  const router = useRouter();

  useEffect(() => {
    if(QueryToken() != "") {
      router.push("/login/info");
    }
  }, [router]);

  const login = () => {
    setErr("");
    RequestLogin(stateName, statePasswd)
      .then((response) => {
        setErr("");
        SetToken(response.token);
        router.push("/login/info");
      })
      .catch((err) => {
        setErr(err);
      });
  };

  return (
    <>
      <Header />
      <Base>
        <h1>管理者としてログイン</h1>
        <h3>ID・パスワードを入力してください</h3>
        <div style={{ display: "flex" }}>
          <div>
            管理者ID:&emsp;
            <br />
            パスワード:&emsp;
            <br />
            <button onClick={login}>Login</button>
            <br />
          </div>
          <div>
            <input type="text" value={stateName} onChange={updateName} />
            <br />
            <input type="password" value={statePasswd} onChange={updatePasswd} />
          </div>
        </div>
        <ErrorNotify>{stateErr}</ErrorNotify>
      </Base>
    </>
  );
};

export default LoginEntry;
