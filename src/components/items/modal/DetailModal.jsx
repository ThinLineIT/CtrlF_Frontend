import axios from 'axios';
import Modal from './Modal';
import Cookies from 'js-cookie';
import { useState, useRef } from 'react';
import ConfirmModal from './ConfirmModal';
import MiddleButton from '../button/ButtonMiddle';
import styles from '../../../styles/items/modal/modal.module.css';

export default function DetailModal(props) {
  const { mainTitle, previosTitle, status } = props.modalData;
  const [title, setTitle] = useState(''); // API에 전달하실 title
  const [reason, setReason] = useState(''); // API에 전달하실 reason
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const titleRef = useRef();
  const textareaRef = useRef();
  const showConfirmModal = () => {
    let alertNoContent = titleRef.current.value && textareaRef.current.value;
    if (!alertNoContent) {
      alert('아래의 내용을 모두 입력해주세요');
    } else {
      setIsConfirmModalOpen(true);
    }
  };

  const closeDetailModal = () => {
    props.setIsDetailModalOpen(false);
  };

  const onTitlehandler = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onReasonHandler = (e) => {
    setReason(e.currentTarget.value);
  };

  const closingModalAndSendData = (issue) => {
    if (issue == '노트') {
      sendNoteRenameData(title, reason);
    }
    if (issue == '토픽') {
      sendTopicRenameData(title, reason);
    }
    closeDetailModal();
  };

  const sendNoteRenameData = (requestTitle, requestContent) => {
    let headers = Cookies.get('token');

    const data = {
      new_title: requestTitle,
      reason: requestContent,
    };

    axios({
      url: `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_API_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }notes/${props.noteId}/`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${headers}`,
      },
      data: data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const sendTopicRenameData = (requestTitle, requestContent) => {
    let headers = Cookies.get('token');

    const data = {
      new_title: requestTitle,
      reason: requestContent,
    };

    axios({
      url: `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_API_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }topics/${props.topicId}/`,
      method: 'put',
      headers: {
        Authorization: `Bearer ${headers}`,
      },
      data: data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal width={'982px'}>
      {!isConfirmModalOpen ? (
        <>
          <div className={styles.modal__title_main}>{mainTitle}</div>
          <div className={styles.modal__title_sub}>{previosTitle}</div>
          <input
            ref={titleRef}
            className={`${styles.modal__change} ${styles.title}`}
            value={title}
            onChange={onTitlehandler}
          />
          <textarea
            ref={textareaRef}
            className={`${styles.modal__change} ${styles.contents}`}
            value={reason}
            onChange={onReasonHandler}
          />
          <div className={styles.btns}>
            <MiddleButton methods={showConfirmModal} text={'OK'} />
            <MiddleButton methods={closeDetailModal} text={'CANCEL'} />
          </div>
        </>
      ) : (
        <ConfirmModal
          type={status == 'Note' ? '노트' : '토픽'}
          setIsConfirmModalOpen={setIsConfirmModalOpen}
          closingModalAndSendData={closingModalAndSendData}
        />
      )}
    </Modal>
  );
}
