export default function NickName({ styles }) {
    return(
        <div className={styles.com}>
            <span className={styles.signup__title}>Create an account</span>
            <span className={styles.signup__text}>입력하신 이메일에서 코드를 확인해주세요.</span>
            <input
                className={`${styles.signup__input} ${styles.input}`} 
                type="text" 
                placeholder="닉네임"
            />
            <button 
                className={`${styles.btn}`}
            >
                중복 확인
            </button>
        </div>
    )
}