import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useNoteSearch(cursorNumber, query, toggle = 'default') {
  const [length, setLength] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [notes, setNotes] = useState([]);
  const [approved, setApproved] = useState([]);
  const [notApproved, setNotApproved] = useState([]);

  useEffect(() => {
    setNotes([]);
  }, [query, toggle]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}notes`, {
        params: {
          cursor: cursorNumber,
          q: query,
          t: toggle,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const notes = res.data.notes;
        setLength(notes.length);
        setNotes((prevNotes) => {
          return [...new Set([...prevNotes, ...notes])];
        });
        setHasMore(notes.length > 0);
        setLoading(false);
        setApproved(notes.filter((a) => a.is_approved == true));
        setNotApproved(notes.filter((a) => a.is_approved == false));
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [cursorNumber, query, toggle]);
  return { loading, error, notes, hasMore, length, approved, notApproved };
}
