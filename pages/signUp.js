import SignUpFormEmail from "../src/components/SignUpFormEmail";
import SignUpFormPassword from "../src/components/SignUpFormPassword";
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router'
import { signUpApi } from "../src/hooks/SignUpHook";
import styles from "../styles/SignUp.module.css"
import {passwordCheck, password, email, authCode, nickName, isOverlaped} from "../src/store/atom";

export default function SignUp() {
  const blur = {backgroundColor : "#D4D4D4"}
  const router = useRouter();
  const EMAIL = useRecoilValue(email)
  const AUTHCODE = useRecoilValue(authCode)
  const NICKNAME = useRecoilValue(nickName)
  const PASSWORD = useRecoilValue(password)
  const PASSWORDCHECK = useRecoilValue(passwordCheck)
  const OVERLAP = useRecoilValue(isOverlaped)

  const onSubmit = async ( e ) => {
    e.preventDefault()
    if(PASSWORD !== PASSWORDCHECK) {
      alert("비밀번호가 같지 않습니다.");
      return
    }
    const requset = {
      "email": EMAIL,
      "code": AUTHCODE,
      "nickname": NICKNAME,
      "password": PASSWORD,
      "password_confirm": PASSWORDCHECK
    }
    const signUpSuccess = await signUpApi(requset);
    
    if(signUpSuccess.status === 200) {
      router.push('/SignUpConfirm');
    } else {
      alert("XXX 오류가 발생하였습니다. ");
    }
  }
  
  return (
    <div className={styles.signup}>
      <span className={styles.signup__title}>Create an account</span>
      <form
        className={styles.signup__form}
        onSubmit={onSubmit}
      >
        <SignUpFormEmail styles={styles} />
        <SignUpFormPassword styles={styles} />
        <div className={styles.submit__btn}>
          {
            OVERLAP 
            ? (<button type="submit" className={styles.signup__submit} > Create An Account </button>)
            : (<button type="button" className={styles.signup__submit} style={ blur } > Create An Account </button>)
          }
        </div>
      </form>
    </div>
  );
}