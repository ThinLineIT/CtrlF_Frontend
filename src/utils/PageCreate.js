import axios from 'axios';
import Cookies from 'js-cookie';

export async function pageCreateApi(title, summary, content, topic_id) {
  const data = {
    topic_id: topic_id,
    title: title,
    content: content,
    summary: summary,
  };
  // console.log(data);
  let headers = Cookies.get('token');
  // console.log(headers);
  const request = await axios({
    url: `${process.env.PUBLIC_BASE_API}pages/`,
    method: 'post',
    headers: {
      token: headers,
    },
    data: data,
  })
    .then((res) => res)
    .catch((err) => err);
  console.log(request);
}
