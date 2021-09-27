import { useSetRecoilState } from 'recoil';
import { DetailList } from '../detailMockData';
import SideIndex from './sideIndex/side_index';
import DetailContents from './detail_contents';
import React, { useEffect } from 'react';
import styles from '../../../../styles/items/notes/noteDetail/note_detail.module.css';
import {
  pageList,
  topicName,
  pageContent,
  detailTitle,
  noteDetailData,
  isValidOnMainpage,
  ModifyPageContent,
  firstVisiblePageTitle,
} from '../../../../store/atom';

export default function NoteDetail({ note }) {
  const { title } = note;
  const detailList = DetailList; // 향후 api 개발 완료 시 교체 예정
  const setTopicTitle = useSetRecoilState(topicName);
  const setMyPageList = useSetRecoilState(pageList);
  const setData = useSetRecoilState(noteDetailData);
  const setNoteTitle = useSetRecoilState(detailTitle);
  const setMyPageContent = useSetRecoilState(pageContent);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);
  const setPageTitle = useSetRecoilState(firstVisiblePageTitle);

  useEffect(() => {
    setData(detailList);
    setNoteTitle(title);
    setModifyPage(false);
    setIsOnMainPage(false);
  }, [detailList]);

  useEffect(() => {
    const initialPage = detailList[0];
    setTopicTitle(initialPage.name);
    setMyPageList(initialPage.section);
    setPageTitle(initialPage.section[0].title);
    setMyPageContent(initialPage.section[0].content);
  }, []);

  return (
    <div className={styles.wrap}>
      <SideIndex />
      <DetailContents />
    </div>
  );
}
