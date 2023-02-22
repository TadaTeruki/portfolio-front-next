import axios from "axios";
import { VerifyResponse } from "../../../pages/api/auth/verify";

const RequestVerify = async (
  token: string,
): Promise<VerifyResponse> => {

  return new Promise<VerifyResponse>(
    async (
      resolve: (responses: VerifyResponse) => void,
      reject: (message: string) => void
    ) => {

      const headers_ = {
        Authorization: token,
        "Accept-Encoding": "gzip,deflate,compress",
      };

      await axios
        .get(process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL + "/api/auth/verify", {
          headers: headers_,
        })
        .then((res) => {
          if (res.data.owner_id === "" || res.data.owner_id === null) {
            reject("not allowed");
          } else {
            resolve({
              owner_id: res.data.owner_id,
            });
          }
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
}

export default RequestVerify;
