import styled from "styled-components";
import React, { useRef } from "react";
import ModalInput from "../../../modal/modal_input";
import styles from "../../../../../styles/items/notes/note_detail.module.css";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  name,
  detailTitle,
  modalTitleKo,
  modalRequestState,
  modalTitleSyntax,
} from "../../../../../store/atom";

export default function RightClickSpan(props) {
  const modifyRef = useRef();
  const deleteRef = useRef();
  const setName = useSetRecoilState(name);
  const noteTitle = useRecoilValue(detailTitle);
  const modalTitle = useRecoilValue(modalTitleKo);
  const MODAL_HIDDEN = "note_detail_hidden_modal__3sHcm";
  const setModalState = useSetRecoilState(modalRequestState);
  const setModalTitleSyntax = useSetRecoilState(modalTitleSyntax);

  const onModify = () => {
    setName("이름");
    setModalState("수정");
    setModalTitleSyntax("이름을");
    modifyRef.current.classList.toggle(MODAL_HIDDEN);
  };

  const onDelete = () => {
    setName("");
    setModalState("삭제");
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
      <span onClick={onModify}>이름 수정</span>
      <div
        ref={modifyRef}
        className={`${styles.hiddenModal} ${styles.hidden_modal} `}
      >
        <ModalInput
          noteName={noteTitle}
          closeModal={() => closeModal(modifyRef)}
          isInputActive="true"
        />
      </div>
      <span onClick={onDelete}>삭제 요청</span>
      <div
        ref={deleteRef}
        className={`${styles.hiddenModal} ${styles.hidden_modal}`}
      >
        <ModalInput
          noteName={noteTitle}
          closeModal={() => closeModal(deleteRef)}
        />
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
