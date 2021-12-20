import axios from 'axios';

class UseImageUploader {
  static getUrl = async (file) => {
    if (file && file.size < 5000000) {
      const body = new FormData();
      body.append('image', file);
      const result = await axios({
        method: 'post',
        url: `${
          process.env.NODE_ENV === 'development'
            ? process.env.NEXT_PUBLIC_DEVELOP_API_BASE_URL
            : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
        }actions/images/`,
        data: body,
      })
        .then((res) => res)
        .catch((err) => err);
      return result;
    } else if (!file) {
      console.log('no file!');
    } else {
      alert('파일 용량 초과');
    }
  };

  static imgAdding = (url, saveContents) => {
    const TextArea = document.getElementById('textarea');
    const origin = TextArea.value;
    const sStart = TextArea.selectionStart;
    const sEnd = TextArea.selectionEnd;

    TextArea.value =
      origin.substring(0, sStart) +
      `![img](${url})` +
      origin.substring(sEnd, origin.length);
    saveContents(TextArea.value);
    TextArea.focus();
  };
}

export default UseImageUploader;
