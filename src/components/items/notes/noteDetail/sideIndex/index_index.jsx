import React, { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styles from "../../../../../styles/items/notes/note_detail.module.css";
import {
  contextMenuActive,
  menuPageX,
  menuPageY,
  modalTitleKo,
  noteDetailData,
} from "../../../../../store/atom";
import RightClickSpan from "./rightClick";

export default function IndexIndex() {
  const pageRef = useRef();
  const data = useRecoilValue(noteDetailData);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModalTitle = useSetRecoilState(modalTitleKo);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const [modalToggle, setModalToggle] = useState(false);

  const useContextMenu = (event) => {
    event.preventDefault();
    if (!modalToggle) {
      setXPos(`${event.pageX}px`);
      setYPos(`${event.pageY - 80}px`);
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    event.target.className.includes("page") ? setModalTitle("페이지") : null;
    event.target.className.includes("topic") ? setModalTitle("토픽") : null;
  };

  const closeContextMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setModalToggle(false);
    }
  };

  return (
    <>
      <div className={styles.index_topic}>
        <ul className={styles.index_topic_ul}>
          {data &&
            data.map((item, index) => (
              <li
                key={item.id}
                className={styles.index_topic_li}
                onClick={closeContextMenu}
                onContextMenu={useContextMenu}
              >
                TOPIC
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.index_page}>
        <ul className={styles.index_page_ul}>
          {data &&
            data.map((item) => (
              <li
                ref={pageRef}
                key={item.id}
                className={styles.index_page_li}
                onClick={closeContextMenu}
                onContextMenu={useContextMenu}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
      {showMenu ? <RightClickSpan x={xPos} y={yPos} /> : null}
    </>
  );
}
