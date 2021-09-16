import { useState } from 'react';
import IssueCreateNote from '../../../public/images/issue/card/issue_create_note.svg';
import IssueUpdateNote from '../../../public/images/issue/card/issue_update_note.svg';
import IssueDeleteNote from '../../../public/images/issue/card/issue_delete_note.svg';
import IssueCreateTopic from '../../../public/images/issue/card/issue_create_topic.svg';
import IssueUpdateTopic from '../../../public/images/issue/card/issue_update_topic.svg';
import IssueDeleteTopic from '../../../public/images/issue/card/issue_delete_topic.svg';
import IssueCreatePage from '../../../public/images/issue/card/issue_create_page.svg';
import IssueUpdatePage from '../../../public/images/issue/card/issue_update_page.svg';
import IssueDeletePage from '../../../public/images/issue/card/issue_delete_page.svg';
import Modal from '../items/modal/issue_modal';
import { getContentLength } from '../../utils/getContentLength';
import { TYPES, ACTIONS, SIZES } from '../../constant/issueTypes';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ISSUE_LENGTH = getContentLength(length);

  const showModal = () => {
    setIsModalOpen(true);
  };

  switch (data.content_request.type) {
    case TYPES.NOTE:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} data={data} />}
          <div className={styles.card__title}>{title}</div>
          {data.content_request.action === ACTIONS.CREATE && (
            <IssueCreateNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.UPDATE && (
            <IssueUpdateNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.DELETE && (
            <IssueDeleteNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.content_request.action} {data.content_request.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div>
        </div>
      );
    case TYPES.TOPIC:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} data={data} />}
          <div className={styles.card__title}>{title}</div>
          {data.content_request.action === ACTIONS.CREATE && (
            <IssueCreateTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.UPDATE && (
            <IssueUpdateTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.DELETE && (
            <IssueDeleteTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.content_request.action} {data.content_request.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div>
        </div>
      );
    case TYPES.PAGE:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} data={data} />}
          <div className={styles.card__title}>{title}</div>
          {data.content_request.action === ACTIONS.CREATE && (
            <IssueCreatePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.UPDATE && (
            <IssueUpdatePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          {data.content_request.action === ACTIONS.DELETE && (
            <IssueDeletePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
          )}
          <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.content_request.action} {data.content_request.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div>
        </div>
      );
  }
};

export default IssueCard;
