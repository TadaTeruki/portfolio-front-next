import Header from "../../components/header/header";
import Base from "../../components/base/base";
import dynamic from "next/dynamic";

const Entry = dynamic(() => import("./entry"), {
  ssr: false,
});

const Login = () => {
  return (
    <div>
      <Header />
      <Base>
        <Entry />
      </Base>
    </div>
  );
};

export default Login;
