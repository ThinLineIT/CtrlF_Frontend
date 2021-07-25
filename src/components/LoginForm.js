import loginHook from '../hooks/LoginHooks';
import Link from "next/link";
import styles from '../../styles/Login.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  
  const router = useRouter();
  const { handleSubmit, register, formState: { errors }, } = useForm();
  

  const loginDataSubmit = async ( data ) => {
    const success = await loginHook( data );
    if(success.status === 200) {
      Cookies.set('token', success.data.token.split('.')[1]);      
      console.log(success)
      router.push('/');
    } else {
      alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요")
    }
  };

  return (
      <div className={styles.login}>
        <div className={styles.login__title}>Log in</div>
        <form 
          className={styles.login__form}
          onSubmit={handleSubmit(loginDataSubmit)}
        >
          <input 
              placeholder="Email"
              // value={email}
              name="email"
              className={styles.login__form__email}
              // onChange={onEmailHandler}
              {...register("email", 
                { required: true, 
                  pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "이메일 / 패스워드를 확인해주세요"
                }
              })}
          />
          
          <input 
              placeholder="Password"
              // value={password} 
              type='password' 
              className={styles.login__form__password}
              // onChange={onPasswordHandler}
              name="password"
              {...register("password", { required: true })}
          />
          
          <br />

          {errors.email && <p className={styles.login__message}>이메일 / 패스워드를 확인해주세요</p>}

          <button className={styles.login__button__submit} type='submit'>
            Log in
          </button>
        </form>
        <div className={styles.login__button__extra}>
          <Link href="/"><a className={styles.login__link} >ID 찾기</a></Link>
          <span>|</span>
          <Link href="/signUp"><a className={styles.login__link}>PASSWORD 찾기</a></Link>
          <span>|</span>
          <Link href="/signUp"><a className={styles.login__link}>회원가입</a></Link>
        </div>
      </div>  
  );
}

export default LoginForm;