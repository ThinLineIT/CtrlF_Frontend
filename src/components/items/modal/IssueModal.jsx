import { useEffect, useState } from 'react';
import NoAuthentification from './NoAuthentification';
import IssueApproveModal from './IssueApproveModal';
import IssueDetailModal from './IssueDetailModal';
import { issueDetailApi } from '../../../utils/issueApi';

export default function Modal({ setIsModalOpen, data }) {
  const [issueDetail, setIssueDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUnathorized, setIsUnathorized] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [issueTypeAndIssue, setIssueTypeAndIssue] = useState('');
  const [modalText, setModalText] = useState('');

  const fetchIssueDetail = async () => {
    const issueInfo = await issueDetailApi(data);
    setIssueDetail(issueInfo);
    setLoading(true);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    fetchIssueDetail();

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (issueDetail != null)
      setIssueTypeAndIssue(
        `${issueDetail.related_model_type} ${issueDetail.action}`
      );
  }, [issueDetail]);

  return (
    <>
      {!isUnathorized && loading && !isApproved && (
        <IssueDetailModal
          issue={issueDetail}
          title={issueTypeAndIssue}
          setModalText={setModalText}
          setIsModalOpen={setIsModalOpen}
          setIsUnathorized={setIsUnathorized}
          setIsApproved={setIsApproved}
        />
      )}
      {isUnathorized && (
        <NoAuthentification
          title={issueTypeAndIssue}
          setIsUnathorized={setIsUnathorized}
          errorContent={modalText}
        />
      )}
      {isApproved && (
        <IssueApproveModal
          title={issueTypeAndIssue}
          modalText={modalText}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
