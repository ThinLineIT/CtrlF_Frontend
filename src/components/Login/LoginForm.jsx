import loginHook from '../../hooks/LoginHooks';
import Link from "next/link";
import styles from '../../../styles/Login.module.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { emailReg } from '../../hooks/Reg'

const LoginForm = () => {
  
  const router = useRouter();
  const  [ loginEmail, setLoginEmail ] = useState("")
  const  [ loginPassword, setloginPassword ] = useState("")
  const  [ loginValidate, setloginValidate ] = useState("")
  
  const onLoginEmailHandler = (e) => {
    setLoginEmail(e.currentTarget.value)
  }
  const onLoginPasswordHandler = (e) => {
    setloginPassword(e.currentTarget.value)
  }
  
  useEffect(()=> {
    return () => {
      setloginValidate("");
      setLoginEmail("");
      setloginValidate("");
      setloginPassword("");
    }
  }, [])

  const loginDataSubmit = async ( e ) => {
    e.preventDefault()
    
    if(!emailReg(loginEmail)) {
      setloginValidate(false);
      return
    } 

    const data = {
      "password": loginPassword,
      "email": loginEmail
    }
    
    const success = await loginHook( data );
    
    if(success.token) {
      Cookies.set('token', success.token.split('.')[1]);      
      router.push('/');
      setloginValidate("");
    } else {
      setloginValidate(false);
    }
  };

  return (
      <div className={styles.login}>
        <div className={styles.login__title}>Log in</div>
        <form 
          className={styles.login__form}
          onSubmit={loginDataSubmit}
        >
          <input 
              placeholder="Email"
              value={loginEmail}
              type='text'
              className={styles.login__form__email}
              onChange={ onLoginEmailHandler }
          />
          
          <input 
              placeholder="Password"
              type='password' 
              value={loginPassword}
              className={styles.login__form__password}
              onChange={onLoginPasswordHandler}
          />
          
          <br />
          <div className={styles.login__error}>
            {
              loginValidate === false && (<span className={styles.login__error__message}> * 이메일 / 비밀번호를 확인해주세요  </span>)
            }
          </div>

          <br />

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