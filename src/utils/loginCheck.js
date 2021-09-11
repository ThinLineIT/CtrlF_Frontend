import Cookies from 'js-cookie';

export const checkLogin = (setJwt) => {
  // 로그인 시 저장된 토큰과 user_id를 확인합니다.
  // 두 값이 모두 존재한다면 로그인 처리를 진행합니다.
  // 이 함수는 모든 page 컴포넌트에서 마운트 될 때마다 실행되어야 합니다.
  const user_id = localStorage.getItem('user_id');
  const access_token = Cookies.get('token');
  console.log(user_id, access_token);
  if (user_id && access_token) {
    setJwt(true);
  }
};
