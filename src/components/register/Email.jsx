import {
  email as emailAtom,
  isOverlaped as isOverlapedAtom,
} from '../../store/atom';
import { useRecoilState } from 'recoil';
import { emailReg } from '../../utils/Reg';
import { overlapApi, emailAuthApi } from '../../utils/SignUpHook';
import { sendAuthCode } from '../../utils/PasswordChange';
import { useState } from 'react';
import errorStyling from '../../utils/ErrorStyling';
import Cookies from 'js-cookie';

export default function Email({ styles, emailOverlapSuccess }) {
  const [email, setEmail] = useRecoilState(emailAtom);
  const [isEmailOverlap, setIsEmailOverlap] = useRecoilState(isOverlapedAtom);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const emailCheck = async () => {
    const emailInputElement = document.getElementById('email__input');
    const emailErrorElement = document.getElementById('email__error');
    if (emailReg(email)) {
      const isOverlap = await overlapApi(email);
      if (isOverlap.status === 200) {
        emailInputElement.style.border = 'none';
        setIsEmailOverlap(true);
        emailOverlapSuccess();
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
    <div className={styles.com}>
      <span className={styles.signup__title}>이메일 입력 / 인증</span>
      <div className={styles.signup__text}></div>
      <div className={`${styles.wrap}`}>
        <input
          id="email__input"
          onChange={onEmailHandler}
          type="text"
          value={email}
          placeholder="이메일 입력"
          className={`${styles.signup__input} ${styles.input}`}
        />
      </div>
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
      <button onClick={emailCheck} className={`${styles.btn}`}>
        이메일 인증
      </button>
    </div>
  );
}
