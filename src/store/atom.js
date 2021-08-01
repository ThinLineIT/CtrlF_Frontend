import axios from 'axios';
import useNoteSearch from '../hooks/use_note_search';
import { useRecoilState } from 'recoil';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { atom, selector, selectorFamily } from 'recoil';

export const List = atom({
  key: 'notes',
  default: [],
});

export const noteNumber = atom({
  key: 'notes_n',
  default: 0,
});

export const HeaderBar = atom({
  key: 'head_title',
  default: '현재 모아진 아이디어',
});

export const ModalUpdate = atom({
  key: 'using_trick',
  default: true,
});

// export const noteList = selector({
//   key: 'note/get',
//   get: async function getStaticProps() {
//     try {
//       const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}notes?cursor=0`;
//       const res = await Axios.get(apiUrl);
//       const data = res.data.notes;
//       return data;
//     } catch (err) {
//       throw err;
//     }
//   },
//   set: ({ set }, newValue) => {
//     set(List, newValue);
//   },
// });

// export const length = atom({
//   key: 'lgth',
//   default: 0,
// });
// export const loading = atom({
//   key: 'lg234234th',
//   default: true,
// });
// export const error = atom({
//   key: '123123',
//   default: false,
// });
// export const hasMore = atom({
//   key: 'lgt21212h',
//   default: false,
// });
// export const notes = atom({
//   key: 'lg12111th',
//   default: [],
// });
// export const approved = atom({
//   key: 'l12312321gth',
//   default: [],
// });
// export const notApproved = atom({
//   key: 'lg213123123123123th',
//   default: [],
// });

// export const noteList = selectorFamily({
//   key: 'note/get',
//   get: async function useNote(cursorNumber, query, toggle = 'default') {
//     const [lengt, setLengt] = useRecoilState(length);
//     const [erro, setErro] = useRecoilState(error);
//     const [loadin, setLoadin] = useRecoilState(loading);
//     const [hasMor, setHasMor] = useRecoilState(hasMore);
//     const [note, setNote] = useRecoilState(notes);
//     const [approve, setApprove] = useRecoilState(approved);
//     const [notApprove, setNotApprove] = useRecoilState(notApproved);
//     // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}notes`;
//     useEffect(() => {
//       setNotes([]);
//     }, [query, toggle]);

//     useEffect(() => {
//       setLoadin(true);
//       setErro(false);
//       let cancel;
//       axios
//         .get(`${process.env.NEXT_PUBLIC_API_URL}notes`, {
//           params: {
//             cursor: cursorNumber,
//             q: query,
//             t: toggle,
//           },
//           cancelToken: new axios.CancelToken((c) => (cancel = c)),
//         })
//         .then((res) => {
//           const notes = res.data.notes;
//           setLengt(notes.length);
//           setNote((prevNotes) => {
//             return [...new Set([...prevNotes, ...notes])];
//           });
//           setHasMor(notes.length > 0);
//           setLoadin(false);
//           setApprove(notes.filter((a) => a.is_approved == true));
//           setNotApprove(notes.filter((a) => a.is_approved == false));
//         })
//         .catch((err) => {
//           if (axios.isCancel(e)) return;
//           setError(true);
//         });
//       return () => cancel();
//     }, [cursorNumber, query, toggle]);
//     return { loadin, erro, note, hasMor, lengt, approve, notApprove };
//   },
// });

// export const noteList = selectorFamily({
//   key: 'note/get',
//   get: function noteList(cursorNumber, query, toggle = 'default') {
//     const [length, setLength] = useState(0);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [hasMore, setHasMore] = useState(false);
//     const [notes, setNotes] = useState([]);
//     const [approved, setApproved] = useState([]);
//     const [notApproved, setNotApproved] = useState([]);

//     useEffect(() => {
//       setNotes([]);
//     }, [query, toggle]);

//     useEffect(() => {
//       setLoading(true);
//       setError(false);
//       let cancel;
//       axios({
//         method: 'GET',
//         url: `${process.env.NEXT_PUBLIC_API_URL}notes`,
//         params: { cursor: cursorNumber, q: query, t: toggle },
//         cancelToken: new axios.CancelToken((c) => (cancel = c)),
//       })
//         .then((res) => {
//           const notes = res.data.notes;
//           setLength(notes.length);
//           setNotes((prevNotes) => {
//             return [...new Set([...prevNotes, ...notes])];
//           });
//           setHasMore(notes.length > 0);
//           setLoading(false);
//           setApproved(notes.filter((a) => a.is_approved == true));
//           setNotApproved(notes.filter((a) => a.is_approved == false));
//         })
//         .catch((e) => {
//           if (axios.isCancel(e)) return;
//           setError(true);
//         });
//       return () => cancel();
//     }, [cursorNumber, query, toggle]);

//     return { loading, error, notes, hasMore, length, approved, notApproved };
//   },
// })
