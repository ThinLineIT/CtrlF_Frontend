import { useState, useEffect } from 'react';
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

  const showModal = async () => {
    await setIsModalOpen(true);
  };

  switch (data.related_model_type) {
    case TYPES.NOTE:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen} data={data.id} />
          )}
          <div onClick={showModal}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__context}>{data.reason}</div>
            {data.action === ACTIONS.CREATE && (
              <IssueCreateNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.UPDATE && (
              <IssueUpdateNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.DELETE && (
              <IssueDeleteNote className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
          </div>
          {/* <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.action} {data.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div> */}
        </div>
      );
    case TYPES.TOPIC:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen} data={data.id} />
          )}
          <div onClick={showModal}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__context}>{data.reason}</div>

            {data.action === ACTIONS.CREATE && (
              <IssueCreateTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.UPDATE && (
              <IssueUpdateTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.DELETE && (
              <IssueDeleteTopic className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
          </div>
          {/* <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.action} {data.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div> */}
        </div>
      );
    case TYPES.PAGE:
      return (
        <div className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}>
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen} data={data.id} />
          )}
          <div onClick={showModal}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__context}>{data.reason}</div>

            {data.action === ACTIONS.CREATE && (
              <IssueCreatePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.UPDATE && (
              <IssueUpdatePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
            {data.action === ACTIONS.DELETE && (
              <IssueDeletePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
            )}
          </div>
          {/* <div
            className={`${styles.card_hover} ${styles[`len_${ISSUE_LENGTH}`]}`}
          >
            {data.action} {data.type}
            <button className={styles.detail_btn} onClick={showModal}>
              ISSUE 자세히보기
            </button>
          </div> */}
        </div>
      );
    default:
      // 이슈의 타입이 정확하지 않기 때문에 이쪽 분기로 모두 처분해서 카드를 나타냅니다.
      return (
        <div
          className={`${styles.card} ${styles[`len_${ISSUE_LENGTH}`]}`}
          onClick={showModal}
        >
          {isModalOpen && (
            <Modal setIsModalOpen={setIsModalOpen} data={data.id} />
          )}
          <div className={styles.card__title}>{title}</div>
          <div className={styles.card__context}>{data.reason}</div>
          <IssueCreatePage className={`svg_${SIZES[`${ISSUE_LENGTH}`]}`} />
        </div>
      );
  }
};

export default IssueCard;
