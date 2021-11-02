export default function useTitle(mTitle) {
  let aTitle = '';
  let kTitle = '';
  let issue는 = '';
  let placeholder = '';
  if (mTitle == 'note') {
    aTitle = 'NOTE';
    kTitle = '노트';
    issue는 = '노트는';
    placeholder = 'note title';
  }
  if (mTitle == 'topic') {
    aTitle = 'TOPIC';
    kTitle = '토픽';
    issue는 = '토픽은';
    placeholder = 'topic title';
  }
  let titleObj = { mTitle, aTitle, kTitle, issue는, placeholder };
  return titleObj;
}
