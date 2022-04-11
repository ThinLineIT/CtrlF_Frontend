import axios from 'axios';
import { useEffect, useState } from 'react';

export default function fetchInitialData(note_id = 0) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState([]);
  const [pages, setPages] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}notes/${note_id}/topics`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const topic = res.data;
        setTopics((prev) => {
          return [...new Set([...prev, ...topic])];
        });
        return topic[0].id;
      })
      .then((id) => {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}topics/${id}/pages`, {
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
          })
          .then((res) => {
            const page = res.data;
            setPages((prev) => {
              return [...new Set([...prev, ...page])];
            });
            const pageContent = { id: page[0].id, version: page[0].version_no };
            return pageContent;
          })
          .then((content) => {
            const { id, version } = content;
            axios
              .get(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}pages/${id}/?version_no=${version}`,
                {
                  cancelToken: new axios.CancelToken((c) => (cancel = c)),
                }
              )
              .then((res) => {
                const content = res.data;
                setContent(content);
              });
          });
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [note_id]);

  return { error, loading, topics, pages, content };
}
