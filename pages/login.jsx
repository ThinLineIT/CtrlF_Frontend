import LoginForm from '../src/components/Login/LoginForm';
import { RecoilRoot } from 'recoil';

function Login() {
  return (
    <div className="component">
      <RecoilRoot>
        <LoginForm></LoginForm>
      </RecoilRoot>
    </div>
  );
}

export default Login;
