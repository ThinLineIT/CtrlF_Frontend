import { useSetRecoilState } from 'recoil';
import { ModalUpdate } from '../../../store/atom';
import { useRouter } from 'next/dist/client/router';
import styles from '../../../styles/items/modal/modal.module.css';

export default function Modal(id) {
  const router = useRouter();
  const setIsModalActive = useSetRecoilState(ModalUpdate);

  const closeModal = () => {
    setIsModalActive(true);
    router.push({
      pathname: '/note/[id]',
      query: { id: id.id },
    });
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h1>notice</h1>
        <span className={styles.plates}>
          지금 선택하신 노트는
          <br />
          아직 승인되지 않은 노트입니다.
          <p /> 다소 정확하지 않은 정보가 <p /> 포함되어 있을 수 있습니다.
        </span>
        <button className={styles.ok_button} onClick={closeModal}>
          OK
        </button>
      </div>
    </div>
  );
}
