import {atom} from 'recoil';

export const email = atom({
  key: 'email',
  default: ""
});

export const password = atom({
    key: 'password',
    default: ""
});

export const passwordCheck = atom({
  key: 'passwordCheck',
  default: " "
});

export const nickName = atom({
  key: 'nickName',
  default: ""
});

export const authCode = atom({
  key: 'AuthCode',
  default: ""
});

export const isOverlaped = atom({
  key: 'isOverlaped',
  default: false
});

export const isNickOverlaped = atom({
  key: 'isNickOverlaped',
  default: false
});