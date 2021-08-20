import RightClickSpan from "./rightClick";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styles from "../../../../../styles/items/notes/noteDetail/sideIndex/index_index.module.css";
import {
  pageList,
  menuPageX,
  menuPageY,
  pageContent,
  modalTitleEn,
  modalTitleKo,
  noteDetailData,
  rightSpanContent,
  contextMenuActive,
} from "../../../../../store/atom";

export default function IndexIndex() {
  const pageRef = useRef();
  const data = useRecoilValue(noteDetailData);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModalTitle = useSetRecoilState(modalTitleKo);
  const [modalToggle, setModalToggle] = useState(false);
  const setMyPageContent = useSetRecoilState(pageContent);
  const [myPageList, setMyPageList] = useRecoilState(pageList);
  const setRightSpanContent = useSetRecoilState(rightSpanContent);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const setInputPlaceholder = useSetRecoilState(modalTitleEn);

  useEffect(() => {
    setMyPageContent([]);
  }, []);

  const useContextMenu = (event) => {
    event.preventDefault();
    if (!modalToggle) {
      setXPos(`${event.pageX}px`);
      setYPos(`${event.pageY - 80}px`);
      setShowMenu(true);
      setModalToggle(true);
      setRightSpanContent("이름");
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }

    if (event.target.className.includes("page")) {
      setModalTitle("페이지");
      setRightSpanContent("내용");
      setInputPlaceholder("page");
    } else if (event.target.className.includes("topic")) {
      setModalTitle("토픽");
      setInputPlaceholder("topic");
    }
  };

  const showPageList = (index) => {
    const getNewPageData = data[index].section.map((a) => a.title);
    setMyPageList(getNewPageData);
    const myPageData = data[index].section.map((a) => a.content);
    setMyPageContent(myPageData[0]);
    closeContextMenu();
  };

  const showPageContent = (index) => {
    const myPageData = data[index].section.map((a) => a.content);
    setMyPageContent(myPageData[index]);
    closeContextMenu();
  };

  const closeContextMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setModalToggle(false);
    }
  };

  return (
    <section className={styles.index_index}>
      <div className={styles.index_topic}>
        <ul className={styles.index_topic_ul}>
          {data &&
            data.map((item, index) => (
              <li
                key={item.id}
                className={styles.index_topic_li}
                onClick={() => showPageList(index)}
                onContextMenu={useContextMenu}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.index_page}>
        <ul className={styles.index_page_ul}>
          {myPageList.map((pageName, index) => (
            <li
              ref={pageRef}
              className={styles.index_page_li}
              onClick={() => showPageContent(index)}
              onContextMenu={useContextMenu}
            >
              {pageName}
            </li>
          ))}
        </ul>
      </div>
      {showMenu ? <RightClickSpan x={xPos} y={yPos} /> : null}
    </section>
  );
}
