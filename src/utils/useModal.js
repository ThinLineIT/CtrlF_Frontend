export default function useModal(modalTitle) {
  let mainTitle = '';
  let koreanTitle = '';
  let issue는 = '';
  let placeholder = '';
  if (modalTitle == 'note') {
    mainTitle = 'NOTE';
    koreanTitle = '노트';
    issue는 = '노트는';
    placeholder = 'note title';
  }
  if (modalTitle == 'topic') {
    mainTitle = 'TOPIC';
    koreanTitle = '토픽';
    issue는 = '토픽은';
    placeholder = 'topic title';
  }
  if (modalTitle == 'page') {
    mainTitle = 'PAGE';
    koreanTitle = '페이지';
    issue는 = '페이지는';
    placeholder = 'page title';
  }
  let modalObj = {
    modalTitle,
    mainTitle,
    koreanTitle,
    issue는,
    placeholder,
  };
  return modalObj;
}
