import Cookies from "js-cookie";

const SetToken = (token: string) => {
  Cookies.set("portfolioToken", "Bearer " + token, { sameSite: "none" });
};

const RemoveToken = () => {
  Cookies.remove("portfolioToken");
};

const QueryToken = () => {
  const token = Cookies.get("portfolioToken");
  return token;
};

export { SetToken, RemoveToken, QueryToken };
