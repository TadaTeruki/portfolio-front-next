import axios from 'axios'
import { ReadRequest, ReadResponse } from '../../dto/article'

const RequestReadArticle = async (request: ReadRequest): Promise<ReadResponse> => {
    const headers_ = {
        'Accept-Encoding': 'gzip,deflate,compress'
    }

    return new Promise<ReadResponse>(
        async (resolve: (response: ReadResponse) => void, reject: (message: string) => void) => {
            await axios
                .get(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + '/article/' + request.id, { headers: headers_ })
                .then((res) => {
                    const response: ReadResponse = {
                        id: res.data.id,
                        title: res.data.title,
                        subtitle: res.data.subtitle,
                        body: res.data.body,
                        thumbnail: res.data.thumbnail,
                        tags: res.data.tags,
                        created_at: res.data.created_at,
                        updated_at: res.data.updated_at,
                        is_public: res.data.is_public
                    }
                    resolve(response)
                })
                .catch((err) => {
                    reject(err.message)
                })
        }
    )
}

export default RequestReadArticle
