import { useEffect, useState } from 'react';
import IssueList from '../src/components/issue/IssueList';
import IssueTag from '../src/components/issue/IssueTag';
import styles from '../src/styles/Issue.module.css';
import { checkLogin } from '../src/utils/loginCheck';
import { issueListApi } from '../src/utils/issueHook';
import { useSetRecoilState } from 'recoil';
import { isJwtActive } from '../src/store/atom';
import { useRouter } from 'next/router';
import Modal from '../src/components/items/modal/issue_modal';
import Head from 'next/head';

export default function Issue() {
  const setJwt = useSetRecoilState(isJwtActive);
  const [issues, setIssues] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [stopScrollApi, setStopScrollApi] = useState(false);
  // 페이지에서 넘어온 경우 보여줄 모달창을 위한 코드
  const router = useRouter(null);
  const [relatedIssueModal, setRelatedIssueModal] = useState(false);
  const [relatedIssueId, setRelatedIssueId] = useState(false);

  // 스크롤 기능입니다.
  async function fetchMoreData() {
    if (loading) return;
    setLoading(true);
    if (!stopScrollApi) {
      let endCount = pageCount + 30;
      await setPageCount(endCount);
      fetchData(endCount);
    }
  }

  async function fetchData(count) {
    const issueList = await issueListApi(count).then((res) => res.issues);
    await setIssues([...issues, ...issueList]);
    await setStopScrollApi(issueList.length <= 0);
    await setLoading(false);
  }

  const setModal = async (id) => {
    await setRelatedIssueId(id);
    await setRelatedIssueModal(true);
  };

  useEffect(() => {
    setLoading(true);
    checkLogin(setJwt);
    fetchData(pageCount);
    if (router.query.issueId) {
      setModal(router.query.issueId);
    }
  }, []);

  return (
    <div className="component" id={styles.issue}>
      <Head>
        <title>ISSUE</title>
      </Head>
      {/* 추후 추가될 태그 기능입니다. */}
      {/* <IssueTag /> */}
      {relatedIssueModal && (
        <Modal setIsModalOpen={setRelatedIssueModal} data={relatedIssueId} />
      )}
      <IssueList
        styles={styles}
        issues={issues}
        fetchMoreData={fetchMoreData}
        loading={loading}
      />
    </div>
  );
}
