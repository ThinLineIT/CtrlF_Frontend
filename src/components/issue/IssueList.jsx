import IssuePage from '../../../public/images/issue/issue1.svg';
import { useEffect, useState } from 'react';
import issueHook from '../../utils/issueHook';

const IssueList = ({ styles }) => {
  const [issues, setIssues] = useState('');
  async function callAPI() {
    const issueList = await issueHook();
    setIssues(issueList);
    console.log(issues);
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className={styles.issue__list}>
      <IssuePage />
    </div>
  );
};

export default IssueList;
