import { atom } from 'recoil';

export const List = atom({
  key: 'noteList',
  default: [],
});

export const noteNumber = atom({
  key: 'noteNumber',
  default: 0,
});

export const MyToggle = atom({
  key: 'toggle',
  default: '',
});

export const HeaderBar = atom({
  key: 'head_title',
  default: '현재 모아진 아이디어',
});

export const ModalUpdate = atom({
  key: 'not_approved_modal',
  default: true,
});

export const noteModal = atom({
  key: 'add_note_modal',
  default: true,
});

export const isJwtActive = atom({
  key: 'json_web_token',
  default: false,
});

export const userRequestNoteTextarea = atom({
  key: 'user_request_note',
  default: '',
});
