import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

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

export const noteModal = atom({
  key: 'add_note_modal',
  default: false,
});

export const isJwtActive = atom({
  key: 'json_web_token',
  default: false,
});

export const email = atom({
  key: 'email',
  default: '',
});

export const password = atom({
  key: 'password',
  default: '',
});

export const passwordCheck = atom({
  key: 'passwordCheck',
  default: '',
});

export const nickName = atom({
  key: 'nickName',
  default: '',
});

export const authCode = atom({
  key: 'AuthCode',
  default: '',
});

export const isOverlaped = atom({
  key: 'isOverlaped',
  default: false,
});

export const isNickOverlaped = atom({
  key: 'isNickOverlaped',
  default: '',
});

export const isPwValidated = atom({
  key: 'isPwValidated',
  default: '',
});

// Note Detail

export const detailTitle = atom({
  key: 'detail_title',
  default: '',
});

export const firstVisiblePageTitle = atom({
  key: 'first_visible_page_title',
  default: '',
});

export const noteDetailData = atom({
  key: 'note_detail_data',
  default: '',
});

export const menuPageX = atom({
  key: 'menu_pageX',
  default: '0px',
});

export const menuPageY = atom({
  key: 'menu_pageY',
  default: '0px',
});

export const dropDown = atom({
  key: 'dropdown',
  default: false,
});

export const contextMenuToggle = atom({
  key: 'context_menu_toggle',
  default: false,
});

export const topicName = atom({
  key: 'topic_name',
  default: '',
});

export const topicIndex = atom({
  key: 'topic_index',
  default: 1,
});

export const pageList = atom({
  key: 'page_list',
  default: [],
});

export const pageContent = atom({
  key: 'page_content',
  default: [],
});

export const ModifyPageContent = atom({
  key: 'modify_page_content',
  default: false,
});

export const addNewPage = atom({
  key: 'add_new_page',
  default: false,
});

export const isPageApproved = atom({
  key: 'is_page_approved',
  default: true,
});

// 모달 컴포넌트 & contextMenu

export const isApprovedModal = atom({
  key: 'not_approved_modal',
  default: false,
});

export const preparingModal = atom({
  key: 'preparing_modal',
  default: false,
});

export const isValidOnMainpage = atom({
  key: 'is_valid_on_mainpage',
  default: false,
});

export const isModalActive = atom({
  key: 'is_modal_active',
  default: false,
});

export const okBtnActive = atom({
  key: 'ok_btn_active',
  default: false,
});

export const isInputShouldActive = atom({
  key: 'is_input_should_active',
  default: false,
});

export const contextMenuActive = atom({
  key: 'context_menu_active',
  default: false,
});

export const contextMenuState = atom({
  key: 'context_menu_state', // 모달 안 이름 수정 or 내용 수정
  default: '',
});

export const contextMenuName = atom({
  key: 'context_menu_name', // context_menu 이름 수정 or 내용 수정
  default: '',
});

export const modalName = atom({
  key: 'modal_name', // 노트 or 토픽 or 페이지
  default: '',
});

export const modalUtilsName = atom({
  key: 'modal_utils_name', // 노트 or 토픽 or 페이지
  default: '',
});

export const modalUtilsSyntax = atom({
  key: 'modal_utils_syntax', // 은,는 구별
  default: '',
});

export const modalState = atom({
  key: 'modal_state', // 수정 or 삭제 or 추가
  default: '',
});

export const modalRestParams = atom({
  key: 'modal_rest_params',
  default: '',
});

export const modalNameEn = atom({
  key: 'modal_name_en', // modal input placeholder
  default: 'note',
});

export const buttonOk = atom({
  key: 'button_ok',
  default: 'OK',
});

export const buttonCancel = atom({
  key: 'button_cancel',
  default: 'CANCEL',
});

export const modalInputPlaceholder = atom({
  key: 'modal_input_placeholder',
  default: '',
});

export const modalTextareaPlaceholder = atom({
  key: 'modal_textarea_placeholder', // 수정 or 삭제 요청 사유
  default: '',
});

export const modalTitle = selector({
  key: 'modal_title',
  get: ({ get }) => {
    return `${get(modalName)} ${get(contextMenuState)} ${get(modalRestParams)}`;
  },
  set: ({ set }, newValue) => {
    set(modalName, newValue);
  },
});

export const modalMessage = selector({
  key: 'modal_message',
  get: ({ get }) => {
    return `${get(modalName)} ${get(
      contextMenuState
    )} 요청이 노트 owner에게 전달됩니다.`;
  },
  set: ({ set }, newValue) => {
    set(modalName, newValue);
  },
});

// users request data

export const requestIssueTitle = atom({
  key: 'request_issue_title',
  default: '',
});

export const requestIssueContent = atom({
  key: 'request_issue_content',
  default: '',
});

export const userRequestDataList = atom({
  key: 'user_request_data_list',
  default: [
    {
      noteName: '운영체제',
      title: '노트 이름 수정 요청',
      requestTitle: '운용 체제',
      requestContent: '이재용도 석방됬는데 운용체제라고 리네임하는건 어때요?',
    },
    {
      noteName: '이산수학',
      title: '노트  삭제 요청',
      requestContent: '이산 수학이 뭐죠? 율곡 이이가 만든 산수인가요',
    },
  ],
});

export const backToEmail = atom({
  key: 'backToEmail',
  default: false,
});

const { persistAtom } = recoilPersist();

export const filterList = atom({
  key: 'filterList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 실제 api

export const noteDataList = atom({
  key: 'note_data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const topicDataList = atom({
  key: 'topic_data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const pageDataList = atom({
  key: 'page_data',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const setTimer = atom({
  key: 'setTimer',
  default: false,
});
