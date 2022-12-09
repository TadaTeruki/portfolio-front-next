import axios from "axios";

type DeleteRequest = {
  token: string;
  id: string;
};

const RequestDeleteArticle = async (request: DeleteRequest): Promise<void> => {
  const headers_ = {
    Authorization: request.token,
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
