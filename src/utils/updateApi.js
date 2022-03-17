import axios from 'axios';
import Cookies from 'js-cookie';

export const noteUpdateApi = async (noteId, data) => {
  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}notes/${noteId}/`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};

export const topicUpdateApi = async (topicId, data) => {
  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}topics/${topicId}/`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};

export const pageUpdateApi = async (pageId, data) => {
  let headers = Cookies.get('token');

  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}pages/${pageId}/`,
    method: 'put',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => err.response);
  return request;
};
