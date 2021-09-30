import Axios from 'axios';
import Head from 'next/head';
import UseLoader from '../../src/utils/useLoader';
import React, { useState, useEffect } from 'react';
import NoteDetail from '../../src/components/items/notes/noteDetail/note_detail';
import { useRouter } from 'next/router';
import { noteDataList, topicDataList } from '../../src/store/atom';
import { useRecoilState } from 'recoil';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [topic_ID, setTopic_ID] = useState('');
  const [noteData, setNoteData] = useRecoilState(noteDataList);
  const [topicData, setTopicData] = useRecoilState(topicDataList);
  const [pageData, setPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}`;
  const API_URL_TOPIC = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}/topics`;

  function getData() {
    Axios.get(API_URL).then((res) => {
      const data = res.data;
      setNoteData(data);
    });
    getTopic();
  }

  function getTopic() {
    Axios.get(API_URL_TOPIC)
      .then((res) => {
        const data = res.data;
        setTopicData(data);
      })
      .then(setIsLoading(false));
    getPage();
  }

  function getPage() {}

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      {noteData && (
        <>
          <Head>
            <title>{noteData.title}</title>
            <meta name="description" content={noteData.title}></meta>
          </Head>
          {isLoading && (
            <div style={{ padding: '30% 0' }}>
              <UseLoader />
            </div>
          )}
          {!isLoading && <NoteDetail note={noteData} topic={topicData} />}
        </>
      )}
    </>
  );
};

export default Post;

// export async function getStaticPaths() {
//   const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}notes?cursor=0`;
//   const res = await Axios.get(apiUrl);
//   const data = res.data.notes;
//   return {
//     paths: data.slice(0, 10).map((item) => ({
//       params: {
//         id: item.id.toString(),
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const apiUrl_ID = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}`;
//   const apiUrl_TP = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}/topics`;
//   const res_ID = await Axios.get(apiUrl_ID);
//   const res_TP = await Axios.get(apiUrl_TP);
//   const data_ID = res_ID.data;

//   return {
//     props: {
//       item_ID: data_ID,
//       item_TP: res_TP,
//       name: process.env.name,
//     },
//   };
// }
