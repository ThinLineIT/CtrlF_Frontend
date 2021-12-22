
import axios from 'axios';
import { emailReg } from '../utils/Reg';
import { emailAuthApi, overlapApi, authCodeConfirm } from './SignUpHook';
import Cookies from 'js-cookie';

export const emailApi = async (data) => {
  if (!emailReg(data)) {
    return '이메일 형식이 올바르지 않습니다.';
  }
  const isOverlap = await overlapApi(data);
  if (isOverlap.data.message !== '이미 존재하는 이메일 입니다.')
    return '등록되지 않은 이메일 입니다.';
  return true;
};

export const sendAuthCode = async (data, limit) => {
  if (limit < 0) return;
  const request = await emailAuthApi(data);
  if (request.signing_token) {
    Cookies.set('signing_token', request.signing_token);
    return true;
  }
};

export const authCodeApi = async (code) => {
  const authCodeCheck = await authCodeConfirm(code);
  if (authCodeCheck.data.signing_token) {
    Cookies.set('signing_token', authCodeCheck.data.signing_token);
  }
  if (authCodeCheck.status === 200) {
    return true;
  } else {
    return authCodeCheck.data.message;
  }
};

export const passwordChangeApi = async (data) => {
  data.signing_token = Cookies.get('signing_token');
  const request = await axios
    .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}auth/reset_password/`, data)
    .then((res) => res)
    .catch((err) => err.response);
  if (request.status === 200) return true;
  else return request.data.message;
};
