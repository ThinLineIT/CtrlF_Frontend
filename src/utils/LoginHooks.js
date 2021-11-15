import axios from 'axios';
function loginHook(data) {
  const request = axios
    .post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_API_URL
          : process.env.NEXT_PUBLIC_BUILD_API_URL
      }/auth/login/`,
      data
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
}

export default loginHook;
