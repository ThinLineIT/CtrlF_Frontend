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
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
// 추후 추가될 DropDown 기능입니다.
// import DropMenu from '../../items/menu/DropMenu';

export default function IssueDetailModal({
  data,
  setIsModalOpen,
  setIsFeatureClicked,
}) {
  const setTopicId = useSetRecoilState(issueDetailTopicId);
  const setPageId = useSetRecoilState(issueDetailPageId);
  const router = useRouter();

  const moveToDetail = async () => {
    await setTopicId(data.topic_id);
    await setPageId(data.page_id);
    router.push(`/notes/${data.note_id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptIssue = async () => {
    const result = await issueApproveApi(data.id);
    console.log(result);
    // setIsFeatureClicked(true);
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
        <div className={styles.modal__title}>Page Create</div>
        <div className={styles.modal__origin}> {data.title} 타이틀</div>
        <div className={`${styles.modal__change} ${styles.title}`}>
          {' '}
          {data.content} 콘텐츠
        </div>
        <div className={`${styles.modal__change} ${styles.contents}`}>
          {data.content}콘텐츠
        </div>
        {/* <DropMenu onClick={openDropDown} /> */}
        <div className={styles.btns}>
          {/* <button className={styles.modal__btn} onClick={editIssue}>
            수정
          </button>
          <button className={styles.modal__btn} onClick={CancelIssue}>
            요청취소
          </button> */}
          <button className={styles.modal__btn} onClick={acceptIssue}>
            승인
          </button>
          <button className={styles.modal__btn} onClick={rejectIssue}>
            미승인
          </button>
          <button className={styles.modal__btn} onClick={moveToDetail}>
            자세히 보기
          </button>
          {/* {data.content_request.type === 'PAGE' ? (
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
