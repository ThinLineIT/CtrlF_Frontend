import IssuePage from '../../../public/images/issue/issue1.svg';
import styles from '../../styles/items/issue/issue_card.module.css';

const IssueCard = ({ title, length }) => (
  <div className={`${styles.card} ${styles[`test_${length * 10}`]}`}>
    {title}
    {length}
  </div>
);

export default IssueCard;
