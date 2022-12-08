import axios from "axios";

type CreateArticle = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  is_public: boolean;
};

type CreateRequest = {
  token: string | null;
  article: CreateArticle;
};

type CreateResponse = {
  id: string;
};

const RequestPostArticle = (
  request: CreateRequest
): Promise<CreateResponse> => {
  const headers_ = {
    Authorization: request.token ? request.token : "",
  };

  return new Promise<CreateResponse>(
    (
      resolve: (response: CreateResponse) => void,
      reject: (message: string) => void
    ) => {
      axios
        .post(
          process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/article",
          request.article,
          { headers: headers_ }
        )
        .then((res) => {
          resolve({
            id: res.data.id,
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

export default RequestPostArticle;
