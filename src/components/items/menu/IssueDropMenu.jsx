import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DropMenu = ({
  dropDownMenu,
  setDropDownMenu,
  updatePermissionCheck,
  setConfirm,
  setIsDelete,
}) => {
  const menuRef = useRef(null);
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = ({ target }) => {
    if (
      menuRef.current != null &&
      dropDownMenu &&
      !menuRef.current.contains(target)
    )
      setDropDownMenu(false);
  };

  const setDeleteConfrim = () => {
    setConfirm(true);
    setIsDelete(true);
  };
  const setCloseConfrim = () => {
    setConfirm(true);
    setIsDelete(false);
  };
  return (
    <ContextContainer ref={menuRef}>
      <span onClick={updatePermissionCheck}>내용 수정</span>
      <span onClick={setDeleteConfrim}>요청 삭제</span>
      <span onClick={setCloseConfrim}>이슈 닫기</span>
    </ContextContainer>
  );
};

export default DropMenu;

const ContextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: ${(props) => props.y};
  left: ${(props) => props.x};
  width: 120px;
  height: 7.5em;
  font-size: 1.1rem;
  background: white;
  border: 0.2px solid rgba(185, 185, 185, 0.315);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  top: 20px;
  right: 0px;

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
