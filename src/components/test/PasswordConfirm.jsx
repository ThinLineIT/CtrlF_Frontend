export default function PasswordConfirm({ styles }) {
    return(
        <div className={styles.com}>
            <span className={styles.signup__title}>Create an account</span>
            <input className={`${styles.signup__input} ${styles.input}`} type="password" placeholder="password 확인"/>
            <button className={`${styles.btn}`}>회원 가입</button>
        </div>
    )
}