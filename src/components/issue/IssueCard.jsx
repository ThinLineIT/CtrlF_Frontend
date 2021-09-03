import IssueCreateNote from '../../../public/images/issue/card/issue_create_note.svg';
import IssueUpdateNote from '../../../public/images/issue/card/issue_update_note.svg';
import IssueDeleteNote from '../../../public/images/issue/card/issue_delete_note.svg';
import IssueCreateTopic from '../../../public/images/issue/card/issue_create_topic.svg';
import IssueUpdateTopic from '../../../public/images/issue/card/issue_update_topic.svg';
import IssueDeleteTopic from '../../../public/images/issue/card/issue_delete_topic.svg';
import IssueCreatePage from '../../../public/images/issue/card/issue_create_page.svg';
import IssueUpdatePage from '../../../public/images/issue/card/issue_update_page.svg';
import IssueDeletePage from '../../../public/images/issue/card/issue_delete_page.svg';
import { TYPES, ACTIONS } from '../../constant/issueTypes';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length, data }) => {
  switch (length % 4) {
    case 0:
      return (
        <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
          <div className={styles.card__title}>{title}</div>
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateNote className="svg_small" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateNote className="svg_small" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteNote className="svg_small" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateTopic className="svg_small" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateTopic className="svg_small" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteTopic className="svg_small" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreatePage className="svg_small" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdatePage className="svg_small" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeletePage className="svg_small" />
            )}
          <div
            className={`${styles.card_hover} ${styles[`len_${length % 4}`]}`}
          >
            {data.content_request.action} NOTE
            <button className={styles.detail_btn}>ISSUE 자세히보기</button>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
          <div className={styles.card__title}>{title}</div>
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateNote className="svg_medium" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateNote className="svg_medium" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteNote className="svg_medium" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateTopic className="svg_medium" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateTopic className="svg_medium" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteTopic className="svg_medium" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreatePage className="svg_medium" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdatePage className="svg_medium" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeletePage className="svg_medium" />
            )}
          <div
            className={`${styles.card_hover} ${styles[`len_${length % 4}`]}`}
          >
            {data.content_request.action} NOTE
            <button className={styles.detail_btn}>ISSUE 자세히보기</button>
          </div>
        </div>
      );
    case 2:
      return (
        <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
          <div className={styles.card__title}>{title}</div>
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateNote className="svg_large" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateNote className="svg_large" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteNote className="svg_large" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateTopic className="svg_large" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateTopic className="svg_large" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteTopic className="svg_large" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreatePage className="svg_large" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdatePage className="svg_large" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeletePage className="svg_large" />
            )}
          <div
            className={`${styles.card_hover} ${styles[`len_${length % 4}`]}`}
          >
            {data.content_request.action} NOTE
            <button className={styles.detail_btn}>ISSUE 자세히보기</button>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
          <div className={styles.card__title}>{title}</div>
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateNote className="svg_extra" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateNote className="svg_extra" />
            )}
          {data.content_request.type === TYPES[0] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteNote className="svg_extra" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreateTopic className="svg_extra" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdateTopic className="svg_extra" />
            )}
          {data.content_request.type === TYPES[1] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeleteTopic className="svg_extra" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[0] && (
              <IssueCreatePage className="svg_extra" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[1] && (
              <IssueUpdatePage className="svg_extra" />
            )}
          {data.content_request.type === TYPES[2] &&
            data.content_request.action === ACTIONS[2] && (
              <IssueDeletePage className="svg_extra" />
            )}
          <div
            className={`${styles.card_hover} ${styles[`len_${length % 4}`]}`}
          >
            {data.content_request.action} NOTE
            <button className={styles.detail_btn}>ISSUE 자세히보기</button>
          </div>
        </div>
      );
  }
};

export default IssueCard;
