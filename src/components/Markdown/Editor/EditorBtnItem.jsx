import ButtonIcon from './ButtonIcon/ButtonIcon';
import styles from '../../../styles/markdown/Editor.module.css';
import BtnsDict from '../../../utils/useEditorBtns';
import UseButton from '../../../utils/useButtons';

function EditorBtnItem({ icon, saveContents, inputRef }) {
  const btnsObj = new BtnsDict();
  const addFuncButtons = (event, key) => {
    event.preventDefault();
    if (key === 'Image') {
      inputRef.current.click();
    }
    const TextArea = document.getElementById('textarea');
    return btnsObj.useElement(key, TextArea, saveContents);
  };

  return (
    <button className={styles.btn} onClick={(e) => addFuncButtons(e, icon)}>
      <ButtonIcon name={icon} />
    </button>
  );
}

export default EditorBtnItem;
