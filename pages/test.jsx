import { useEffect } from 'react';
import axios from 'axios';
// import Cookies from 'js-cookie';

export default function Test() {
  useEffect(() => {
    const input_file = document.getElementById('img-upload');
    input_file.addEventListener('change', input_update);

    return () => {
      input_file.removeEventListener('change', input_update);
    };
  }, []);

  const input_update = (e) => {
    getUrl(e.target.files[0]).then((res) => {
      console.log(res.data);
    });
  };

  const getUrl = async (file) => {
    if (file && file.size < 5000000) {
      const body = new FormData();
      // body.set('key', '9ded9154942189df28a59a933807d4d6');
      body.append('image', file);

      // let headers = Cookies.get('token');

      const result = await axios({
        method: 'post',
        // headers: {
        //   Authorization: `Bearer ${headers}`,
        // },
        url: `${process.env.PUBLIC_BASE_API}actions/images/`,
        data: body,
      })
        .then((res) => res)
        .catch((err) => err);
      console.log(result);
      return result;
    } else alert('파일 용량 초과');
  };

  const dropTest = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    getUrl(files[0]).then((res) => {
      imgAdding(res.data.image_url);
    });
  };

  const imgAdding = (url) => {
    const area = document.getElementById('test');
    const origin = area.value;
    const startPoint = area.selectionStart;
    const endPoint = area.selectionEnd;

    area.value =
      origin.substring(0, startPoint) +
      `![img](${url})` +
      origin.substring(endPoint, origin.length);
  };

  return (
    <>
      <input type="file" id="img-upload" />
      <textarea id="test" onDrop={dropTest}></textarea>
    </>
  );
}
