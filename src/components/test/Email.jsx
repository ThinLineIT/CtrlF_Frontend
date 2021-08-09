import { email as emailAtom, isOverlaped as isOverlapedAtom } from "../../store/atom";
import { useRecoilState } from "recoil";
import { emailReg } from "../../hooks/Reg";
import { overlapApi } from "../../hooks/SignUpHook";
import { useState } from "react"


export default function Email({ styles, emailOverlapSuccess }) {
    const [email, setEmail] = useRecoilState(emailAtom)
    const [isEmailOverlap, setIsEmailOverlap] = useRecoilState(isOverlapedAtom)
    const [errMessage, setErrMessage] = useState("");
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const emailOverlapCheck = async () => {
        if(emailReg(email)) {
            const isOverlap = await overlapApi(email)
            if(isOverlap.status === 200) {
                setErrMessage(isOverlap.data.message)
                setIsEmailOverlap(true)
                setTimeout(emailOverlapSuccess, 1200);
            } else {
                setErrMessage(isOverlap.data.message);
                setIsEmailOverlap(false)
                document.getElementById("test").animate([
                    { transform: 'translate(-4px, 4px)', offset: 0},
                    { transform: 'translate(-4px, -4px)', offset: 0.2},
                    { transform: 'translate(4px, 4px)', offset: 0.4},
                    { transform: 'translate(4px, -4px)', offset: 0.8},
                    { transform: 'translate(0px, 0px)', offset: 1},
                    ], {
                    duration: 50,
                });
            }
        } else {
            setIsEmailOverlap(false)
            setErrMessage("이메일의 형식이 올바르지 않습니다.")
            document.getElementById("test2").animate([
            { transform: 'translate(-4px, 4px)', offset: 0},
            { transform: 'translate(-4px, -4px)', offset: 0.2},
            { transform: 'translate(4px, 4px)', offset: 0.4},
            { transform: 'translate(4px, -4px)', offset: 0.8},
            { transform: 'translate(0px, 0px)', offset: 1},
            ], {
            duration: 50,
            });
        }
    }
    
    return(
        <div className={styles.com}>
            <span className={styles.signup__title}>Create an account</span>
            <input 
                id="test2"
                onChange={onEmailHandler}
                type="text" 
                value={email}
                placeholder="이메일 입력" 
                className={`${styles.signup__input} ${styles.input}`}
            />
            <div className={styles.error}>
                {
                    isEmailOverlap 
                    ? (<span id="test" className={`${styles.error__message} ${styles.success}`}>{errMessage}</span>)
                    : (<div 
                            id="test" className={`${styles.error__message} ${styles.fail}`}
                       >
                            {errMessage}
                       </div>)

                }
            </div>
            <button
                onClick={emailOverlapCheck} 
                className={`${styles.btn}`}>
                이메일 인증
            </button>
        </div>
    )
}   