import axios from 'axios';
import Cookies from 'js-cookie';

export async function pageCreateApi(title, summary, content, topic_id) {
  const data = {
    topic_id: topic_id,
    title: title,
    content: content,
    summary: summary,
  };
  let headers = Cookies.get('token');
  const request = await axios({
    url: `${process.env.PUBLIC_BASE_API}pages/`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${headers}`,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => console.log(err.response));
  location.href = location.href;
}
