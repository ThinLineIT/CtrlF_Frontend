import React, { useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { MyToggle } from '../../../store/atom';
import useNoteSearch from '../../../hooks/use_note_search';
import styles from '../../../styles/items/sidebar/toggle.module.css';

export default function Toggle() {
  const [cursorNumber, setCursorNumber] = useState(0);
  const setToggle = useSetRecoilState(MyToggle);
  const [approvedClick, setApprovedClick] = useState('default');
  const [notApprovedClick, setNotApprovedClick] = useState('default');
  const focusIn = useRef();
  const focusOut = useRef();

  useNoteSearch(cursorNumber);

  const handleButtonApprove = () => {
    if (approvedClick === 'default') {
      setToggle('true');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('true');
      setNotApprovedClick('default');
      focusIn.current.style.background = '#c6d5f4';
      focusOut.current.style.background = '#ffffff';
    } else if (approvedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('default');
      focusIn.current.style.background = '#ffffff';
    }
  };

  const handleButtonReject = () => {
    if (notApprovedClick === 'default') {
      setToggle('false');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('true');
      setApprovedClick('default');
      focusOut.current.style.background = '#c6d5f4';
      focusIn.current.style.background = '#ffffff';
    } else if (notApprovedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('default');
      focusOut.current.style.background = '#ffffff';
    }
  };

  return (
    <div className={styles.btn_container}>
      <button
        ref={focusIn}
        className={styles.approved_btn}
        onClick={handleButtonApprove}
      >
        승인
      </button>
      <button
        ref={focusOut}
        className={styles.rejected_btn}
        onClick={handleButtonReject}
      >
        미승인
      </button>
    </div>
  );
}
