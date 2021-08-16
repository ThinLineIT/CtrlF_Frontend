import IssuePage1 from '../../../public/images/issue/issue1.svg';
import IssuePage2 from '../../../public/images/issue/issue2.svg';
import IssuePage3 from '../../../public/images/issue/issue3.svg';
import IssuePage4 from '../../../public/images/issue/issue4.svg';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length }) => {
  return (
    <div className={`${styles.card} ${styles[`test_${length % 4}`]}`}>
      <div className={styles.card__title}>{title}</div>
      {length % 4 === 0 && <IssuePage1 className="test4" />}
      {length % 4 === 1 && <IssuePage2 className="test1" />}
      {length % 4 === 2 && <IssuePage3 className="test2" />}
      {length % 4 === 3 && <IssuePage4 className="test3" />}
    </div>
  );
};

export default IssueCard;
