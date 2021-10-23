import authTimer from '../../utils/authTimer';
import { setTimer as setTimerAtom } from '../../store/atom';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sendAuthCode } from '../../utils/PasswordChange';

export default function Timer({ email, register }) {
  const [limit, setLimit] = useState(10);
  const timeRef = useRef(null);
  const time = useRef(179);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [notFirst, setNotFirst] = useState(false);
  const [minute, setMinute] = useState('03:');
  const [second, setSecond] = useState('00');
  const timerStart = useRecoilValue(setTimerAtom);
  const pwStyles = {
    position: 'absolute',
    top: '36.5%',
    right: '15%',
    color: 'red',
    fontSize: '25px',
  };
  const registerStyle = {
    position: 'absolute',
    top: '22%',
    right: '8%',
    color: 'red',
    fontSize: '25px',
  };

  useEffect(() => {
    timeRef.current = setInterval(function () {
      setMinute('0' + parseInt(time.current / 60) + ':');
      if (time.current % 60 < 10) {
        setSecond('0' + (time.current % 60));
      } else setSecond(time.current % 60);
      time.current--;
    }, 1000);
    setLimit(limit - 1);
    sendAuthCode(email, limit);
    setNotFirst(true);
    return () => {
      clearInterval(timeRef.current);
    };
  }, [isTimerStarted]);

  useEffect(() => {
    if (notFirst !== false) {
      clearInterval(timeRef.current);
      time.current = 180;
      setMinute('03:');
      setSecond('00');
      setIsTimerStarted([]);
    }
  }, [timerStart]);

  useEffect(() => {
    if (time.current < 0) {
      setMinute('인증');
      setSecond('만료');
      clearInterval(timeRef.current);
    }
  }, [second]);

  return (
    <>
      <div
        id="timer"
        style={(function () {
          if (register) return registerStyle;
          else return pwStyles;
        })()}
        ref={timeRef}
      >
        {minute}
        {second}
      </div>
    </>
  );
}
