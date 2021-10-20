import axios from 'axios';

export function pageCreateApi(title, summary, content, topic_id) {
  const data = {
    topic_id: topic_id,
    title: title,
    content: content,
    summary: summary,
  };
  console.log(data);
  // axios
  //   .post(`${process.env.PUBLIC_BASE_API}/pages/`, data)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
}
