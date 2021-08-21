import IssueCategory from '../src/components/issue/IssueCategory';
import IssueList from '../src/components/issue/IssueList';
import styles from '../src/styles/Issue.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { issueTypeCheck } from '../src/store/atom';

function Issue() {
  const [issues, setIssues] = useState('');
  const [filteredIssue, setFilteredIssue] = useState('');
  const ISSUE_TYPE = useRecoilValue(issueTypeCheck);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${process.env.MOCK_PUBLIC_BASE_API}/issues`)
        .then((res) => {
          setIssues(res.data);
          setFilteredIssue(res.data);
        });
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (!ISSUE_TYPE[0] && !ISSUE_TYPE[1] && !ISSUE_TYPE[2]) {
      setFilteredIssue([...issues]);
      return;
    }
    const filtering = [...issues].filter((v) => {
      if (ISSUE_TYPE[0] && v.content_request.type === 'NOTE') {
        return v;
      } else if (ISSUE_TYPE[1] && v.content_request.type === 'TOPIC') {
        return v;
      } else if (ISSUE_TYPE[2] && v.content_request.type === 'PAGE') {
        return v;
      }
    });
    setFilteredIssue([...filtering]);
  }, [ISSUE_TYPE]);
  return (
    <div className="component" id={styles.issue}>
      <div className={styles.menu}>
        <IssueCategory styles={styles} />
        <div className={styles.my_issue}>내 이슈</div>
      </div>
      <IssueList styles={styles} issues={filteredIssue} />
    </div>
  );
}

export default Issue;
