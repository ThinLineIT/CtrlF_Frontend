import IssueSelect from '../src/components/issue/IssueSelect';
import IssueCategory from '../src/components/issue/IssueCategory';
import IssueList from '../src/components/issue/IssueList';
import styles from '../src/styles/Issue.module.css';

function Issue() {
  return (
    <div className="component" id={styles.issue}>
      <div className={styles.menu}>
        <IssueCategory styles={styles} />
        <IssueSelect styles={styles} />
        <div>내 이슈</div>
      </div>
      <IssueList styles={styles} />
    </div>
  );
}

export default Issue;
