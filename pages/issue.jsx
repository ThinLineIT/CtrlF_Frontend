import IssueList from '../src/components/issue/IssueList';
import IssueTag from '../src/components/issue/IssueTag';
import styles from '../src/styles/Issue.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Issue() {
  const [issues, setIssues] = useState('');
  const [filteredIssue, setFilteredIssue] = useState('');

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

  return (
    <div className="component" id={styles.issue}>
      <IssueTag />
      <IssueList styles={styles} issues={filteredIssue} />
    </div>
  );
}

export default Issue;
