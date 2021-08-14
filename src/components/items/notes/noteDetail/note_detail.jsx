import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import DetailContents from "./detail_contents";
import { DetailList } from "../detailMockData";
import SideIndex from "./sideIndex/side_index";
import { detailTitle, noteDetailData } from "../../../../store/atom";
import styles from "../../../../styles/items/notes/note_detail.module.css";

export default function NoteDetail({ note }) {
  const { title } = note;
  const detailList = DetailList;
  const setNoteTitle = useSetRecoilState(detailTitle);
  const setData = useSetRecoilState(noteDetailData);

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
