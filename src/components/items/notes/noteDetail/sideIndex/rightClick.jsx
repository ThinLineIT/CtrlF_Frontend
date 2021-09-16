import styled from 'styled-components';
import ModalPreparing from '../../../modal/modal_preparing';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import {
  preparingModal,
  contextMenuName,
  contextMenuState,
  contextMenuActive,
} from '../../../../../store/atom';

export default function RightClickSpan(props) {
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(preparingModal);

  const setShowMenu = useSetRecoilState(contextMenuActive);
  const useContextMenuName = useRecoilValue(contextMenuName);
  const setContextMenuStates = useSetRecoilState(contextMenuState);

  const onModify = (e) => {
    if (e.target.innerText == '내용 수정') {
      setShowHiddenModal(true);
    } else {
      setContextMenuStates('이름 수정');
      setShowHiddenModal(true);
    }
    setShowMenu(false);
  };

  const onDelete = () => {
    setShowMenu(false);
    setShowHiddenModal(true);
  };

  return (
    <ContextContainer x={props.x} y={props.y}>
      <span onClick={onModify}>{useContextMenuName}</span>
      <span onClick={onDelete}>삭제 요청</span>
      {showHiddenModal && <ModalPreparing />}
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
