import { atom } from 'recoil';

export const List = atom({
  key: 'MyNotes',
  default: [],
});

export const noteNumber = atom({
  key: 'MyNoteNumber',
  default: 0,
});

export const MyToggle = atom({
  key: 'MyToggle',
  default: '',
});

export const HeaderBar = atom({
  key: 'head_title',
  default: '현재 모아진 아이디어',
});

export const ModalUpdate = atom({
  key: 'using_trick',
  default: true,
});

export const noteModal = atom({
  key: 'note_trick',
  default: true,
});
