import styles from '../../styles/items/input.module.css';
import errorStyling from '../../utils/ErrorStyling';
import { placeholder as PLACEHOLDERS } from '../../constant/placeholder';
import { mainTitle } from '../../constant/passwordChangeTitle';
import Timer from './Timer';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { setTimer as setTimerAtom } from '../../store/atom';
import { useRef } from 'react';

export default function InputForm({
  move,
  title,
  type,
  isTimeStart,
  timerStop,
  inputMethod,
  data,
}) {
  const timerStart = useSetRecoilState(setTimerAtom);
  const errInput = useRef(null);
  const errText = useRef(null);
  useEffect(() => {
    if (type === 'secret') {
      errInput.current.type = 'password';
    }
    errInput.current.placeholder = PLACEHOLDERS[`${title}`];
  }, []);

  const moveToNext = async () => {
    const err = await move();
    if (err !== '') {
      errText.current.innerHTML = err;
      errorStyling(errInput.current, errText.current);
    } else {
      errInput.current.style.border = 'none';
      errText.current.innerHTML = err;
    }
  };

  const resendAuthCode = () => {
    timerStart([]);
  };

  const onEmailHandler = (event) => {
    data[`${title}`] = event.currentTarget.value;
    inputMethod(data);
  };

  return (
    <div className={styles.back}>
      <div className={styles.title}>{mainTitle[`${title}`]}</div>
      {title === 'auth' ? (
        <div className={styles.text}>
          입력하신 이메일에서 코드를 확인해주세요.
        </div>
      ) : (
        <div className={styles.text}> </div>
      )}
      <div className={styles.wrap}>
        <input
          className={`${styles.input} ${styles.width}`}
          type="text"
          ref={errInput}
          onChange={onEmailHandler}
        />
        {isTimeStart && <Timer email={data.email} />}
      </div>
      <div className={styles.width}>
        <div ref={errText} className={styles.errtext}></div>
      </div>
      {title === 'auth' && (
        <button
          className={`${styles.btn} ${styles.resend} ${styles.width}`}
          onClick={resendAuthCode}
        >
          인증코드 재전송
        </button>
      )}
      {title === 'pwCheck' ? (
        <button
          className={`${styles.btn} ${styles.width}`}
          onClick={moveToNext}
        >
          비밀번호 변경
        </button>
      ) : (
        <button
          className={`${styles.btn} ${styles.width}`}
          onClick={moveToNext}
        >
          다 음
        </button>
      )}
    </div>
  );
}
