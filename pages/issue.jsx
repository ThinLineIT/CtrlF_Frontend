import axios from 'axios';
import { useEffect, useState } from 'react';
import IssueList from '../src/components/issue/IssueList';
import IssueTag from '../src/components/issue/IssueTag';
import styles from '../src/styles/Issue.module.css';
import { checkLogin } from '../src/utils/loginCheck';
import { useSetRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';
import { issueList } from '../src/constant/issueMock';

function Issue() {
  const setJwt = useSetRecoilState(isJwtActive);
  const [firstFetch, setFirstFetch] = useState(true);
  const [issues, setIssues] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [newIssueNum, setNewIssueNum] = useState(15);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    // 추후 API 교체 예정
    // axios.get(`${process.env.MOCK_PUBLIC_BASE_API}/issues`).then((res) => {
    //   if (firstFetch) {
    //     setIssues([...res.data]);
    //     setFirstFetch(false);
    //   } else {
    //     setIssues([...issues, ...res.data]);
    //   }
    // });
  }

  function fetchMoreData() {
    setLoading(true);
    let endCount = pageCount + newIssueNum;
    fetchData();
    setPageCount(endCount);
    setLoading(false);
  }

  useEffect(() => {
    console.log(issueList);
    checkLogin(setJwt);
    fetchData();
  }, []);

  return (
    <div className="component" id={styles.issue}>
      {/* <IssueTag /> */}
      <IssueList
        styles={styles}
        issues={issueList.issues}
        fetchMoreData={fetchMoreData}
        loading={loading}
      />
    </div>
  );
}

export default Issue;
