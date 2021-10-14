import authTimer from '../../utils/authTimer';
import { setTimer as setTimerAtom } from '../../store/atom';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sendAuthCode } from '../../utils/PasswordChange';

export default function Timer({ email, destroy }) {
  const timeRef = useRef(null);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [minute, setMinute] = useState('03');
  const [second, setSecond] = useState('00');
  const timerStart = useRecoilValue(setTimerAtom);
  const styles = {
    position: 'absolute',
    top: '36.5%',
    right: '15%',
    color: 'red',
  };

  function Timer() {
    let origin = 180;
    const auth = setInterval(function () {
      if (origin < 0) {
        console.log('ddd');
        setIsTimerStarted(false);
        clearTimeout(auth);
        timeRef.current.innerHTML = '인증 만료';
      }
      // else if (destroy === true) {
      //   clearInterval(auth);
      // }
      let min = parseInt(origin / 60);
      let sec = origin % 60;
      setMinute(min);
      setSecond(sec);
      // console.log('ss', origin);
      // timeRef.current.innerHTML = min + '분' + sec + '초';
      origin--;
    }, 1000);
  }

  useEffect(() => {
    if (isTimerStarted !== true) {
      setIsTimerStarted(true);
      Timer();
      sendAuthCode(email);
    }
    return () => {
      clearInterval(Timer);
    };
  }, [timerStart]);

  return (
    <>
      <div id="timer" style={styles} ref={timeRef}>
        {minute}분 {second}초
      </div>
    </>
  );
}
