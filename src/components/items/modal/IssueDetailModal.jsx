import { useRouter } from 'next/router';
import {
  issueApproveApi,
  issueReject,
  issueCancel,
  issueEdit,
} from '../../../utils/issueHook';
import { issueDetailTopicId, issueDetailPageId } from '../../../store/atom';
import { useSetRecoilState } from 'recoil';
import styles from '../../../styles/items/modal/issue_modal.module.css';
// 추후 추가될 DropDown 기능입니다.
// import DropMenu from '../../items/menu/DropMenu';

export default function IssueDetailModal({
  issue,
  setIsModalOpen,
  setIsFeatureClicked,
}) {
  const setTopicId = useSetRecoilState(issueDetailTopicId);
  const setPageId = useSetRecoilState(issueDetailPageId);
  const router = useRouter();

  const moveToDetail = async () => {
    await setTopicId(issue.topic_id);
    await setPageId(issue.page_id);
    router.push(`/notes/${issue.note_id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptIssue = async () => {
    const result = await issueApproveApi(issue.id);
    if (result && result.staus === 200) {
      setIsModalOpen(false);
    } else {
      setIsFeatureClicked(true);
    }
  };

  const rejectIssue = () => {
    // API 개발 완료시 교체 예정
    //   issueReject();
    setIsFeatureClicked(true);
  };

  const CancelIssue = () => {
    // API 개발 완료시 교체 예정
    issueCancel();

    setIsFeatureClicked(true);
  };

  const editIssue = () => {
    // API 개발 완료시 교체 예정
    issueEdit();

    setIsFeatureClicked(true);
  };

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div className={styles.modal__title}>
          {issue.related_model_type} {issue.action}
        </div>
        <div className={`${styles.modal__change} ${styles.title}`}>
          {' '}
          {issue.title} 타이틀
        </div>
        <div className={`${styles.modal__change} ${styles.contents}`}>
          {issue.reason}콘텐츠
        </div>
        {/* <DropMenu onClick={openDropDown} /> */}
        <div className={styles.btns}>
          {/* <button className={styles.modal__btn} onClick={editIssue}>
            수정
          </button>
          <button className={styles.modal__btn} onClick={CancelIssue}>
            요청취소
          </button> */}

          {/* Note 혹은 Topic의 이슈인 경우 아래 자세히 보기 버튼은 활성화 되지 않을 예정입니다.  */}
          <div>
            {issue.related_model_type === 'PAGE' && (
              <button className={styles.modal__btn} onClick={moveToDetail}>
                자세히 보기
              </button>
            )}
          </div>
          <div className={styles.permit}>
            <button className={styles.modal__btn} onClick={acceptIssue}>
              승인
            </button>
            <button className={styles.modal__btn} onClick={rejectIssue}>
              미승인
            </button>
          </div>
          {/* {issue.content_request.type === 'PAGE' ? (
            <button className={styles.modal__btn} onClick={closeModal}>
              자세히 보기
            </button>
          ) : (
            <button className={styles.modal__btn} onClick={closeModal}>
              닫기
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}
