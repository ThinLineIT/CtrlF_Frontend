import { forwardRef } from 'react';
import { authCode, nickName, password, passwordCheck } from '../../store/atom';
import { useSetRecoilState } from 'recoil';

function ReAuthentication(props, ref) {
  const authCodeReset = useSetRecoilState(authCode);
  const nickNameReset = useSetRecoilState(nickName);
  const passwordReset = useSetRecoilState(password);
  const passwordCehckReset = useSetRecoilState(passwordCheck);

  const back = () => {
    authCodeReset('');
    nickNameReset('');
    passwordReset('');
    passwordCehckReset('');
    props.reAuth();
    ref.current.style.display = 'none';
    document.getElementById('signup').style.display = 'block';
  };

  const cancel = () => {
    ref.current.style.display = 'none';
    document.getElementById('signup').style.display = 'block';
  };
  return (
    <div className={props.styles.reauth} ref={ref}>
      <span className={props.styles.signup__title}>
        뒤로 가기를 누르시면
        <br></br>
        이메일 인증을 새로 받으셔야 합니다.
      </span>
      <div className={props.styles.reauth__btn}>
        <button
          className={`${props.styles.btn} ${props.styles.small}`}
          onClick={back}
        >
          뒤로 가기
        </button>
        <button
          className={`${props.styles.btn} ${props.styles.small}`}
          onClick={cancel}
        >
          취소{' '}
        </button>
      </div>
    </div>
  );
}

export default forwardRef(ReAuthentication);
