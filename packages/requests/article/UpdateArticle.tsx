
import axios from "axios";
import { UpdateRequest } from "../../../model/article";

const RequestUpdateArticle = async (request: UpdateRequest, token: string): Promise<void> => {
  const headers_ = {
    Authorization: token,
    "Accept-Encoding": "gzip,deflate,compress",
  };
  return new Promise<void>(
    async (resolve: () => void, reject: (message: string) => void) => {
      await axios
        .put(
          process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL +
            "/article/" +
            request.id,
          request,
          { headers: headers_ }
        )
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

export default RequestUpdateArticle;
