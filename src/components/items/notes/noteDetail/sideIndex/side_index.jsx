import IndexIndex from "./index_index";
import RightClickSpan from "./rightClick";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styles from "../../../../../styles/items/notes/note_detail.module.css";
import {
  menuPageX,
  menuPageY,
  detailTitle,
  modalTitleKo,
  noteDetailData,
  contextMenuActive,
  contextMenuToggle,
  rightSpanContent,
} from "../../../../../store/atom";

export default function SideIndex() {
  const data = useRecoilValue(noteDetailData);
  const noteTitle = useRecoilValue(detailTitle);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModalTitle = useSetRecoilState(modalTitleKo);
  const setRightSpanContent = useSetRecoilState(rightSpanContent);
  const [showMenu, setShowMenu] = useRecoilState(contextMenuActive);
  const [modalToggle, setModalToggle] = useRecoilState(contextMenuToggle);

  const onRightClick = (event) => {
    event.preventDefault();
    setRightSpanContent("이름");
    if (!modalToggle) {
      setXPos(`${event.pageX}px`);
      setYPos(`${event.pageY - 80}px`);
      setShowMenu(true);
      setModalToggle(true);
    } else {
      setShowMenu(false);
      setModalToggle(false);
    }
    event.target.className.includes("title") ? setModalTitle("노트") : null;
  };

  const closeContextMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setModalToggle(false);
    }
  };

  return (
    <div className={styles.index}>
      <div className={styles.index_wrap}>
        <div className={styles.index_title}>
          <span
            className={styles.index_title_span}
            onContextMenu={onRightClick}
            onClick={closeContextMenu}
          >
            {noteTitle}
          </span>
        </div>
        <div className={styles.index_index}>
          <IndexIndex noteTitle={noteTitle} data={data} />
        </div>
        {showMenu ? (
          <RightClickSpan noteTitle={noteTitle} x={xPos} y={yPos} />
        ) : null}
      </div>
    </div>
  );
}
