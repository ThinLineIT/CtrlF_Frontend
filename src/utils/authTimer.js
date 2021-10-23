export default function Timer(time, dom, setIsTimerStarted) {
  let origin = time;
  const auth = setInterval(function () {
    let min = parseInt(origin / 60);
    let sec = origin % 60;
    dom.current.innerHTML = min + '분' + sec + '초';
    origin--;
    if (origin < 0) {
      setIsTimerStarted(false);
      clearInterval(auth);
      dom.current.innerHTML = '인증 만료';
    }
  }, 1000);
}
