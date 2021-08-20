import { useRouter } from "next/router";
import styles from "../styles/SignUp.module.css";
import { signUpApi } from "../src/hooks/SignUpHook";
import { useRecoilValue, useResetRecoilState } from "recoil";
import SignUpFormEmail from "../src/components/SignUp/SignUpFormEmail";
import SignUpFormPassword from "../src/components/SignUp/SignUpFormPassword";
import {
  passwordCheck,
  password,
  email,
  authCode,
  nickName,
  isOverlaped,
  isNickOverlaped,
  isPwValidated,
} from "../src/store/atom";
import { useEffect } from "react";

export default function SignUp() {
  const router = useRouter();
  const EMAIL = useRecoilValue(email);
  const AUTHCODE = useRecoilValue(authCode);
  const NICKNAME = useRecoilValue(nickName);
  const PASSWORD = useRecoilValue(password);
  const blur = { backgroundColor: "#D4D4D4" };
  const OVERLAP = useRecoilValue(isOverlaped);
  const resetEmail = useResetRecoilState(email);
  const resetCode = useResetRecoilState(authCode);
  const resetNick = useResetRecoilState(nickName);
  const PWVALIDATED = useRecoilValue(isPwValidated);
  const PASSWORDCHECK = useRecoilValue(passwordCheck);
  const NICKOVERLAP = useRecoilValue(isNickOverlaped);
  const resetEmailOverlap = useResetRecoilState(isOverlaped);
  const resetNickOverlap = useResetRecoilState(isNickOverlaped);

  const onSubmit = async (event) => {
    event.preventDefault();

    const signUpRequset = {
      email: EMAIL,
      nickname: NICKNAME,
      password: PASSWORD,
      code: AUTHCODE,
      password_confirm: PASSWORDCHECK,
    };

    const signUpSuccess = await signUpApi(signUpRequset);
    if (signUpSuccess.status === 201) {
      router.push("/SignUpConfirm");
    } else {
      alert(signUpSuccess.data.message);
    }
  };
  useEffect(() => {
    return () => {
      resetEmail();
      resetNick();
      resetEmailOverlap();
      resetCode();
      resetNickOverlap();
    };
  }, []);

  return (
    <div className={styles.signup}>
      <span className={styles.signup__title}>Create an account</span>
      <form className={styles.signup__form} onSubmit={onSubmit}>
        <SignUpFormEmail styles={styles} />
        <SignUpFormPassword styles={styles} />
        <div className={styles.submit__btn}>
          {OVERLAP && NICKOVERLAP && PWVALIDATED ? (
            <button type="submit" className={styles.signup__submit}>
              {" "}
              Create An Account{" "}
            </button>
          ) : (
            <button
              type="button"
              className={styles.signup__submit}
              style={blur}
            >
              {" "}
              Create An Account{" "}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
