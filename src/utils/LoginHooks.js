
import axios from 'axios';
function loginHook(data) {
  const request = axios
    .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login/`, data)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
}

export default loginHook;

