import { useRef, useState } from 'react';
import ModalInput from '../../modal/modal_input';
import NotApprovedModal from '../../modal/not_approved_modal';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../styles/items/notes/noteDetail/detail_contents.module.css';
import {
  pageList,
  dropDown,
  topicName,
  modalTitle,
  pageContent,
  okBtnActive,
  isModalActive,
  modalUtilsName,
  noteDetailData,
  isApprovedModal,
  requestNoteTitle,
  modalUtilsSyntax,
  ModifyPageContent,
  requestNoteContent,
  firstVisiblePageTitle,
} from '../../../../store/atom';
import ReactMarkdown from 'react-markdown';
// import ReactMarkdown from 'react-markdown';

export default function DetailContents() {
  const textareaRef = useRef();
  const noteTitleRef = useRef();
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);
  const [notApprovedModalActive, setNotApprovedModalActive] =
    useRecoilState(isApprovedModal);

  const data = useRecoilValue(noteDetailData);
  const myPageList = useRecoilValue(pageList);
  const topicTitle = useRecoilValue(topicName);
  const [slideImg, setSlideImg] = useState(false);
  const [modifyPage, setModifyPage] = useRecoilState(ModifyPageContent);
  const setNameState = useSetRecoilState(modalUtilsName);
  const setIsOkBtnActive = useSetRecoilState(okBtnActive);
  const setPageRequestTitle = useSetRecoilState(modalTitle);
  const setModalSyntax = useSetRecoilState(modalUtilsSyntax);
  const [dropdownActive, setDropDownActive] = useRecoilState(dropDown);
  const [myPageContent, setMyPageContent] = useRecoilState(pageContent);
  const [pageTitle, setPageTitle] = useRecoilState(firstVisiblePageTitle);

  const setcontent = useSetRecoilState(requestNoteContent);
  const setRequestTitle = useSetRecoilState(requestNoteTitle);

  const showDropdown = () => {
    setDropDownActive(true);
  };

  const onChangeContent = (index, status, title) => {
    status == false && ifNotApprovedClicked();

    setPageTitle(title);
    const myPageData = data[index].section.map((a) => a.content);
    setMyPageContent(myPageData[index]);
    setDropDownActive(false);
  };

  const ifNotApprovedClicked = () => {
    setModifyPage(false);
    setNameState('페이지');
    setModalSyntax('는');
    setNotApprovedModalActive(true);
  };

  const copyClipboard = () => {
    const dummy = document.createElement('input');
    const text = location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    setSlideImg(true);
    setTimeout(fadeOutSlideImg, 1000);
  };

  const fadeOutSlideImg = () => {
    setSlideImg(false);
  };

  const resetPageContentAndSendData = () => {
    setPageRequestTitle('페이지');
    setIsOkBtnActive(true);
    setShowHiddenModal(true);
  };

  const onInputChange = () => {
    setcontent(textareaRef.current.value);
    setRequestTitle(noteTitleRef.current.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.info_item}>
        <div className={styles.info_item_topic}>{topicTitle}</div>
        <div className={styles.info_item_page} onClick={showDropdown}>
          {pageTitle}
        </div>
      </div>
      <div className={styles.icons}>
        {modifyPage ? (
          <button
            className={styles.buttonOk}
            onClick={resetPageContentAndSendData}
          >
            확인
          </button>
        ) : (
          <span>
            <button className={styles.icons_share} onClick={copyClipboard} />
            <span
              className={`${
                slideImg ? `${styles.slideActive}` : `${styles.slideHidden}`
              }`}
            />
          </span>
        )}
      </div>
      <span as="h3" className={styles.detail_content}>
        {modifyPage ? (
          <>
            <input
              type="text"
              ref={noteTitleRef}
              onChange={onInputChange}
              placeholder="수정 사유"
              className={styles.users_input}
              required
            />
            <textarea
              name="text"
              ref={textareaRef}
              onChange={onInputChange}
              placeholder="page content"
              className={styles.users_textarea}
              required
            />
          </>
        ) : (
          // <p>{myPageContent}</p>
          <ReactMarkdown>{myPageContent}</ReactMarkdown>
        )}
      </span>
      <section
        className={
          dropdownActive ? styles.dropdownContainer : styles.dropdownHidden
        }
      >
        {myPageList.map((item, index) => (
          <span
            key={item.id}
            onClick={() => onChangeContent(index, item.is_approved, item.title)}
          >
            {item.title}
          </span>
        ))}
      </section>
      {notApprovedModalActive && <NotApprovedModal />}
      {showHiddenModal && <ModalInput />}
    </div>
  );
}
