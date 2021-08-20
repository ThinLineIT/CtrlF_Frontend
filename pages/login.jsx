import { RecoilRoot } from "recoil";
import LoginForm from "../src/components/Login/LoginForm";

function Login() {
  return (
    <div className="login__main">
      <RecoilRoot>
        <LoginForm></LoginForm>
      </RecoilRoot>
    </div>
  );
}

export default Login;
