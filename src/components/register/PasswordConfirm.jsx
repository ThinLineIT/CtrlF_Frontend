import {
  email,
  authCode,
  nickName,
  password,
  passwordCheck as passwordCheckAtom,
} from '../../store/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signUpApi } from '../../utils/SignUpHook';
import errorStyling from '../../utils/ErrorStyling';
import Cookies from 'js-cookie';

export default function PasswordConfirm({ styles }) {
  const router = useRouter();
  const EMAIL = useRecoilValue(email);
  const AUTHCODE = useRecoilValue(authCode);
  const NICKNAME = useRecoilValue(nickName);
  const PASSWORD = useRecoilValue(password);

  const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
    useState('');
  const [passwordCheck, setPasswordCheck] = useRecoilState(passwordCheckAtom);
  const [passwordCheckValidation, setPasswordCheckValidation] = useState('');

  const onPasswordConfirmHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const passwordCheckInputElement = document.getElementById(
      'passwordcheck__input'
    );
    const passwordCheckErrorElement = document.getElementById(
      'passwordcheck__error'
    );
    if (PASSWORD === passwordCheck) {
      const signUpRequset = {
        nickname: NICKNAME,
        password: PASSWORD,
        password_confirm: passwordCheck,
        signing_token: Cookies.get('signing_token'),
      };

      const signUpSuccess = await signUpApi(signUpRequset);
      if (signUpSuccess.status === 201) {
        passwordCheckInputElement.style.border = 'none';
        setPasswordCheckValidation(true);
        router.push({
          pathname: '/ConfirmPage',
          query: { type: 'register' },
        });
      } else {
        setPasswordCheckErrorMessage(signUpSuccess.data.message);
        setPasswordCheckValidation(false);
        errorStyling(passwordCheckInputElement, passwordCheckErrorElement);
      }
    } else {
      setPasswordCheckErrorMessage('비밀번호가 같지 않습니다');
      setPasswordCheckValidation(false);
      errorStyling(passwordCheckInputElement, passwordCheckErrorElement);
    }
  };

  return (
    <div className={styles.com}>
      <span className={styles.signup__title}>비밀번호 입력 / 확인</span>
      <div className={styles.signup__text}></div>
      <div className={`${styles.wrap}`}>
        <input
          onChange={onPasswordConfirmHandler}
          className={`${styles.signup__input} ${styles.input}`}
          id="passwordcheck__input"
          type="password"
          placeholder="password 확인"
        />
      </div>
      <div className={styles.error}>
        {!passwordCheckValidation && (
          <div
            id="passwordcheck__error"
            className={`${styles.error__message} ${styles.fail}`}
          >
            {passwordCheckErrorMessage}
          </div>
        )}
      </div>
      <button onClick={onSubmit} className={`${styles.btn}`}>
        회원 가입
      </button>
    </div>
  );
}
