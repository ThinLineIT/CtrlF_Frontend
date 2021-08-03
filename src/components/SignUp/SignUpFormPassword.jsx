import { useRecoilValue, useRecoilState } from "recoil";
import {nickNameOverlap} from "../../hooks/SignUpHook";
import { password as passwordAtom, passwordCheck as passworCheckdAtom, authCode as authCodeAtom, nickName as nickNameAtom, isOverlaped as isOverlapedAtom , isNickOverlaped as isNickOverlapedAtom, isPwValidated as isPwValidatedAtom} from "../../store/atom";
import { nickReg } from '../../hooks/Reg'
import { passwordReg } from "../../hooks/Reg";
import { useState } from 'react'

export default function SignUpFormPassword ({ styles }) {
  const OVERLAP = useRecoilValue(isOverlapedAtom)
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [passwordConfirm, setPasswordConfirm] = useRecoilState(passworCheckdAtom);
  const [pwRegCheck, setPwRegCheck] = useState(true)
  const [passworSameCheck, setpassworSameCheck] = useRecoilState(isPwValidatedAtom)
  const [authCode, setAuthCode] = useRecoilState(authCodeAtom);
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const [nickOverlap, setNickOverlap] = useRecoilState(isNickOverlapedAtom);
  
    const onPasswordHandler = (event) => {
      setPassword(e.currentTarget.value)
    }

    const onPasswordConfirmHandler = (event) => {
      setPasswordConfirm(event.currentTarget.value)
      if(passwordConfirm === "") {
        return
      } else if(password === e.currentTarget.value && pwRegCheck === true) {
        setpassworSameCheck(true)
      } else {
        setpassworSameCheck(false)
      }
    }

    const onAuthCodedHandler = (event) => {
      setAuthCode(event.currentTarget.value)
    }

    const onNickNameHandler = (event) => {
      setNickName(event.currentTarget.value)
    }

    const passwordCheck = () => {
      if(password === "") return
      if(!passwordReg(password)) {
        setPwRegCheck(false)
      } else {
        setPwRegCheck(true)
      }
    }

    const nickNameCheck = async ( ) => {
      if(!nickReg(nickName)) {
        setNickOverlap(false);
        return
      }
      const isNickNameOverlap = await nickNameOverlap(nickName);
      if(isNickNameOverlap.status === 200) {
        setNickOverlap(true);
      } else {
        setNickOverlap(false);
      }
    }

    return (
      <div className={styles.signup__password}>
        <input
          type="text"
          value={authCode}
          onChange={onAuthCodedHandler}
          className={styles.signup__input}
          placeholder="인증 코드"
        />
        <input
          type="text"
          value={nickName}
          onChange={onNickNameHandler}
          onBlur={nickNameCheck}
          className={styles.signup__input}
          placeholder="닉네임 (한글, 영문, 숫자 2~10자)"
        />
        <div className={styles.error__message}>
          {
            OVERLAP && nickName !== "" && nickOverlap !== "" &&
            (
              nickOverlap === true
                ? (<span className={styles.nick__overlap}> 사용 가능한 닉네임입니다. </span>)
                : (<span className={styles.nick__overlap__deny}> 사용 불가능한 닉네임입니다.  </span>)
            ) 
          }
        </div>

        <input
          type="password"
          onChange={onPasswordHandler}
          className={styles.signup__input}
          placeholder="비밀번호 (8 ~ 20자 문자/숫자/특수문자 중 2개 조합)"
          onBlur={passwordCheck}
        />
        <div className={styles.error__message}>
          {
            !pwRegCheck && OVERLAP && (<span className={styles.password__deny}>비밀번호의 형식이 맞지 않습니다.</span>)
          }
        </div>
        
        <input
          onChange={onPasswordConfirmHandler}
          type="password"
          className={styles.signup__input}
          placeholder="비밀번호 확인"
        />
        <div className={styles.error__message}>
          {
            passworSameCheck === false && OVERLAP === true && (<span className={styles.password__deny}>비밀번호가 일치하지 않습니다.</span>)
          }
        </div>

      </div>
    );
}