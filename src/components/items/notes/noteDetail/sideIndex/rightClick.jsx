import React, { useRef } from "react";
import styled from "styled-components";
import ModalInput from "../../../modal/modal_input";
import AddNoteModal from "../../../modal/add_note_modal";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import styles from "../../../../../styles/items/notes/noteDetail/sideIndex/rightClick.module.css";
import {
  name,
  noteModal,
  detailTitle,
  isJwtActive,
  modalTitleKo,
  modalRequestState,
  modalTitleSyntax,
  rightSpanContent,
} from "../../../../../store/atom";

export default function RightClickSpan(props) {
  const modifyRef = useRef();
  const deleteRef = useRef();
  const setName = useSetRecoilState(name);
  const isActiveJwt = useRecoilValue(isJwtActive);
  const noteTitle = useRecoilValue(detailTitle);
  const modalTitle = useRecoilValue(modalTitleKo);
  const MODAL_HIDDEN = "rightClick_hidden_modal__1pW9b";
  const setModalState = useSetRecoilState(modalRequestState);
  const rightSpanContents = useRecoilValue(rightSpanContent);
  const setModalTitleSyntax = useSetRecoilState(modalTitleSyntax);
  const [isModalActive, setIsModalActive] = useRecoilState(noteModal);

  const onModify = () => {
    setName("이름");
    setModalState("수정");
    setIsModalActive(true);
    setModalTitleSyntax("이름을");
    modifyRef.current.classList.toggle(MODAL_HIDDEN);
  };

  const onDelete = () => {
    setName("");
    setModalState("삭제");
    setIsModalActive(true);
    modalTitle !== "토픽"
      ? setModalTitleSyntax("를")
      : setModalTitleSyntax("을");
    deleteRef.current.classList.toggle(MODAL_HIDDEN);
  };

  const closeModal = (Ref) => {
    Ref.current.classList.toggle(MODAL_HIDDEN);
  };

  return (
    <ContextContainer x={props.x} y={props.y}>
      <span onClick={onModify}>{rightSpanContents}</span>
      <div
        ref={modifyRef}
        className={`${styles.hiddenModal} ${styles.hidden_modal} `}
      >
        {isActiveJwt ? (
          <ModalInput
            noteName={noteTitle}
            closeModal={() => closeModal(modifyRef)}
            isInputActive="true"
          />
        ) : isModalActive ? (
          <AddNoteModal />
        ) : null}
      </div>
      <span onClick={onDelete}>삭제 요청</span>
      <div
        ref={deleteRef}
        className={`${styles.hiddenModal} ${styles.hidden_modal}`}
      >
        {isActiveJwt ? (
          <ModalInput
            noteName={noteTitle}
            closeModal={() => closeModal(deleteRef)}
          />
        ) : isModalActive ? (
          <AddNoteModal />
        ) : null}
      </div>
    </ContextContainer>
  );
}

const ContextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  width: 120px;
  height: 5em;
  cursor: pointer;
  font-size: 1.1rem;
  background: white;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  & > span {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: #b5bdff;
    }
  }
`;
