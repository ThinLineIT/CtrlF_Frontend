import {
  email as emailAtom,
  authCode as authCodeAtom,
  setTimer as setTimerAtom,
} from '../../store/atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import { authCodeConfirm } from '../../utils/SignUpHook';
import errorStyling from '../../utils/ErrorStyling';
import Cookies from 'js-cookie';
import Timer from '../passwordChange/Timer';

export default function AuthCode({ styles, authCodeSuccess, timer }) {
  const email = useRecoilValue(emailAtom);
  const timerStart = useSetRecoilState(setTimerAtom);
  const [authCode, setAuthCode] = useRecoilState(authCodeAtom);
  const [authCodeErrorMessage, setAuthCodeMessage] = useState('');
  const [authCodeValidation, setAuthCodeValidation] = useState('');

  const onAuthCodeHandler = (event) => {
    setAuthCode(event.currentTarget.value);
  };

  const authCodeCheck = async () => {
    const authCodeInputElement = document.getElementById('authcode__input');
    const authCodeErrorElement = document.getElementById('authcode__error');
    if (authCode === '') {
      setAuthCodeMessage('코드를 입력하세요');
      setAuthCodeValidation(false);
      errorStyling(authCodeInputElement, authCodeErrorElement);
      return;
    }
    const codeConfirm = await authCodeConfirm(authCode);
    if (codeConfirm.status === 200) {
      Cookies.set('signing_token', codeConfirm.data.signing_token);
      authCodeInputElement.style.border = 'none';
      setAuthCodeValidation(true);
      authCodeSuccess();
    } else {
      setAuthCodeMessage('코드를 다시 확인해주세요');
      setAuthCodeValidation(false);
      errorStyling(authCodeInputElement, authCodeErrorElement);
    }
  };

  const resendAuthCode = () => {
    timerStart([]);
  };
  return (
    <div className={styles.com}>
      <span className={styles.signup__title}>이메일 입력 / 인증</span>
      <div className={styles.signup__text}>
        입력하신 이메일에서 코드를 확인해주세요.
      </div>
      <div className={`${styles.wrap}`}>
        <input
          id="authcode__input"
          onChange={onAuthCodeHandler}
          value={authCode}
          className={`${styles.signup__input} ${styles.input}`}
          type="text"
          placeholder="코드"
        />
        {timer && <Timer email={email} register={true} />}
      </div>
      <div className={styles.error}>
        {!authCodeValidation && (
          <div
            id="authcode__error"
            className={`${styles.error__message} ${styles.fail}`}
          >
            {authCodeErrorMessage}
          </div>
        )}
      </div>
      <button
        onClick={resendAuthCode}
        className={`${styles.btn} ${styles.resend}`}
      >
        인증코드 재전송
      </button>
      <button onClick={authCodeCheck} className={`${styles.btn}`}>
        다 음
      </button>
    </div>
  );
}
