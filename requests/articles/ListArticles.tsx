import axios from "axios";

type ListRequest = {
  token: string;
};

type ListResponse = {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  is_public: boolean;
};

const RequestListArticles = (request: ListRequest): Promise<ListResponse[]> => {
  const headers_ = {
    Authorization: request.token,
  };

  return new Promise<ListResponse[]>(
    (
      resolve: (responses: ListResponse[]) => void,
      reject: (message: string) => void
    ) => {
      axios
        .get(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/articles", {
          headers: headers_,
        })
        .then((res) => {
          var responses: ListResponse[] = [];
          for (let i = 0; i < res.data.articles.length; i++) {
            responses.push(res.data.articles[i]);
          }
          resolve(responses);
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

export default RequestListArticles;
