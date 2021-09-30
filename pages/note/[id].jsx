import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { noteDataList } from '../../src/store/atom';
import NoteDetail from '../../src/components/items/notes/noteDetail/note_detail';

const Post = ({ item }) => {
  const setNoteData = useSetRecoilState(noteDataList);

  useEffect(() => {
    setNoteData(item);
  }, [item]);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.title}</title>
            <meta name="description" content={item.title}></meta>
          </Head>
          <NoteDetail note={item} noteId={item.id} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}notes?cursor=0`;
  const res = await Axios.get(apiUrl);
  const data = res.data.notes;
  return {
    paths: data.slice(0, 10).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}notes/${id}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
