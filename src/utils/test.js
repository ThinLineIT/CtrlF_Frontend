import Cookies from 'js-cookie';

export const loginCheck = (setJwt) => {
  const user_id = localStorage.getItem('user_id');
  const access_token = Cookies.get('token');
  console.log(user_id, access_token);
  if (user_id && access_token) {
    setJwt(true);
  }
};
