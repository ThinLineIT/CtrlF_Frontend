import Link from 'next/link';
import Head from 'next/head';

import {
  email as emailAtom,
  isOverlaped as isOverlapedAtom,
} from '../src/store/atom';
import { useRecoilState } from 'recoil';
import { emailReg } from '../src/utils/Reg';
import { overlapApi, emailAuthApi } from '../src/utils/SignUpHook';
import { useState } from 'react';
import errorStyling from '../src/utils/ErrorStyling';
import styles from '../src/styles/Register.module.css';
import AuthCodeConfirm from '../src/components/changePassword/authCodeConfirm';

export default function ChangePassword() {
  const [email, setEmail] = useRecoilState(emailAtom);
  const [isEmailOverlap, setIsEmailOverlap] = useRecoilState(isOverlapedAtom);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [authInputTrue, setAuthInputTrue] = useState(false);

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const emailCheck = async () => {
    const emailInputElement = document.getElementById('email__input');
    const emailErrorElement = document.getElementById('email__error');
    if (emailReg(email)) {
      const isOverlap = await overlapApi(email);
      if (isOverlap.status === 200) {
        emailAuthApi(email);
        emailInputElement.style.border = 'none';
        setIsEmailOverlap(false);
        setEmailErrorMessage('이메일을 보내드렸습니다.');
        setAuthInputTrue(true);
      } else {
        setEmailErrorMessage(isOverlap.data.message);
        setIsEmailOverlap(false);
        errorStyling(emailInputElement, emailErrorElement);
      }
    } else {
      setEmailErrorMessage('이메일의 형식이 올바르지 않습니다.');
      setIsEmailOverlap(false);
      errorStyling(emailInputElement, emailErrorElement);
    }
  };

  return (
    <>
      <Head>
        <title>비밀번호찾기</title>
        <meta name="description"></meta>
      </Head>
      <div className="component" style={{ position: 'relative' }}>
        <Link href="/login" as="/login">
          <a
            style={{
              position: 'absolute',
              top: '40px',
              right: '70px',
              width: '100px',
              height: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
              backgroundColor: '#8bc8fd',
              color: 'white',
              borderRadius: '20px',
            }}
          >
            뒤로가기
          </a>
        </Link>
        <div className={styles.com}>
          <span className={styles.signup__title}>이메일 입력</span>
          <div className={styles.signup__text}></div>
          <input
            id="email__input"
            onChange={onEmailHandler}
            type="text"
            value={email}
            placeholder="이메일 입력"
            className={`${styles.signup__input} ${styles.input}`}
          />
          <div className={styles.error}>
            {!isEmailOverlap && (
              <div
                id="email__error"
                className={`${styles.error__message} ${styles.fail}`}
              >
                {emailErrorMessage}
              </div>
            )}
          </div>
          {!authInputTrue && (
            <button onClick={emailCheck} className={`${styles.btn}`}>
              인증코드 전송
            </button>
          )}
          {authInputTrue && <AuthCodeConfirm />}
        </div>
      </div>
    </>
  );
}
