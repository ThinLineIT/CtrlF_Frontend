export const getContentLength = (len) => {
  // 글자의 길이에 따라서 메모지의 크기가 바뀝니다 지금 임시적으로 정해놓았습니다 추후 변경예정입니다.
  if (0 <= len && len < 30) return 0;
  else if (30 <= len && len < 60) return 1;
  else if (60 <= len && len < 90) return 2;
  else if (90 <= len) return 3;
};
