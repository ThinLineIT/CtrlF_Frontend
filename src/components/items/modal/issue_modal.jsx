import { useEffect, useState } from 'react';
import NoAuthentification from '../../issue/NoAuthentification';
import IssueDetailModal from './IssueDetailModal';
import { issueDetailApi } from '../../../utils/issueHook';

export default function Modal({ setIsModalOpen, data }) {
  const [isLogin, setIsLogin] = useState(true); // 임시 로그인 기능입니다. 교체 예정입니다
  const [isFeatureClicked, setIsFeatureClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [issueDetail, setIssueDetail] = useState(null);
  // const [content, setContent] = useState(null);

  const fetchIssueDetail = async () => {
    const issueInfo = await issueDetailApi(data.id);
    await setIssueDetail(issueInfo);
    setLoading(true);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    fetchIssueDetail();
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {!isFeatureClicked && loading && (
        <IssueDetailModal
          data={issueDetail}
          setIsModalOpen={setIsModalOpen}
          setIsFeatureClicked={setIsFeatureClicked}
        />
      )}
      {isLogin && isFeatureClicked && (
        <NoAuthentification setIsFeatureClicked={setIsFeatureClicked} />
      )}
    </>
  );
}
