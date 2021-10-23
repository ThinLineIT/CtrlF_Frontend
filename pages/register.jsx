import Head from 'next/head';
import {
  email,
  authCode,
  nickName,
  password,
  passwordCheck,
} from '../src/store/atom';
import { useSetRecoilState } from 'recoil';
import Email from '../src/components/register/Email';
import Password from '../src/components/register/Password';
import PasswordConfirm from '../src/components/register/PasswordConfirm';
import NickName from '../src/components/register/NickName';
import AuthCode from '../src/components/register/AuthCode';
import styles from '../src/styles/Register.module.css';
import ReAuthentication from '../src/components/register/ReAuthentication';
import { useRef, useEffect, useState } from 'react';

export default function Register() {
  const modalRef = useRef(null);
  const [timer, setTimer] = useState(false);
  const emailReset = useSetRecoilState(email);
  const authCodeReset = useSetRecoilState(authCode);
  const nickNameReset = useSetRecoilState(nickName);
  const passwordReset = useSetRecoilState(password);
  const passwordCehckReset = useSetRecoilState(passwordCheck);

  useEffect(() => {
    return () => {
      emailReset('');
      authCodeReset('');
      nickNameReset('');
      passwordReset('');
      passwordCehckReset('');
    };
  }, []);

  const modal = () => {
    modalRef.current.style.display = 'flex';
    const section = document.getElementById('signup');
    section.style.display = 'none';
  };

  const emailOverlapSuccess = () => {
    document.getElementById('slide02').checked = true;
    setTimer(true);
  };
  const authCodeSuccess = () => {
    document.getElementById('slide03').checked = true;
  };
  const nickNameOverlapSuccess = () => {
    document.getElementById('slide04').checked = true;
  };
  const passwordFirst = () => {
    document.getElementById('slide05').checked = true;
  };

  return (
    <div className="component">
      <Head>
        <title>회원가입</title>
        <meta name="description"></meta>
      </Head>
      <ReAuthentication ref={modalRef} />
      <div className={styles.section} id="signup">
        <input type="radio" name="slide" id="slide01" defaultChecked />
        <input type="radio" name="slide" id="slide02" />
        <input type="radio" name="slide" id="slide03" />
        <input type="radio" name="slide" id="slide04" />
        <input type="radio" name="slide" id="slide05" />
        <div className={styles.slidewrap}>
          <ul className={styles.slidelist}>
            <li>
              <a>
                <Email
                  styles={styles}
                  emailOverlapSuccess={emailOverlapSuccess}
                />
                <label htmlFor="slide02" className={styles.right}>
                  asdasdsa
                </label>
              </a>
            </li>
            <li>
              <a>
                <label onClick={modal} className={styles.left}></label>
                <AuthCode
                  styles={styles}
                  authCodeSuccess={authCodeSuccess}
                  timer={timer}
                />
                <label htmlFor="slide03" className={styles.right}></label>
              </a>
            </li>
            <li>
              <a>
                <label onClick={modal} className={styles.left}></label>
                <NickName
                  styles={styles}
                  nickNameOverlapSuccess={nickNameOverlapSuccess}
                />
                <label htmlFor="slide04" className={styles.right}></label>
              </a>
            </li>
            <li>
              <a>
                <label htmlFor="slide03" className={styles.left}></label>
                <Password styles={styles} passwordFirst={passwordFirst} />
                <label htmlFor="slide05" className={styles.right}></label>
              </a>
            </li>
            <li>
              <a>
                <label htmlFor="slide04" className={styles.left}></label>
                <PasswordConfirm styles={styles} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
