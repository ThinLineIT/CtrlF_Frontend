import { password as passwordAtom } from '../../store/atom';
import { useRecoilState } from 'recoil';
import { passwordReg } from '../../utils/Reg';
import { useState } from 'react';
import errorStyling from '../../utils/ErrorStyling';

export default function Password({ styles, passwordFirst }) {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const passwordConfirm = () => {
    const passwordInputElement = document.getElementById('password__input');
    const passwordErrorElement = document.getElementById('password__error');
    if (!passwordReg(password)) {
      setPasswordErrorMessage('비밀번호를 다시 입력해주세요');
      setPasswordValidation(false);
      errorStyling(passwordInputElement, passwordErrorElement);
    } else {
      passwordInputElement.style.border = 'none';
      setPasswordValidation(true);
      passwordFirst();
    }
  };

  return (
    <div className={styles.com}>
      <span className={styles.signup__title}>비밀번호 입력 / 확인</span>
      <div className={styles.signup__text}></div>
      <div className={`${styles.wrap}`}>
        <input
          id="password__input"
          value={password}
          onChange={onPasswordHandler}
          className={`${styles.signup__input} ${styles.input}`}
          type="password"
          placeholder="password 입력"
        />
      </div>
      <div className={styles.error}>
        {!passwordValidation && (
          <div
            id="password__error"
            className={`${styles.error__message} ${styles.fail}`}
          >
            {passwordErrorMessage}
          </div>
        )}
      </div>
      <button onClick={passwordConfirm} className={`${styles.btn}`}>
        다 음
      </button>
    </div>
  );
}
