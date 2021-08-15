import styles from '../../styles/items/issue/issue_btn.module.css';
import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { issueTypeCheck } from '../../store/atom';

export default function IssueCategory() {
  const setIssueType = useSetRecoilState(issueTypeCheck);

  const noteRef = useRef(null);
  const topicRef = useRef(null);
  const pageRef = useRef(null);

  const noteCheck = () => {
    setIssueType([
      noteRef.current.checked ? false : true,
      topicRef.current.checked,
      pageRef.current.checked,
    ]);
  };
  const topicCheck = () => {
    setIssueType([
      noteRef.current.checked,
      topicRef.current.checked ? false : true,
      pageRef.current.checked,
    ]);
  };
  const pageCheck = () => {
    setIssueType([
      noteRef.current.checked,
      topicRef.current.checked,
      pageRef.current.checked ? false : true,
    ]);
  };

  return (
    <div className={styles.category}>
      <input type="checkbox" id="opt-in1" ref={noteRef} />
      <label
        htmlFor="opt-in1"
        className={`${styles.category__note} ${styles.btn}`}
        onClick={noteCheck}
      >
        note
      </label>
      <input type="checkbox" id="opt-in2" ref={topicRef} />
      <label
        htmlFor="opt-in2"
        className={`${styles.category__topic} ${styles.btn}`}
        onClick={topicCheck}
      >
        topic
      </label>
      <input type="checkbox" id="opt-in3" ref={pageRef} />
      <label
        htmlFor="opt-in3"
        className={`${styles.category__page} ${styles.btn}`}
        onClick={pageCheck}
      >
        page
      </label>
    </div>
  );
}
