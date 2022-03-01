import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import styles from '../../../styles/items/menu/drop_menu.module.css';
import ChatBubble from '../../../../public/images/issue/dropdown/chat.svg';

const DropMenu = ({
  dropDownMenu,
  setDropDownMenu,
  closeIssue,
  deleteIssue,
}) => {
  const menuRef = useRef(null);
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const handleClickOutside = ({ target }) => {
    if (dropDownMenu && !menuRef.current.contains(target))
      setDropDownMenu(false);
  };
  return (
    <ContextContainer ref={menuRef}>
      <span>내용 수정</span>
      <span onClick={deleteIssue}>요청 삭제</span>
      <span onClick={closeIssue}>이슈 닫기</span>
    </ContextContainer>
    // <div className={styles.menu} ref={menuRef}>
    //   <ChatBubble />
    //   <div className={styles.menu__category}>
    //     <div>내용 수정</div>
    //     <hr className={styles.menu__devider} />
    //     <div>요청 삭제</div>
    //     <hr className={styles.menu__devider} />
    //     <div>이슈 닫기</div>
    //   </div>
    // </div>
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
