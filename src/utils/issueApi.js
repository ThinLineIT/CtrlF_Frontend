import axios from 'axios';
import Cookies from 'js-cookie';

export const issueListApi = async (cursor) => {
  const request = await axios
    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}issues/?cursor=${cursor}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const issueDetailApi = async (id) => {
  const request = await axios
    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}issues/${id}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const issueApproveApi = async (id) => {
  const data = {
    issue_id: +id,
  };
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-approve/`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
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
