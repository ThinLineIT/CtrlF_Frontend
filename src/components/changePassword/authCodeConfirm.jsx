import React, { useState, useEffect } from 'react';
import styles from '../../styles/changePassword/authcodeConfirm.module.css';

export default function AuthCodeConfirm() {
  const [count, setCount] = useState('');
  const [index, setIndex] = useState(false);
  let time = 180;

  useEffect(() => {
    startCount();
  }, []);

  const startCount = () => {
    setInterval(() => {
      let min = parseInt(time / 60);
      let sec = parseInt(time % 60);
      sec = sec >= 10 ? sec : `0${sec}`;

      setCount(min + ':' + sec);
      time--;

      if (time < 0) {
        clearInterval(startCount);
        setIndex(true);
        setCount('재전송');
      }
    }, 1000);
  };

  return (
    <>
      <input className={styles.authcodeInput} />
      <span style={{ position: 'relative' }}>
        <button className={styles.authcodeConfirm}>인증하기 </button>
        <button className={`${getStyles(index)}`}>{count}</button>
      </span>
    </>
  );
}

function getStyles(index) {
  switch (index) {
    case true: {
      return styles.countEnd;
    }
    case false: {
      return styles.authcodeCount;
    }
  }
}
