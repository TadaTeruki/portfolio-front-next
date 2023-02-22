
import axios from "axios";
import { ReadRequest, ReadResponse } from "../../../model/article";

const RequestReadArticle = async (request: ReadRequest): Promise<ReadResponse> => {
  return new Promise<ReadResponse>(
    async (resolve: (response: ReadResponse) => void, reject: (message: string) => void) => {
      await axios.get(process.env.NEXT_PUBLIC_PORTFOLIO_BASE_URL+ "/api/article/"+ request.id)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
    }
  )
};


export default RequestReadArticle;
