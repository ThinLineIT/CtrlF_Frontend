export const getContentLength = (content) => {
  const length = content % 4;
  if (0 <= length && length < 1) return 0;
  else if (1 <= length && length < 2) return 1;
  else if (2 <= length && length < 3) return 2;
  else if (3 <= length && length < 4) return 3;
};
