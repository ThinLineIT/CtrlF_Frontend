import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { useState } from "react";
import {nickNameOverlap} from "../hooks/SignUpHook";
import { password as passwordAtom, passwordCheck as passworCheckdAtom, authCode as authCodeAtom, nickName as nickNameAtom, isOverlaped as isOverlapedAtom , isNickOverlaped as isNickOverlaped} from "../store/atom";


export default function SignUpFormPassword ({ styles }) {
  const OVERLAP = useRecoilValue(isOverlapedAtom)
  const setPassword = useSetRecoilState(passwordAtom);
  const setPasswordCheck = useSetRecoilState(passworCheckdAtom);
  const setAuthCode = useSetRecoilState(authCodeAtom);
  const [nickName, setNickName] = useRecoilState(nickNameAtom);
  const [nickOverlap, setNickOverlap] = useRecoilState(isNickOverlaped);
    
    const onPasswordHandler = (e) => {
      setPassword(e.currentTarget.value)
    }

    const onPasswordCheckHandler = (e) => {
      setPasswordCheck(e.currentTarget.value)
    }

    const onAuthCodedHandler = (e) => {
      setAuthCode(e.currentTarget.value)
    }

    const onNickNameHandler = (e) => {
      setNickName(e.currentTarget.value)
    }

    const nickNameCheck = async ( ) => {
      const IsNickNameOverlap = await nickNameOverlap(nickName);
      if(IsNickNameOverlap.status === 200) {
        
        setNickOverlap(true);
      } else {
        
        setNickOverlap(false);
      }
    }

    return (
      <div className={styles.signup__password}>
        <input
          type="text"
          onChange={onAuthCodedHandler}
          className={styles.signup__input}
          placeholder="코드"
        />
        <input
          type="text"
          onChange={onNickNameHandler}
          onBlur={nickNameCheck}
          className={styles.signup__input}
          placeholder="닉네임"
        />
        <div className={styles.submit__btn}>
          {
            OVERLAP && nickName !== "" &&
            (
              nickOverlap
                ? (<span className={styles.nick__overlap}> 사용 가능한 닉네임입니다. </span>)
                : (<span className={styles.nick__overlap__deny}> 사용 불가능한 닉네임입니다.  </span>)
            ) 
          }
        </div>

        <input
          type="password"
          onChange={onPasswordHandler}
          className={styles.signup__input}
          placeholder="PASSWORD"
        />
        
        <input
          onChange={onPasswordCheckHandler}
          type="password"
          className={styles.signup__input}
          placeholder="PASSWORD 확인"
        />
      </div>
    );
}