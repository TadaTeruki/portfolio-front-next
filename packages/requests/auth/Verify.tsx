import axios from "axios";
import { VerifyResponse } from "../../../model/auth";

const RequestVerify = async (
  token: string,
): Promise<VerifyResponse> => {

  const headers_ = {
    Authorization: token,
    "Accept-Encoding": "gzip,deflate,compress",
  };

  return new Promise<VerifyResponse>(
    async (
      resolve: (responses: VerifyResponse) => void,
      reject: (message: string) => void
    ) => {
      await axios
        .get(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/auth", {
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
