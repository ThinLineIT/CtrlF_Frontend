import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isApprovedModal,
  modalUtilsName,
  modalUtilsSyntax,
} from '../../../store/atom';
import { useRouter } from 'next/dist/client/router';
import styles from '../../../styles/items/modal/not_approved_modal.module.css';

export default function NotApprovedModal(id) {
  const router = useRouter();
  const nameState = useRecoilValue(modalUtilsName);
  const modalSyntax = useRecoilValue(modalUtilsSyntax);
  const setNotApprovedModalActive = useSetRecoilState(isApprovedModal);

  const closeModalAndGoNoteDetailPage = () => {
    setNotApprovedModalActive(false);
    // if (nameState == '노트') {
    //   router.push({
    //     pathname: '/notes/[id]',
    //     query: { id: id.id },
    //   });
    // }
  };

  return (
    <div className={styles.notes_modal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_content}>
          <h1>notice</h1>
          <span className={styles.plates}>
            지금 선택하신 {nameState}
            {modalSyntax}
            <br />
            아직 승인되지 않은 {nameState}입니다.
            <p /> <br />
            다소 정확하지 않은 정보가 <p /> 포함되어 있을 수 있습니다.
          </span>
          <button
            className={styles.modal_ok_button}
            onClick={closeModalAndGoNoteDetailPage}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
