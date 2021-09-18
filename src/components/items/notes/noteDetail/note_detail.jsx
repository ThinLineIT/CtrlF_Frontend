import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useSetRecoilState } from 'recoil';
import { DetailList } from '../detailMockData';
import SideIndex from './sideIndex/side_index';
import DetailContents from './detail_contents';
import styles from '../../../../styles/items/notes/noteDetail/note_detail.module.css';
import {
  detailTitle,
  noteDetailData,
  isValidOnMainpage,
  ModifyPageContent,
} from '../../../../store/atom';

export default function NoteDetail({ note }) {
  const { title } = note;
  const detailList = DetailList; // 향후 api 개발 완료 시 교체 예정
  const setData = useSetRecoilState(noteDetailData);
  const setNoteTitle = useSetRecoilState(detailTitle);
  const [isValidJwt, setIsValidJwt] = useState(false);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const setIsOnMainPage = useSetRecoilState(isValidOnMainpage);

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const isValidToken = cookies.token;

  useEffect(() => {
    isValidToken ? setIsValidJwt(true) : setIsValidJwt(false);
  }, [cookies]);

  useEffect(() => {
    setData(detailList);
    setNoteTitle(title);
    setModifyPage(false);
    setIsOnMainPage(false);
  }, [detailList]);

  return (
    <div className={styles.wrap}>
      <SideIndex isValidJwt={isValidJwt} />
      <DetailContents isValidJwt={isValidJwt} />
    </div>
  );
}
