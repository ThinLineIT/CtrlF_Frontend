import { useEffect, useState } from 'react';
import IssueList from '../src/components/issue/IssueList';
import IssueTag from '../src/components/issue/IssueTag';
import styles from '../src/styles/Issue.module.css';
import { checkLogin } from '../src/utils/loginCheck';
import { issueListApi } from '../src/utils/issueHook';
import { useSetRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';

function Issue() {
  const setJwt = useSetRecoilState(isJwtActive);
  const [firstFetch, setFirstFetch] = useState(true);
  const [issuest, setIssues] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [newIssueNum, setNewIssueNum] = useState(15);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const issueList = await issueListApi(pageCount);
    if (firstFetch) {
      await setIssues([...issueList.issues]);
      setFirstFetch(false);
    } else {
      setIssues([...issuest, ...issueList.issues]);
    }
  }

  function fetchMoreData() {
    setLoading(true);
    let endCount = pageCount + newIssueNum;
    setPageCount(endCount);
    fetchData();
    setLoading(false);
  }

  useEffect(() => {
    checkLogin(setJwt);
    fetchData();
  }, []);

  return (
    <div className="component" id={styles.issue}>
      {/* <IssueTag /> */}
      <IssueList
        styles={styles}
        issues={issuest}
        fetchMoreData={fetchMoreData}
        loading={loading}
      />
    </div>
  );
}

export default Issue;
