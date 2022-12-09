import axios from "axios";

type DeleteRequest = {
  token: string;
  id: string;
};

const RequestDeleteArticle = (request: DeleteRequest): Promise<void> => {
  const headers_ = {
    Authorization: request.token,
  };

  return new Promise<void>(
    (resolve: () => void, reject: (message: string) => void) => {
      axios
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
