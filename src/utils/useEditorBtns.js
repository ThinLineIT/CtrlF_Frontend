// 기말고사 일정이 끝나고 각 툴마다(버튼) 함수를 별개로 만들어서 처리하고 중복되는 부분을 함수로 분리해서 처리하는 방식으로 개발하겠습니다..

class BtnsDict {
  static NON_MAPPING_BTNS = [
    'Header',
    'Quote',
    'Link',
    'Image',
    'BulletedList',
    'NumberList',
    'TaskList',
  ];

  useEditorBtns(key, samePoint) {
    let varBtn = key;
    const sameCursorPoint = samePoint ?? 0;
    switch (key) {
      case 'Header':
        varBtn = '### ';
        break;
      case 'Bold':
        varBtn = '**';
        break;
      case 'Italic':
        varBtn = '_';
        break;
      case 'Quote':
        varBtn = '> ';
        break;
      case 'Code':
        varBtn = '`';
        break;
      case 'CodeBlock':
        varBtn = '```';
        break;
      case 'Link':
        varBtn = '[](url)';
        break;
      case 'Image':
        varBtn = '';
        break;
      case 'BulletedList':
        varBtn = '- ';
        break;
      case 'NumberList':
        varBtn = '1. ';
        break;
      case 'TaskList':
        varBtn = '- [ ]';
        break;
      default:
        throw new Error(`unexpected button ${key}`);
    }

    if (sameCursorPoint > 0) {
      if (key == 'Bold') {
        varBtn = '****';
      } else if (key == 'Italic') {
        varBtn = '__';
      } else if (key == 'Code') {
        varBtn = '``';
      } else if (key == 'CodeBlock') {
        varBtn = '```\n```';
      }
    }
    return varBtn;
  }

  useElement(key, textarea, saveFunc) {
    const samePoint = true;
    const TextArea = textarea;
    const origin = TextArea.value;
    const selectStart = TextArea.selectionStart;
    const selectEnd = TextArea.selectionEnd;
    const selectedText = TextArea.value.substring(selectStart, selectEnd);

    let keyBtn = this.useEditorBtns(key);
    if (selectStart == selectEnd) {
      keyBtn = this.useEditorBtns(key, samePoint);
      TextArea.value =
        origin.substr(0, selectStart) +
        keyBtn +
        selectedText +
        origin.substr(selectEnd);
    } else {
      if (BtnsDict.NON_MAPPING_BTNS.includes(key)) {
        TextArea.value =
          origin.substr(0, selectStart) +
          keyBtn +
          selectedText +
          origin.substr(selectEnd);
      } else {
        TextArea.value =
          origin.substr(0, selectStart) +
          keyBtn +
          selectedText +
          keyBtn +
          origin.substr(selectEnd);
        if (key === 'CodeBlock') {
          let firstKey = '```\n';
          let LastKey = '\n```';
          TextArea.value =
            origin.substr(0, selectStart) +
            firstKey +
            selectedText +
            LastKey +
            origin.substr(selectEnd);
        }
      }
    }
    saveFunc(TextArea.value);
    TextArea.focus();
  }
}

export default BtnsDict;

export const EDIT_BTNS = [
  'Header',
  'Bold',
  'Italic',
  'Quote',
  'Code',
  'CodeBlock',
  'Link',
  'Image',
  'BulletedList',
  'NumberList',
  'TaskList',
];
