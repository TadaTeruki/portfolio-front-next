import axios from "axios";
import { sha256 } from "js-sha256";

type LoginRequest = {
  name: string;
  passwd: string;
};

type LoginResponse = {
  token: string;
};

const RequestLogin = (
  name_: string,
  passwd_: string
): Promise<LoginResponse> => {
  const request: LoginRequest = {
    name: ConvertToSha256(name_),
    passwd: ConvertToSha256(passwd_),
  };

  return new Promise<LoginResponse>(
    (
      resolve: (responses: LoginResponse) => void,
      reject: (message: string) => void
    ) => {
      axios
        .post(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/login", request)
        .then((res) => {
          resolve({
            token: res.data.token,
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

const ConvertToSha256 = (str: string) => {
  var hash = sha256.create();
  hash.update(str);
  return hash.hex();
};

export default RequestLogin;
