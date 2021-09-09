import IssueList from '../src/components/issue/IssueList';
import IssueTag from '../src/components/issue/IssueTag';
import styles from '../src/styles/Issue.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { loginCheck } from '../src/utils/loginCheck';
import { useSetRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';

function Issue() {
  const setJwt = useSetRecoilState(isJwtActive);
  const [issues, setIssues] = useState('');
  const [filteredIssue, setFilteredIssue] = useState('');

  useEffect(() => {
    loginCheck(setJwt);
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
