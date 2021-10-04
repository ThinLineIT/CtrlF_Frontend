import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { noteNumber } from '../store/atom';

export default function usePagination(cursorNumber, query) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const setNoteNum = useSetRecoilState(noteNumber);

  useEffect(() => {
    setNotes([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}notes`, {
        params: {
          cursor: cursorNumber,
          q: query,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const notes = res.data.notes;
        setNotes((prevNotes) => {
          return [...new Set([...prevNotes, ...notes])];
        });
        setNoteNum(notes.length);
        setHasMore(notes.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [cursorNumber, query]);
  return {
    loading,
    error,
    notes,
    hasMore,
  };
}
