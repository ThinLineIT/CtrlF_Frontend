import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { DetailList } from "../detailMockData";
import SideIndex from "./sideIndex/side_index";
import DetailContents from "./detail_contents";
import styles from "../../../../styles/items/notes/noteDetail/note_detail.module.css";
import { detailTitle, noteDetailData } from "../../../../store/atom";

export default function NoteDetail({ note }) {
  const { title } = note;
  const detailList = DetailList;
  const setData = useSetRecoilState(noteDetailData);
  const setNoteTitle = useSetRecoilState(detailTitle);

  useEffect(() => {
    setNoteTitle(title);
    setData(detailList);
  }, [detailList]);

  return (
    <div className={styles.wrap}>
      <SideIndex />
      <DetailContents />
    </div>
  );
}
