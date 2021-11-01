import axios from 'axios';
import Cookies from 'js-cookie';

export const issueListApi = async (cursor) => {
  const request = await axios
    .get(`${process.env.PUBLIC_BASE_API}issues/?cursor=${cursor}`)
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
  return request;
};

export const issueDetailApi = async (id) => {
  const request = await axios
    .get(`${process.env.PUBLIC_BASE_API}issues/${id}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const issueApproveApi = async (id) => {
  const data = {
    issue_id: id,
  };
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.PUBLIC_BASE_API}actions/issue-approve/`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => console.log(res.response))
    .catch((err) => console.log(err.response));
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
