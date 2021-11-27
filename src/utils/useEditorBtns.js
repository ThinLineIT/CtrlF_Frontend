class BtnsDict {
    fistOrderBtns = ['H', 'Q', 'L', 'P', 'BL', 'NL', 'TL'];
    allEditBtns = ['H', 'B', 'I', 'Q', 'C', 'CB', 'L', 'P', 'BL', 'NL', 'TL'];

    useEditorBtns(key, samePoint) {
        let varBtn = key;
        const sameCursorPoint = samePoint ?? 0;
        if (key == 'H') varBtn = '### ';
        if (key == 'Q') varBtn = '> ';
        if (key == 'B') varBtn = '**';
        if (key == 'I') varBtn = '_';
        if (key == 'C') varBtn = '`';
        if (key == 'CB') varBtn = '```';
        if (key == 'L') varBtn = '[](url)';
        if (key == 'P') varBtn = '![]()';
        if (key == 'BL') varBtn = '- ';
        if (key == 'NL') varBtn = '1. ';
        if (key == 'TL') varBtn = '- []';

        if (sameCursorPoint > 0) {
            if (key == 'B') varBtn = '****';
            if (key == 'I') varBtn = '__';
            if (key == 'C') varBtn = '``';
            if (key == 'CB') varBtn = '```\n```';
        }
        return varBtn;
    }

    useElement(input, saveFunc, key) {
        const samePoint = true;
        const TextArea = input;
        const origin = TextArea.value;
        const sStart = TextArea.selectionStart;
        const sEnd = TextArea.selectionEnd;
        const selectedText = TextArea.value.substring(sStart, sEnd);

        let keyBtn = this.useEditorBtns(key);
        if (sStart == sEnd) {
            console.log('same');
            keyBtn = this.useEditorBtns(key, samePoint);
            TextArea.value = origin.substr(0, sStart) + keyBtn + selectedText + origin.substr(sEnd);
        } else {
            if (this.fistOrderBtns.includes(key)) {
                TextArea.value = origin.substr(0, sStart) + keyBtn + selectedText + origin.substr(sEnd);
            } else {
                TextArea.value = origin.substr(0, sStart) + keyBtn + selectedText + keyBtn + origin.substr(sEnd);
                if (key === 'CB') {
                    let firstKey = '```\n';
                    let LastKey = '\n```';
                    TextArea.value = origin.substr(0, sStart) + firstKey + selectedText + LastKey + origin.substr(sEnd);
                }
            }
        }
        saveFunc(TextArea.value);
        TextArea.focus();
    }
}

export default BtnsDict;
