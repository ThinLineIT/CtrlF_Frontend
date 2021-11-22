export default function useTitle(modalTitle) {
  let englishTitle = '';
  let koreanTitle = '';
  let issue는 = '';
  let placeholder = '';
  if (modalTitle == 'note') {
    englishTitle = 'NOTE';
    koreanTitle = '노트';
    issue는 = '노트는';
    placeholder = 'note title';
  }
  if (modalTitle == 'topic') {
    englishTitle = 'TOPIC';
    koreanTitle = '토픽';
    issue는 = '토픽은';
    placeholder = 'topic title';
  }
  let titleObj = {
    modalTitle,
    englishTitle,
    koreanTitle,
    issue는,
    placeholder,
  };
  return titleObj;
}
