import { useEffect, useState } from 'react';
import NoAuthentification from '../../issue/NoAuthentification';
import NonLoginUsersModal from './non_login_users_modal';
import IssueDetailModal from './IssueDetailModal';

export default function Modal({ setModal, data }) {
  const [isLogin, setIsLogin] = useState(true); // 임시 로그인 기능입니다. 교체 예정입니다
  const [isModalFeature, setIsModalFeature] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {!isModalFeature && (
        <IssueDetailModal
          data={data}
          setModal={setModal}
          setIsModalFeature={setIsModalFeature}
        />
      )}
      {isLogin && isModalFeature && (
        <NoAuthentification setIsModalFeature={setIsModalFeature} />
      )}
      {!isLogin && isModalFeature && <NonLoginUsersModal />}
    </>
  );
}
