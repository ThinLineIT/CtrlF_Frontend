import axios from 'axios';
export function issueHook() {
  const request = axios
    .get(`${process.env.MOCK_PUBLIC_BASE_API}/issues`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
}

export function issueAccept() {
  alert('이슈를 승인하겠습니다');
}

export function issueReject() {
  alert('이슈를 미승인하겠습니다');
}

export function issueCancel() {
  alert('이슈를 취소합니다');
}

export function issueEdit() {
  alert('이슈를 수정합니다');
}
