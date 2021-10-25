import Image from 'next/image';
import { useRef, useState } from 'react';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRecoilValue } from 'recoil';
import ReactMarkdown from 'react-markdown';
import { addNewPage } from '../src/store/atom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from '../src/styles/Editor.module.css';

export default function MarkdownEditor(props) {
  const content = props.contents;
  const contentRef = useRef();
  const [input, setInput] = useState('');
  const [preview, setPreiview] = useState(false);
  const addNewPageContent = useRecoilValue(addNewPage);

  const useTab = (e) => {
    if (e.key == 'Tab') {
      e.preventDefault();
    }
  };

  const onChangeStatus = (status) => {
    status == 'write' ? setPreiview(false) : setPreiview(true);
    if (status == 'preview') {
      setPreiview(true);
    }
  };

  const getCursorPoing = () => {
    // let value = 'Hi';
    // let newP = document.createElement('p');
    // let myElement = document.getElementById('textarea');
    // console.log(myElement);
    // let textareaValue = myElement.setAttribute('value', value);
    // let txtNode = myElement.value;
    // newP.appendChild(txtNode);
    // console.log(txtNode);
    // var h = document.createElement('textarea');
    // h.setAttribute('value', value);
    // var t = document.createTextNode(value);
    // h.appendChild(t);
    // let startPosition = myElement.selectionStart;
    // let endPosition = myElement.selectionEnd;
  };

  return (
    <div className={styles.editor_wrap}>
      <textarea
        type="text"
        placeholder="summary"
        className={styles.users_summary}
        required
        autoComplete="off"
        autoFocus={false}
        id="summary"
      />
      <span as="h3" className={styles.detail_content}>
        <div className={styles.buttonsWrap}>
          <span className={styles.editor_button}>
            <button onClick={() => onChangeStatus('write')}>Write</button>
            <button onClick={() => onChangeStatus('preview')}>Preview</button>
          </span>
          <ul className={styles.buttonsContainer}>
            <li>
              <button onClick={getCursorPoing}>H</button>
            </li>
            <li>
              <button style={{ fontWeight: 'bold' }} onClick={getCursorPoing}>
                B
              </button>
            </li>
            <li>
              <button onClick={getCursorPoing}>I</button>
            </li>
            <li>
              <button onClick={getCursorPoing}>Q</button>
            </li>
            <li>
              <button onClick={getCursorPoing}>&#60; &#62;</button>
            </li>
          </ul>
        </div>
        {!preview ? (
          <>
            <textarea
              name="text"
              value={input}
              ref={contentRef}
              placeholder="page content"
              onKeyDown={useTab}
              onChange={(e) => setInput(e.target.value)}
              className={styles.users_textarea}
              required
              autoFocus={false}
              id="textarea"
            >
              {addNewPageContent ? null : content}
            </textarea>
          </>
        ) : (
          <ReactMarkdown
            className={styles.preview}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            // eslint-disable-next-line react/no-children-prop
            children={
              !addNewPageContent ? (input == null ? content : input) : input
            }
            components={{
              p: ({ node, children }) => {
                return <p>{children}</p>;
              },
              code({ language, children }) {
                return (
                  <SyntaxHighlighter style={docco} language={language}>
                    {children[0]}
                  </SyntaxHighlighter>
                );
              },
              image: ({ alt, src, title }) => (
                <Image
                  alt={alt}
                  src={src}
                  title={title}
                  style={{ maxWidth: '475px' }}
                />
              ),
            }}
          />
        )}
      </span>
    </div>
  );
}
