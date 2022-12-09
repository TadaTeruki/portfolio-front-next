import Cookies from "js-cookie";

const SetToken = (token: string) => {
  Cookies.set("portfolioToken", "Bearer " + token, { sameSite: "lax" });
};

const RemoveToken = () => {
  Cookies.remove("portfolioToken");
};

const QueryToken = () => {
  const token = Cookies.get("portfolioToken");
  return token ? token:"";
};

export { SetToken, RemoveToken, QueryToken };
