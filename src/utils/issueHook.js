import axios from 'axios';
export const issueListApi = async (cursor) => {
  const request = await axios
    .get(`${process.env.PUBLIC_BASE_API}/issues/?cursor=${cursor}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
  return request;
};

export const issueDetailApi = async (id) => {
  const request = await axios
    .get(`${process.env.PUBLIC_BASE_API}/issues/${id}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

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
