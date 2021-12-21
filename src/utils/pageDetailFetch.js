import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const topicListApi = async (id) => {
  const request = await axios
    .get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }notes/${id}/topics`
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const pageListApi = async (id) => {
  const request = await axios
    .get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }topics/${id}/pages`
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const pageDetailApi = async (id, versionNo) => {
  const request = await axios
    .get(
      `${
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
          : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
      }/pages/${id}?version_no=${versionNo}`
    )
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const ApproveApi = async (id) => {
  const data = {
    issue_id: +id,
  };
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_STAGING_API_BASE_URL
        : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
    }actions/issue-approve/`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res.response)
    .catch((err) => err.response);
  return request;
};
