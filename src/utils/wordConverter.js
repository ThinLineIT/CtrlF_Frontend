export default function wordConverter(type) {
  if (type === 'note') return '노트';
  else if (type === '토픽') return '토픽';
  else '페이지';
}
