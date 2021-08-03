import { useSetRecoilState } from 'recoil';
import { MyToggle } from '../../../store/atom';
import React, { useState, useRef } from 'react';
import styles from '../../../styles/items/sidebar/toggle.module.css';
import usePagination from '../../../hooks/use_pagination';

export default function Toggle() {
  const focusIn = useRef();
  const focusOut = useRef();
  const makerWhite = '#ffffff';
  const makerPurple = '#c6d5f4';
  const setToggle = useSetRecoilState(MyToggle);
  const [cursorNumber, setCursorNumber] = useState(0);
  const [approvedClick, setApprovedClick] = useState('default');
  const [notApprovedClick, setNotApprovedClick] = useState('default');

  usePagination(cursorNumber);

  const onButtonApprove = () => {
    if (approvedClick === 'default') {
      setToggle('true');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('true');
      setNotApprovedClick('default');
      focusIn.current.style.background = makerPurple;
      focusOut.current.style.background = makerWhite;
    } else if (approvedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setApprovedClick('default');
      focusIn.current.style.background = makerWhite;
    }
  };

  const onButtonNotApprove = () => {
    if (notApprovedClick === 'default') {
      setToggle('false');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('true');
      setApprovedClick('default');
      focusOut.current.style.background = makerPurple;
      focusIn.current.style.background = makerWhite;
    } else if (notApprovedClick === 'true') {
      setToggle('');
      setCursorNumber(0);
      window.scrollTo(0, 120);
      setNotApprovedClick('default');
      focusOut.current.style.background = makerWhite;
    }
  };

  return (
    <div className={styles.btn_container}>
      <button
        ref={focusIn}
        className={styles.approved_btn}
        onClick={onButtonApprove}
      >
        승인
      </button>
      <button
        ref={focusOut}
        className={styles.rejected_btn}
        onClick={onButtonNotApprove}
      >
        미승인
      </button>
    </div>
  );
}
