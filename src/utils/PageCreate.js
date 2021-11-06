import axios from 'axios';
import Cookies from 'js-cookie';

export async function pageCreateApi(title, summary, content, topicId) {
  const data = {
    topic_id: topicId,
    title: title,
    content: content,
    reason: summary,
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
    .catch((err) => err.response);
  location.href = location.href;
}