import axios from 'axios'
import { PostRequest, PostResponse } from '../../dto/article'

const RequestPostArticle = async (request: PostRequest, token: string): Promise<PostResponse> => {
    const headers_ = {
        Authorization: token,
        'Accept-Encoding': 'gzip,deflate,compress'
    }

    return new Promise<PostResponse>(
        async (resolve: (response: PostResponse) => void, reject: (message: string) => void) => {
            await axios
                .post(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + '/article', request, { headers: headers_ })
                .then((res) => {
                    resolve({
                        id: res.data.id
                    })
                })
                .catch((err) => {
                    reject(err.message)
                })
        }
    )
}

export default RequestPostArticle
