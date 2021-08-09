export default function AuthCode({ styles }) {
    return(
        <div className={styles.com}>
            <span className={styles.signup__title}>Create an account</span>
            <input 
                className={`${styles.signup__input} ${styles.input}`}
                type="text" 
                placeholder="닉네임 (한글, 영문, 숫자 2~10자)"/>
            <button className={`${styles.btn}`}>
                다   음
            </button>
            <span className={styles.signup__text}>입력하신 이메일에서 코드를 확인해주세요.</span>
        </div>
    )
}