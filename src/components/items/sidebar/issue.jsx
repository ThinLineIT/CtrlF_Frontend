import { useSetRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { userRequestDataList, preparingModal } from '../../../store/atom';
import styles from '../../../styles/items/sidebar/issue.module.css';

export default function Issue() {
  const router = useRouter();
  const setModalHiiden = useSetRecoilState(preparingModal);
  const requestData = useRecoilValue(userRequestDataList);

  useEffect(() => {}, [requestData]);

  // const routeToIssuePage = () => {
  //   router.push('/requestIssue');
  // };

  const alertPreparing = () => {
    setModalHiiden(true);
  };
  return (
    <div className={styles.container}>
      <span>
        <h1 className={styles.title}>요청 검토 중인 내용</h1>
        <div className={styles.issue_container}>
          {requestData &&
            requestData.map((item, index) => (
              <div
                key={item.requestContent}
                className={`${styles.issues} ${
                  styles[`color_${Math.floor((index / 1) % 15)}`]
                }`}
                onClick={alertPreparing}
              >
                {' '}
                {item.noteName ? (
                  <h3>{item.noteName}</h3>
                ) : (
                  <h3>{item.requestTitle}</h3>
                )}
              </div>
            ))}
        </div>
      </span>
    </div>
  );
}
