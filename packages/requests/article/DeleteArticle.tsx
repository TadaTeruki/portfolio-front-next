
import axios from "axios";
import { DeleteRequest } from "../../../model/article";

const RequestDeleteArticle = async (request: DeleteRequest, token: string): Promise<void> => {
  const headers_ = {
    Authorization: token,
    "Accept-Encoding": "gzip,deflate,compress",
  };

  return new Promise<void>(
    async (resolve: () => void, reject: (message: string) => void) => {
      await axios
        .delete(
          process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL +
            "/article/" +
            request.id,
          {
            headers: headers_,
          }
        )
        .then((_) => {
          resolve();
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

export default RequestDeleteArticle;
