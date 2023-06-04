import axios from 'axios';

const RequestPerufetch = async (): Promise<string> => {
    const headers_ = {
        'Accept-Encoding': 'gzip,deflate,compress'
    };

    return new Promise<string>(async (resolve: (response: string) => void, reject: (message: string) => void) => {
        await axios
            .get(process.env.NEXT_PUBLIC_PERUFETCH_SERVER_URL as string, { headers: headers_ })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.message);
            });
    });
};

export default RequestPerufetch;
