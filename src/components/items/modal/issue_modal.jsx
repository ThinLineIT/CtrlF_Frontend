import { useEffect, useState } from 'react';
import NoAuthentification from '../../issue/NoAuthentification';
import IssueDetailModal from './IssueDetailModal';

export default function Modal({ setIsModalOpen, data }) {
  const [isLogin, setIsLogin] = useState(true); // 임시 로그인 기능입니다. 교체 예정입니다
  const [isFeatureClicked, setIsFeatureClicked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {!isFeatureClicked && (
        <IssueDetailModal
          data={data}
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
