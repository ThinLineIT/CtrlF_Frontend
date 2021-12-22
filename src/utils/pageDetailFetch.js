import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

export const fetchTopics = async (id) => {
  const request = await axios
    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}notes/${id}/topics`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const fetchPageList = async (id) => {
  const request = await axios
    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}topics/${id}/pages`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const fetchPageDetail = async (id, versionNo) => {
  const request = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/${id}?version_no=${versionNo}`
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
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/issue-approve/`,
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
