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
  const authCode = await sendAuthCode(data);
  if (authCode === true) return true;
};

export const sendAuthCode = async (data) => {
  const request = await emailAuthApi(data);
  if (request.signing_token) {
    Cookies.set('signing_token', request.signing_token);
    return true;
  }
};

export const authCodeApi = async (data) => {
  const authCodeCheck = await authCodeConfirm(data);
  if (authCodeCheck.status === 200) {
    return true;
  } else {
    return authCodeCheck.data.message;
  }
};

export const passwordChangeApi = (data) => {};
