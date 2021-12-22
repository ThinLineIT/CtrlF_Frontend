import { useEffect } from 'react';
import axios from 'axios';

export default function Test() {
  // 임의로 작성한 파일 용량기준입니다.
  const LIMIT = 5 * 1024 * 1024;

  // 파일 탐색기를 찾고 업데이트 발생 시 input_update함수를 실행시킵니다.
  useEffect(() => {
    const inputFile = document.getElementById('image-upload');
    inputFile.addEventListener('change', attachImage);

    return () => {
      inputFile.removeEventListener('change', attachImage);
    };
  }, []);

  // 파일이 첨부되면 발생하는 함수 입니다.
  const attachImage = (e) => {
    uploadImage(e.target.files[0]).then((res) => {
      insertImageUrl(res.data.image_url); // url이 반환됩니다.
    });
  };

  //이미지 드랍 함수입니다.
  const dropImage = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
    uploadImage(files[0]).then((res) => {
      insertImageUrl(res.data.image_url);
    });
  };

  // API를 호출하는 함수입니다.
  const uploadImage = async (file) => {
    if (file && file.size < LIMIT) {
      const body = new FormData();
      body.append('image', file);
      const result = await axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_API_BASE_URL}actions/images/`,
        data: body,
      })
        .then((res) => res)
        .catch((err) => err);
      return result;
    } else alert('파일 용량 초과');
  };

  //editor에 url을 삽입합니다.
  const insertImageUrl = (url) => {
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
      <input type="file" id="image-upload" />
      <textarea id="text" onDrop={dropImage}></textarea>
    </>
  );
}
