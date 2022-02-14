export default function wordConverter(type) {
  if (type === 'note') return '노트';
  else if (type === 'topic') return '토픽';
  else return '페이지';
}
