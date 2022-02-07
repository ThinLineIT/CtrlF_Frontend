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
    .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}pages/${id}/${versionNo}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return request;
};

export const noteCreateApi = async (data) => {
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}notes/`,
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

export const topicCreateApi = async (data) => {
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}topics/`,
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
