export default function UseEditorBtns(key, samePoint) {
  let varBtn = key;
  const sameCursorPoint = samePoint ?? 0;
  if (key == 'H') varBtn = '### ';
  if (key == 'Q') varBtn = '> ';
  if (key == 'B') varBtn = '**';
  if (key == 'I') varBtn = '_';
  if (key == 'C') varBtn = '`';
  if (key == 'L') varBtn = '[](url)';
  if (key == 'P') varBtn = '![]()';
  if (key == 'BL') varBtn = '- ';
  if (key == 'NL') varBtn = '1. ';
  if (key == 'TL') varBtn = '- []';

  if (sameCursorPoint > 0) {
    if (key == 'B') varBtn = '****';
    if (key == 'I') varBtn = '__';
    if (key == 'C') varBtn = '``';
    if (key == 0) varBtn = `  `;
  }
  return varBtn;
}
