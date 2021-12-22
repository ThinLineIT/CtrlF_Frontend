import { useEffect, useRef } from 'react';
import styles from '../../../styles/items/menu/dropmenu.module.css';
import ChatBubble from '../../../../public/images/issue/dropdown/chat.svg';

const DropMenu = ({ dropDownMenu, setDropDownMenu }) => {
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
    <div className={styles.menu} ref={menuRef}>
      <ChatBubble />
      <div className={styles.menu__category}>
        <div>내용 수정</div>
        <hr className={styles.menu__devider} />
        <div>요청 삭제</div>
      </div>
    </div>
  );
};

export default DropMenu;
