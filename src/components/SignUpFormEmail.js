import { email as emailAtom, isOverlaped as isOverlapedAtom } from "../store/atom"
import { useRecoilState } from "recoil";
import { overlapApi, emailAuthApi } from "../hooks/SignUpHook";

export default function SignUpFormEmail({ styles }) {
    
    const emailRegExp = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
    const [Email, setEmail] = useRecoilState(emailAtom);
    const [overlap, setIsOverlap] = useRecoilState(isOverlapedAtom)
    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const overlapCheck = async () => {
        if(emailRegExp.test(Email)) {
            const isOverlap = await overlapApi(Email)
            if(isOverlap.status === 200) {
                alert("사용 가능한 이메일입니다");
                setIsOverlap(true)
            } else {
                alert("사용 불가능한 이메일입니다.");
            }
        } else {
            alert("이메일의 형식이 맞지 않습니다.")
        }
    }

    const emailAuth = async () => {
        if(overlap){
            const isAuth = await emailAuthApi(Email);
            console.log(isAuth);
            alert("인증 코드를 이메일로 보내드렸습니다.")
        }else
            alert("중복확인을 먼저 해주세요!")
    }

    return (
        <div className={styles.signup__email}>
            <div className={styles.email__overlap}>
                <input 
                    className={styles.email__input}
                    onChange={onEmailHandler}
                    placeholder="Email"
                />
                <button 
                className={styles.email__overlap__btn}
                onClick={overlapCheck}
                type="button">
                    중복확인
                </button>
            </div>
            <div>
                {
                    overlap && (<span className={styles.overlap__checked}>사용 가능한 이메일입니다. </span>)
                }
            </div>
            <div className={styles.auth_btn}>
                {
                    overlap 
                    ? (<button className={styles.email__auth__btn} onClick={emailAuth} type="button"> 이메일 인증</button>)
                    : (<button className={styles.email__unauth__btn} onClick={emailAuth} type="button"> 이메일 인증</button>) 
                }   
            </div>
        </div>
    );
  }