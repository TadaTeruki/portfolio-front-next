import axios from "axios";

type UpdateArticle = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  is_public: boolean;
};

type UpdateRequest = {
  token: string;
  id: string;
  article: UpdateArticle;
};

const RequestUpdateArticle = (request: UpdateRequest): Promise<void> => {
  const headers_ = {
    Authorization: request.token,
    "Accept-Encoding": "gzip,deflate,compress",
  };
  return new Promise<void>(
    (resolve: () => void, reject: (message: string) => void) => {
      axios
        .put(
          process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL +
            "/article/" +
            request.id,
          request.article,
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
