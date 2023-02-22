import axios from "axios";
import { sha256 } from "js-sha256";
import { LoginRequest, LoginResponse } from "../../../pages/api/auth/login";

const RequestLogin = async (
  name_: string,
  passwd_: string
): Promise<LoginResponse> => {

  const request: LoginRequest = {
    owner_id: ConvertToSha256(name_),
    passwd: ConvertToSha256(passwd_),
  };

  const headers_ = {
    "Accept-Encoding": "gzip,deflate,compress",
  };

  return new Promise<LoginResponse>(
    async (
      resolve: (responses: LoginResponse) => void,
      reject: (message: string) => void
    ) => {
      await axios
        .post(process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL + "/api/auth/login", request, { headers: headers_ })
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
