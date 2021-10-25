import {
  nickName as nickNameAtom,
  isOverlaped as isOverlapedAtom,
} from '../../store/atom';
import { useRecoilState } from 'recoil';
import { nickReg } from '../../utils/Reg';
import { useState } from 'react';
import { nickNameOverlap } from '../../utils/SignUpHook';
import errorStyling from '../../utils/ErrorStyling';

export default function NickName({ styles, nickNameOverlapSuccess, props }) {
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const [nickErrorMessage, setNickErrorMessage] = useState('');
  const [nickNameValidation, setNickNameValidation] = useState('');

  const onNickNameHandler = (event) => {
    setNickName(event.currentTarget.value);
  };

  const nickNameCheck = async () => {
    const nickInputElement = document.getElementById('nick__input');
    const nickErrorElement = document.getElementById('nick__error');
    if (!nickReg(nickName)) {
      setNickErrorMessage('닉네임 형식이 안맞습니다');
      setNickNameValidation(false);
      errorStyling(nickInputElement, nickErrorElement);
      return;
    }
    const isNickNameChecked = await nickNameOverlap(nickName);
    console.log(isNickNameChecked);
    if (isNickNameChecked.status === 200) {
      nickInputElement.style.border = 'none';
      setNickErrorMessage(isNickNameChecked.data.message);
      setNickNameValidation(true);
      nickNameOverlapSuccess();
    } else {
      setNickErrorMessage(isNickNameChecked.data.message);
      setNickNameValidation(false);
      errorStyling(nickInputElement, nickErrorElement);
    }
  };

  return (
    <div className={styles.com}>
      <span className={styles.signup__title}>닉네임 입력 / 중복확인</span>
      <div className={styles.signup__text}></div>
      <div className={`${styles.wrap}`}>
        <input
          value={nickName}
          onChange={onNickNameHandler}
          className={`${styles.signup__input} ${styles.input}`}
          type="text"
          id="nick__input"
          placeholder="닉네임 (한글, 영문, 숫자 2~10자)"
        />
      </div>
      <div className={styles.error}>
        {!nickNameValidation && (
          <div
            id="nick__error"
            className={`${styles.error__message} ${styles.fail}`}
          >
            {nickErrorMessage}
          </div>
        )}
      </div>
      <button onClick={nickNameCheck} className={`${styles.btn}`}>
        중복 확인
      </button>
    </div>
  );
}
