<<<<<<< HEAD
import { RecoilRoot } from "recoil";
import LoginForm from "../src/components/Login/LoginForm";

function Login() {
  return (
    <div className="login__main">
=======
import LoginForm from '../src/components/Login/LoginForm';
import { RecoilRoot } from 'recoil';

function Login() {
  return (
    <div id="component">
>>>>>>> dev
      <RecoilRoot>
        <LoginForm></LoginForm>
      </RecoilRoot>
    </div>
  );
}

export default Login;
