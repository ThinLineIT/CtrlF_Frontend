import { useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { userRequestDataList } from '../../../store/atom';
import styles from '../../../styles/items/sidebar/issue.module.css';

export default function Issue() {
  const router = useRouter();
  const requestData = useRecoilValue(userRequestDataList);

  useEffect(() => {}, [requestData]);

  const routeToIssuePage = () => {
    router.push('/requestIssue');
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
                onClick={routeToIssuePage}
              >
                {' '}
                {item.noteName ? (
                  <h4 style={{ marginTop: '.2em' }}>{item.noteName}</h4>
                ) : (
                  <h4 style={{ marginTop: '.2em' }}>{item.requestTitle}</h4>
                )}
              </div>
            ))}
          <span className={styles.view_more} onClick={routeToIssuePage}>
            <h4>+</h4>
            <h4>VIEW MORE</h4>
          </span>
        </div>
      </span>
    </div>
  );
}
