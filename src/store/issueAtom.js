import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const filterList = atom({
  key: 'filterList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const issueDetailTopicId = atom({
  key: 'issue_detail_topicId',
  default: null,
});

export const issueDetailPageId = atom({
  key: 'issue_detail_page_id',
  default: null,
});

export const issueDetailPageVersionNo = atom({
  key: 'issue_detail_page_version_no',
  default: null,
});

export const pageDetailIssueId = atom({
  key: 'page_detail_issueId',
  default: '',
});
