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

export const issueCloseApi = async (id) => {
  const data = {
    issue_id: id,
  };

  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-close/`,
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

export const issueDeleteApi = async (id) => {
  const data = {
    issue_id: id,
  };

  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-delete/`,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};

export const issueRejectApi = async (id) => {
  const data = {
    issue_id: id,
  };

  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-reject/`,
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

export const issueUpdateApi = async (id, title, reason, content) => {
  const data = {
    issue_id: id,
    new_title: title,
    new_content: content,
    reason,
  };

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-update/`,
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
