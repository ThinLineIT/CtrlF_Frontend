import { useState } from 'react';
import IssuePage1 from '../../../public/images/issue/issue1.svg';
import IssuePage2 from '../../../public/images/issue/issue2.svg';
import IssuePage3 from '../../../public/images/issue/issue3.svg';
import IssuePage4 from '../../../public/images/issue/issue4.svg';
import Modal from '../items/modal/issue_modal';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length, data }) => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };
  return (
    <div className={`${styles.card} ${styles[`len_${length % 4}`]}`}>
      {modal && <Modal setModal={setModal} data={data} />}
      <div className={styles.card__title}>{title}</div>

      {length % 4 === 0 && <IssuePage1 className="svg_small" />}
      {length % 4 === 1 && <IssuePage2 className="svg_medium" />}
      {length % 4 === 2 && <IssuePage3 className="svg_large" />}
      {length % 4 === 3 && <IssuePage4 className="svg_extra" />}
      <div className={`${styles.card_hover} ${styles[`len_${length % 4}`]}`}>
        {data.content_request.action} NOTE
        <button className={styles.detail_btn} onClick={showModal}>
          ISSUE 자세히보기
        </button>
      </div>
    </div>
  );
};

export default IssueCard;
