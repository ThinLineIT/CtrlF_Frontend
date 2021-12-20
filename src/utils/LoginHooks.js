import axios from 'axios';
function loginHook(data) {
  const request = axios
    .post(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_STAGING_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }/auth/login/`,
      data
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
}

export default loginHook;
