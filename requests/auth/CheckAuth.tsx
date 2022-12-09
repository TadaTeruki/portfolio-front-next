import axios from "axios";

type CheckAuthRequest = {
  token: string;
};

type CheckAuthResponse = {
  owner_id: string;
};

const RequestCheckAuth = async (
  request: CheckAuthRequest
): Promise<CheckAuthResponse> => {
  const headers_ = {
    Authorization: request.token,
    "Accept-Encoding": "gzip,deflate,compress",
  };

  return new Promise<CheckAuthResponse>(
    async (
      resolve: (responses: CheckAuthResponse) => void,
      reject: (message: string) => void
    ) => {
      await axios
        .get(process.env.NEXT_PUBLIC_PORTFOLIO_SERVER_URL + "/auth", {
          headers: headers_,
        })
        .then((res) => {
          if (res.data.owner_id === "" || res.data.owner_id === null) {
            reject("not allowed");
          } else {
            resolve({
              owner_id: res.data.owner_id,
            });
          }
        })
        .catch((err) => {
          reject(err.message);
        });
    }
  );
};

export default RequestCheckAuth;
