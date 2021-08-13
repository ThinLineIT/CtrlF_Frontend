import axios from 'axios';
function issueHook() {
  const request = axios
    .get(`${process.env.MOCK_PUBLIC_BASE_API}/issues`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
}

export default issueHook;
