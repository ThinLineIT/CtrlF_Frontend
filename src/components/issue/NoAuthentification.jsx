import styles from '../../styles/items/modal/issue_modal.module.css';

export default function NoAuthentification({ setIsUnathorized }) {
  const backToModal = () => {
    setIsUnathorized(false);
  };
  return (
    <div className={styles.background}>
      <div className={styles.noauth}>
        <div className={styles.noauth__text}>잘못된 요청입니다.</div>
        <button className={styles.noauth__back} onClick={backToModal}>
          이전
        </button>
      </div>
    </div>
  );
}
