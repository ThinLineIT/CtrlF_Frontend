export default function Password({ styles }) {
    return(
        <div className={styles.com}>
            <span className={styles.signup__title}>Create an account</span>
            <input className={`${styles.signup__input} ${styles.input}`} type="text" placeholder="password 입력"/>
            <button className={`${styles.btn}`}>다   음</button>
        </div>
    )
}