import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { MyToggle } from '../../../store/atom';
import useNoteSearch from '../../../hooks/use_note_search';
import styles from '../../../styles/items/sidebar/toggle.module.css';

export default function Toggle() {
  const [cursorNumber, setCursorNumber] = useState(0);
  const setToggle = useSetRecoilState(MyToggle);
  const [approvedClick, setApprovedClick] = useState('default');
  const [notApprovedClick, setNotApprovedClick] = useState('default');

  useNoteSearch(cursorNumber);

  const handleButtonApprove = () => {
    if (approvedClick === 'default') {
      setToggle('true');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('true');
      setNotApprovedClick('default');
    } else if (approvedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('default');
    }
  };

  const handleButtonReject = () => {
    if (notApprovedClick === 'default') {
      setToggle('false');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('true');
      setApprovedClick('default');
    } else if (notApprovedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('default');
    }
  };

  return (
    <div className={styles.btn_container}>
      <button className={styles.approved_btn} onClick={handleButtonApprove}>
        승인
      </button>
      <button className={styles.rejected_btn} onClick={handleButtonReject}>
        미승인
      </button>
    </div>
  );
}
