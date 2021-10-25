import {
  emailApi,
  authCodeApi,
  passwordChangeApi,
} from '../src/utils/PasswordChange';
import { useRouter } from 'next/router';
import InputForm from '../src/components/passwordChange/InputForm';
import styles from '../src/styles/PasswordChange.module.css';
import { useState, useRef } from 'react';
import { passwordReg } from '../src/utils/Reg';
import ReAuthentication from '../src/components/register/ReAuthentication';

export default function PasswordChnage() {
  const router = useRouter();
  const modalRef = useRef(null);
  const [isTimeStart, setIsTimeStart] = useState(false);
  const [timerStop, setTimerStop] = useState(false);
  const [form, setFrom] = useState({
    email: '',
    auth: '',
    pw: '',
    pwCheck: '',
  });
  const pwChange = async () => {
    const data = {
      new_password: form.pw,
      new_password_confirm: form.pwCheck,
    };
    const passwordChange = await passwordChangeApi(data);
    if (passwordChange !== true) return passwordChange;
    else {
      router.push({
        pathname: '/ConfirmPage',
        query: { type: 'pwChange' },
      });
      return '';
    }
  };
  const reAuthModalOpen = () => {
    modalRef.current.style.display = 'flex';
    const section = document.getElementById('passwordchange');
    section.style.display = 'none';
  };

  const moveToAuth = async () => {
    const emailAuth = await emailApi(form.email);
    if (emailAuth !== true) {
      return emailAuth;
    }
    document.getElementById('slide-auth').checked = true;
    setIsTimeStart(true);
    return '';
  };
  const moveToPw = async () => {
    const authCodeAuth = await authCodeApi(form.auth);
    if (authCodeAuth !== true) {
      return '코드가 일치하지 않습니다';
    }
    document.getElementById('slide-pw').checked = true;
    setTimerStop(true);
    return '';
  };
  const moveToPwConfirm = () => {
    if (!passwordReg(form.pw)) {
      return '비밀번호를 다시 입력해주세요';
    }
    document.getElementById('slide-pwCheck').checked = true;
    return '';
  };
  return (
    <div className="component">
      <ReAuthentication ref={modalRef} />
      <div className={styles.section} id="passwordchange">
        <input type="radio" name="slide" id="slide-email" defaultChecked />
        <input type="radio" name="slide" id="slide-auth" />
        <input type="radio" name="slide" id="slide-pw" />
        <input type="radio" name="slide" id="slide-pwCheck" />
        <div className={styles.slidewrap}>
          <ul className={styles.slidelist}>
            <li>
              <a>
                <label className={styles.left} htmlFor=""></label>
                <InputForm
                  move={moveToAuth}
                  title={'email'}
                  type={'normal'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label
                  onClick={reAuthModalOpen}
                  className={styles.left}
                ></label>
                <InputForm
                  move={moveToPw}
                  title={'auth'}
                  type={'normal'}
                  isTimeStart={isTimeStart}
                  timerStop={timerStop}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label
                  onClick={reAuthModalOpen}
                  className={styles.left}
                ></label>
                <InputForm
                  move={moveToPwConfirm}
                  title={'pw'}
                  type={'secret'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label className={styles.left} htmlFor="slide-pw"></label>
                <InputForm
                  move={pwChange}
                  title={'pwCheck'}
                  type={'secret'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
