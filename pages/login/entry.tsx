import { useState } from "react";
import RequestLogin from "../../requests/auth/Login";
import ErrorNotify from "../../components/error_notify/error_notify";
import { SetToken, RemoveToken, QueryToken } from "../../packages/token/token";

const Entry = () => {
  const [stateErr, setErr] = useState<string>("");

  const [stateName, setName] = useState<string>("");
  const updateName = (event: any) => setName(event.target.value);

  const [statePasswd, setPasswd] = useState<string>("");
  const updatePasswd = (event: any) => setPasswd(event.target.value);

  const [stateOwnership, setOwnership] = useState<string>(QueryToken());
  const updateOwnership = () => setOwnership(QueryToken());

  if (stateOwnership != undefined) {
    return (
      <div>
        <p>あなたはログイン中です。</p>
        <button
          onClick={() => {
            RemoveToken();
            updateOwnership();
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  const login = () => {
    RequestLogin(stateName, statePasswd)
      .then((response) => {
        setErr("");
        SetToken(response.token);
        updateOwnership();
      })
      .catch((err) => {
        setErr("error: " + err.message + " (" + err.response.statusText + ")");
      });
  };

  return (
    <>
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
    </>
  );
};

export default Entry;
