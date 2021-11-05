import { useEffect, useRef } from 'react';
import styles from '../../../styles/items/menu/dropmenu.module.css';
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
      <div>이슈 수정</div>
      <div>이슈 요청 취소</div>
    </div>
  );
};

export default DropMenu;
