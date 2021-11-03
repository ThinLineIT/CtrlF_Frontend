export default function useTitle(mTitle) {
  // mTitle은 modal title입니다.
  let eTitle = ''; // english title
  let kTitle = ''; // korea title
  let issue는 = '';
  let placeholder = '';
  if (mTitle == 'note') {
    eTitle = 'NOTE';
    kTitle = '노트';
    issue는 = '노트는';
    placeholder = 'note title';
  }
  if (mTitle == 'topic') {
    eTitle = 'TOPIC';
    kTitle = '토픽';
    issue는 = '토픽은';
    placeholder = 'topic title';
  }
  let titleObj = { mTitle, eTitle, kTitle, issue는, placeholder };
  return titleObj;
}
