import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const MyToggle = atom({
  key: 'toggle',
  default: '',
});

export const isJwtActive = atom({
  key: 'json_web_token',
  default: false,
});

export const detailTitle = atom({
  key: 'detail_title',
  default: '',
});

export const firstVisiblePageTitle = atom({
  key: 'first_visible_page_title',
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

export const topicName = atom({
  key: 'topic_name',
  default: '',
});

export const topicIndex = atom({
  key: 'topic_index',
  default: 0,
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

export const isOnEditPage = atom({
  key: 'is_on_edit_page',
  default: false,
});

export const pageupdate = atom({
  key: 'page_update',
  default: false,
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

export const isModalActive = atom({
  key: 'is_modal_active',
  default: false,
});

export const okBtnActive = atom({
  key: 'ok_btn_active',
  default: false,
});

export const contextMenuName = atom({
  key: 'context_menu_name', // context_menu 이름 수정 or 내용 수정
  default: '이름 수정',
});

export const modalUtilsName = atom({
  key: 'modal_utils_name', // 노트 or 토픽 or 페이지
  default: '',
});

export const modalUtilsSyntax = atom({
  key: 'modal_utils_syntax', // 은,는 구별
  default: '',
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
      noteName: 'OS',
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

const { persistAtom } = recoilPersist();

// 실제 api

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

export const currentPageId = atom({
  key: 'current_page_id',
  default: null,
});

export const currentTopicId = atom({
  key: 'current_topic_id',
  default: null,
});
