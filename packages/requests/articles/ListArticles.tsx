import axios from "axios";

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

const RequestListArticles = async (token: string): Promise<ListResponse[]> => {
    const headers_ = {
        Authorization: token,
        "Accept-Encoding": "gzip,deflate,compress",
    };

    return new Promise<ListResponse[]>(
        async (
            resolve: (responses: ListResponse[]) => void,
            reject: (message: string) => void
        ) => {
            await axios
                .get(
                    process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/articles",
                    {
                        headers: headers_,
                    }
                )
                .then((res) => {
                    var responses: ListResponse[] = [];
                    for (let i = 0; i < res.data.articles.length; i++) {
                        responses.push(res.data.articles[i]);
                    }
                    resolve(responses);
                })
                .catch((err) => {
                    console.log(err.message);
                    reject(err.message);
                });
        }
    );
};

export default RequestListArticles;