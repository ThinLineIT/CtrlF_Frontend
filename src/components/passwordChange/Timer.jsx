import authTimer from '../../utils/authTimer';
import { setTimer as setTimerAtom } from '../../store/atom';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sendAuthCode } from '../../utils/PasswordChange';

export default function Timer({ email }) {
  const timeRef = useRef(null);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const timerStart = useRecoilValue(setTimerAtom);
  const styles = {
    position: 'absolute',
    top: '36.5%',
    right: '15%',
    color: 'red',
  };
  useEffect(() => {
    if (isTimerStarted !== true) {
      authTimer(10, timeRef, setIsTimerStarted);
      sendAuthCode(email);
      setIsTimerStarted(true);
    }
  }, [timerStart]);
  return (
    <>
      <div id="timer" style={styles} ref={timeRef}></div>
    </>
  );
}
