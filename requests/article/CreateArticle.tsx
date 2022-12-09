import axios from "axios";

type CreateArticle = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  is_public: boolean;
};

type CreateRequest = {
  token: string;
  article: CreateArticle;
};

type CreateResponse = {
  id: string;
};

const RequestPostArticle = async (
  request: CreateRequest
): Promise<CreateResponse> => {
  const headers_ = {
    Authorization: request.token,
    "Accept-Encoding": "gzip,deflate,compress",
  };

  return new Promise<CreateResponse>(
    async (
      resolve: (response: CreateResponse) => void,
      reject: (message: string) => void
    ) => {
      await axios
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
