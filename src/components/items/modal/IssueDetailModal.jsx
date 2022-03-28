import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  issueApproveApi,
  issueCloseApi,
  issueDeleteApi,
  issueRejectApi,
  issuePermissionCheckApi,
} from '../../../utils/issueApi';
import {
  issueDetailTopicId,
  issueDetailPageId,
  issueDetailPageVersionNo,
  pageIssue,
} from '../../../store/issueAtom';
import { useSetRecoilState } from 'recoil';
import styles from '../../../styles/items/modal/issue_modal.module.css';
import DropMenu from '../menu/IssueDropMenu';
import IssueDetailContent from './IssueDetatilContent';
import IssueConfirmModal from './IssueConfirmModal';

export default function IssueDetailModal({
  issue,
  setIsModalOpen,
  setModalText,
  setIsUnathorized,
  setIsApproved,
  title,
}) {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const setTopicId = useSetRecoilState(issueDetailTopicId);
  const setPageId = useSetRecoilState(issueDetailPageId);
  const setPageVersionNo = useSetRecoilState(issueDetailPageVersionNo);
  const setPageIssue = useSetRecoilState(pageIssue);
  const router = useRouter();

  const openDropDown = () => {
    setDropDownMenu(true);
  };

  const moveToDetail = () => {
    setTopicId(issue.topic_id);
    setPageId(issue.page_id);
    setPageVersionNo(issue.version_no);
    router.push(`/notes/${issue.note_id}`);
  };

  const editIssue = () => {
    router.push(`/notes/${issue.note_id}?edit=${issue.id}`);
  };

  const updatePermissionCheck = async () => {
    const result = await issuePermissionCheckApi(issue.id);
    if (!result.data.has_permission) {
      setIsUnathorized(true);
    } else {
      setPageIssue(issue);
      editIssue();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptIssue = async () => {
    const result = await issueApproveApi(issue.id);
    if (result && (result.status == 200 || result.status == 204)) {
      setIsModalOpen(false);
      router.reload();
    } else {
      setModalText(result.data.message);
      setIsUnathorized(true);
    }
  };

  const rejectIssue = async () => {
    const result = await issueRejectApi(issue.id);
    if (result && result.status == 200) {
      setIsModalOpen(false);
    } else {
      setModalText(result.data.message);
      setIsUnathorized(true);
    }
  };

  const closeIssue = async () => {
    const result = await issueCloseApi(issue.id);
    if (result && result.status == 200) {
      setIsModalOpen(false);
      router.reload();
    } else {
      setModalText(result.data.message);
      setIsUnathorized(true);
    }
  };

  const deleteIssue = async () => {
    const result = await issueDeleteApi(issue.id);
    if (result && result.status == 200) {
      setIsModalOpen(false);
      router.reload();
    } else {
      setModalText(result.data.message);
      setIsUnathorized(true);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {confirm ? (
          isDelete ? (
            <IssueConfirmModal
              title={title}
              isDelete={isDelete}
              setConfirm={setConfirm}
              actionMethod={deleteIssue}
            />
          ) : (
            <IssueConfirmModal
              title={title}
              isDelete={isDelete}
              setConfirm={setConfirm}
              actionMethod={closeIssue}
            />
          )
        ) : (
          <>
            <div className={styles.drop} onClick={openDropDown}>
              {dropDownMenu && (
                <DropMenu
                  updatePermissionCheck={updatePermissionCheck}
                  onClick={openDropDown}
                  dropDownMenu={dropDownMenu}
                  setDropDownMenu={setDropDownMenu}
                  setConfirm={setConfirm}
                  setIsDelete={setIsDelete}
                />
              )}
            </div>
            <IssueDetailContent
              issue={issue}
              title={title}
              closeModal={closeModal}
              moveToDetail={moveToDetail}
              acceptIssue={acceptIssue}
              rejectIssue={rejectIssue}
            />
          </>
        )}
      </div>
    </div>
  );
}
