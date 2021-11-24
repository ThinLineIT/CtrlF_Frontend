import { useEffect } from 'react';
import axios from 'axios';

export default function Test() {
  // 파일 탐색기를 찾고 업데이트 발생 시 input_update함수를 실행시킵니다.
  useEffect(() => {
    const input_file = document.getElementById('img-upload');
    input_file.addEventListener('change', input_update);

    return () => {
      input_file.removeEventListener('change', input_update);
    };
  }, []);
  // 파일이 첨부되면 발생하는 함수 입니다.
  const input_update = (e) => {
    getUrl(e.target.files[0]).then((res) => {
      imgAdding(res.data.image_url); // url이 반환됩니다.
    });
  };

  // API를 호출하는 함수입니다.
  const getUrl = async (file) => {
    if (file && file.size < 5000000) {
      // 임의로 작성한 파일 용량기준입니다.
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
    } else alert('파일 용량 초과');
  };

  //이미지가 드랍 함수입니다.
  const dropImg = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    getUrl(files[0]).then((res) => {
      imgAdding(res.data.image_url);
    });
  };

  //editor에 url을 삽입합니다.
  const imgAdding = (url) => {
    const area = document.getElementById('text');
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
      <textarea id="text" onDrop={dropImg}></textarea>
    </>
  );
}
