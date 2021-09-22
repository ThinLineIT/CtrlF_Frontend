import LoginForm from '../src/components/Login/LoginForm';
import Head from 'next/head';

function Login() {
  return (
    <div className="component">
      <Head>
        <title>로그인</title>
        <meta name="description"></meta>
      </Head>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Login;
