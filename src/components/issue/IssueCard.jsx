import IssueCreateNote from '../../../public/images/issue/card/issue_create_note.svg';
import IssueUpdateNote from '../../../public/images/issue/card/issue_update_note.svg';
import IssueDeleteNote from '../../../public/images/issue/card/issue_delete_note.svg';
import IssueCreateTopic from '../../../public/images/issue/card/issue_create_topic.svg';
import IssueUpdateTopic from '../../../public/images/issue/card/issue_update_topic.svg';
import IssueDeleteTopic from '../../../public/images/issue/card/issue_delete_topic.svg';
import IssueCreatePage from '../../../public/images/issue/card/issue_create_page.svg';
import IssueUpdatePage from '../../../public/images/issue/card/issue_update_page.svg';
import IssueDeletePage from '../../../public/images/issue/card/issue_delete_page.svg';
import { types } from '../../constant/issueTypes';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length, data }) => {
  switch (length % 4) {
    case 0:
      return (
        <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
          <div className={styles.card__title}>{title}</div>
          {data.content_request.type === types[0][0] &&
            data.content_request.action === types[0][1] && (
              <IssueCreateNote className="svg_small" />
            )}
          {data.content_request.type === types[1][0] &&
            data.content_request.action === types[1][1] && (
              <IssueUpdateNote className="svg_small" />
            )}
          {data.content_request.type === types[2][0] &&
            data.content_request.action === types[2][1] && (
              <IssueDeleteNote className="svg_small" />
            )}
          {data.content_request.type === types[3][0] &&
            data.content_request.action === types[3][1] && (
              <IssueCreateTopic className="svg_small" />
            )}
          {data.content_request.type === types[4][0] &&
            data.content_request.action === types[4][1] && (
              <IssueUpdateTopic className="svg_small" />
            )}
          {data.content_request.type === types[5][0] &&
            data.content_request.action === types[5][1] && (
              <IssueDeleteTopic className="svg_small" />
            )}
          {data.content_request.type === types[6][0] &&
            data.content_request.action === types[6][1] && (
              <IssueCreatePage className="svg_small" />
            )}
          {data.content_request.type === types[7][0] &&
            data.content_request.action === types[7][1] && (
              <IssueUpdatePage className="svg_small" />
            )}
          {data.content_request.type === types[8][0] &&
            data.content_request.action === types[8][1] && (
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
          {data.content_request.type === types[0][0] &&
            data.content_request.action === types[0][1] && (
              <IssueCreateNote className="svg_medium" />
            )}
          {data.content_request.type === types[1][0] &&
            data.content_request.action === types[1][1] && (
              <IssueUpdateNote className="svg_medium" />
            )}
          {data.content_request.type === types[2][0] &&
            data.content_request.action === types[2][1] && (
              <IssueDeleteNote className="svg_medium" />
            )}
          {data.content_request.type === types[3][0] &&
            data.content_request.action === types[3][1] && (
              <IssueCreateTopic className="svg_medium" />
            )}
          {data.content_request.type === types[4][0] &&
            data.content_request.action === types[4][1] && (
              <IssueUpdateTopic className="svg_medium" />
            )}
          {data.content_request.type === types[5][0] &&
            data.content_request.action === types[5][1] && (
              <IssueDeleteTopic className="svg_medium" />
            )}
          {data.content_request.type === types[6][0] &&
            data.content_request.action === types[6][1] && (
              <IssueCreatePage className="svg_medium" />
            )}
          {data.content_request.type === types[7][0] &&
            data.content_request.action === types[7][1] && (
              <IssueUpdatePage className="svg_medium" />
            )}
          {data.content_request.type === types[8][0] &&
            data.content_request.action === types[8][1] && (
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
          {data.content_request.type === types[0][0] &&
            data.content_request.action === types[0][1] && (
              <IssueCreateNote className="svg_large" />
            )}
          {data.content_request.type === types[1][0] &&
            data.content_request.action === types[1][1] && (
              <IssueUpdateNote className="svg_large" />
            )}
          {data.content_request.type === types[2][0] &&
            data.content_request.action === types[2][1] && (
              <IssueDeleteNote className="svg_large" />
            )}
          {data.content_request.type === types[3][0] &&
            data.content_request.action === types[3][1] && (
              <IssueCreateTopic className="svg_large" />
            )}
          {data.content_request.type === types[4][0] &&
            data.content_request.action === types[4][1] && (
              <IssueUpdateTopic className="svg_large" />
            )}
          {data.content_request.type === types[5][0] &&
            data.content_request.action === types[5][1] && (
              <IssueDeleteTopic className="svg_large" />
            )}
          {data.content_request.type === types[6][0] &&
            data.content_request.action === types[6][1] && (
              <IssueCreatePage className="svg_large" />
            )}
          {data.content_request.type === types[7][0] &&
            data.content_request.action === types[7][1] && (
              <IssueUpdatePage className="svg_large" />
            )}
          {data.content_request.type === types[8][0] &&
            data.content_request.action === types[8][1] && (
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
          {data.content_request.type === types[0][0] &&
            data.content_request.action === types[0][1] && (
              <IssueCreateNote className="svg_extra" />
            )}
          {data.content_request.type === types[1][0] &&
            data.content_request.action === types[1][1] && (
              <IssueUpdateNote className="svg_extra" />
            )}
          {data.content_request.type === types[2][0] &&
            data.content_request.action === types[2][1] && (
              <IssueDeleteNote className="svg_extra" />
            )}
          {data.content_request.type === types[3][0] &&
            data.content_request.action === types[3][1] && (
              <IssueCreateTopic className="svg_extra" />
            )}
          {data.content_request.type === types[4][0] &&
            data.content_request.action === types[4][1] && (
              <IssueUpdateTopic className="svg_extra" />
            )}
          {data.content_request.type === types[5][0] &&
            data.content_request.action === types[5][1] && (
              <IssueDeleteTopic className="svg_extra" />
            )}
          {data.content_request.type === types[6][0] &&
            data.content_request.action === types[6][1] && (
              <IssueCreatePage className="svg_extra" />
            )}
          {data.content_request.type === types[7][0] &&
            data.content_request.action === types[7][1] && (
              <IssueUpdatePage className="svg_extra" />
            )}
          {data.content_request.type === types[8][0] &&
            data.content_request.action === types[8][1] && (
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
