import IssueTagList from './IssueTagList';
import IssueTagInput from './IssueTagInput';
import styles from '../../styles/items/issue/issue_tag.module.css';

const IssueTag = () => {
  return (
    <div className={styles.tag}>
      <IssueTagInput styles={styles} />
      <IssueTagList styles={styles} />
    </div>
  );
};

export default IssueTag;
