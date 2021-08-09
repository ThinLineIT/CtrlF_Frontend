import Email from "../src/components/test/Email"
import Password from "../src/components/test/Password"
import PasswordConfirm from "../src/components/test/PasswordConfirm"
import NickName from "../src/components/test/NickName"
import AuthCode from "../src/components/test/AuthCode"
import styles from "../styles/test.module.css"

export default function TestSignUp() {
    
    const emailOverlapSuccess = () => {
        document.getElementById('slide02').checked = true;
    }
    const authCodeSuccess = () => {
        document.getElementById('slide03').checked = true;
    }
    const nickNameOverlapSuccess = () => {
        document.getElementById('slide04').checked = true;
    }


    return (
        <div className={styles.section}>
            <input type="radio" name="slide" id="slide01" defaultChecked/>
            <input type="radio" name="slide" id="slide02" />
            <input type="radio" name="slide" id="slide03" />
            <input type="radio" name="slide" id="slide04" />
            <input type="radio" name="slide" id="slide05" />
            <div className={styles.slidewrap}>
                <ul className={styles.slidelist}>
                    <li>
                        <a>
                            <Email styles ={ styles } emailOverlapSuccess={emailOverlapSuccess}/>
                            <label htmlFor="slide02" className={styles.right}></label>
                        </a>
                    </li>
                    <li>
                        <a>
                            <label id={styles.lableltest} htmlFor="slide01" className={styles.left}></label>
                            <AuthCode styles ={ styles }/>
                            <label htmlFor="slide03" className={styles.right}></label>
                        </a>
                    </li>
                    <li>
                        <a>
                            <label htmlFor="slide02" className={styles.left}></label>
                            <NickName styles ={ styles }/>
                            <label htmlFor="slide04" className={styles.right}></label>
                        </a>
                    </li>
                    <li>
                        <a>
                            <label htmlFor="slide03" className={styles.left}></label>                    
                            <Password styles ={ styles }/>
                            <label htmlFor="slide05" className={styles.right}></label>
                        </a>
                    </li>
                    <li>
                        <a>
                            <label htmlFor="slide04" className={styles.left}></label>                    
                            <PasswordConfirm styles ={ styles }/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}