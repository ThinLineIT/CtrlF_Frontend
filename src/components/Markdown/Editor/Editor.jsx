import { useRecoilValue } from 'recoil';
import Renderer from '../Renderer/Renderer';
import { useState, useEffect } from 'react';
import insertTextAtCursor from 'insert-text-at-cursor';
import styles from '../../../styles/markdown/Editor.module.css';
import UseEditorBtns from '../../../utils/useEditorBtns';
import { pageCreateApi } from '../../../utils/PageCreate';
import { addNewPage, topicIndex } from '../../../store/atom';

export default function MarkdownEditor(props) {
  const [pageCreateSummary, setPageCreateSummary] = useState('');
  const onPageSummaryHandler = (event) => {
    setPageCreateSummary(event.target.value);
  };

  const topicId = useRecoilValue(topicIndex);
  const createPage = () => {
    pageCreateApi(props.pageCreateTitle, pageCreateSummary, input, topicId);
  };

  const [input, setInput] = useState('');
  const saveContents = (data) => {
    setInput(data);
  };

  const [preview, setPreiview] = useState(false);
  const onChangeStatus = (event, status) => {
    event.preventDefault();
    status == 'Write' ? setPreiview(false) : setPreiview(true);
  };
  console.log(123)
  const samePoint = true;
  const fistOrderBtns = ['H', 'Q', 'L', 'P', 'BL', 'NL', 'TL'];
  const allEditBtns = ['H', 'B', 'I', 'Q', 'C', 'L', 'P', 'BL', 'NL', 'TL'];
  const addFuncButtons = (event, key) => {
    event.preventDefault();
    const TextArea = document.getElementById('textarea');
    const sStart = TextArea.selectionStart;
    const sEnd = TextArea.selectionEnd;
    const selectedText = TextArea.value.substring(sStart, sEnd);

    let varBtn = UseEditorBtns(key);
    if (sStart == sEnd) {
      varBtn = UseEditorBtns(key, samePoint);
      insertTextAtCursor(TextArea, varBtn);
    } else {
      if (fistOrderBtns.includes(key)) {
        TextArea.value =
          TextArea.value.substr(0, sStart) +
          varBtn +
          selectedText +
          TextArea.value.substr(sEnd);
      } else {
        TextArea.value =
          TextArea.value.substr(0, sStart) +
          varBtn +
          selectedText +
          varBtn +
          TextArea.value.substr(sEnd);
      }
      saveContents(TextArea.value);
    }
    TextArea.focus();
  };

  const useTab = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
      const TextArea = document.getElementById('textarea');
      insertTextAtCursor(TextArea, `  `);
    }
  };

  const content = props.contents;
  const addNewPageContent = useRecoilValue(addNewPage);
  let previewContents = !addNewPageContent
    ? input == null
      ? content
      : input
    : input;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const WRITE_OR_PREVIEW = ['Write', 'Preview'];
  return (
    <form className={styles.editor_wrap}>
      <button onClick={createPage}>페이지 생성하기</button>
      <textarea
        type="text"
        placeholder="summary"
        onChange={onPageSummaryHandler}
        className={styles.users_summary}
      />
      <span as="h3" className={styles.detail_content}>
        <div className={styles.buttonsWrap}>
          <span className={styles.editor_button}>
            {WRITE_OR_PREVIEW.map((button, i) => (
              <button
                key={i}
                className={styles.statusBtn}
                onClick={(e) => onChangeStatus(e, button)}
              >
                {button}
              </button>
            ))}
          </span>
          <div className={styles.buttonsContainer}>
            {allEditBtns.map((button, i) => (
              <button
                key={i}
                className={styles.btn}
                onClick={(e) => addFuncButtons(e, button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        {!preview ? (
          <>
            <textarea
              id="textarea"
              value={input}
              onKeyDown={useTab}
              placeholder="page content"
              className={styles.users_textarea}
              onChange={(event) => saveContents(event.target.value)}
            >
              {addNewPageContent ? null : content}
            </textarea>
          </>
        ) : (
          <Renderer contents={previewContents} />
        )}
      </span>
    </form>
  );
}
