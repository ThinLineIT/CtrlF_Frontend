import Axios from 'axios';
import Head from 'next/head';
import UseLoader from '../../src/utils/useLoader';
import React, { useState, useEffect } from 'react';
import NoteDetail from '../../src/components/items/notes/noteDetail/note_detail';

const Post = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);

  function isLoadingDone() {
    setTimeout(setIsLoading(false), 800);
  }

  useEffect(() => {
    isLoadingDone();
  }, []);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.title}</title>
            <meta name="description" content={item.title}></meta>
          </Head>
          {isLoading ? (
            <div style={{ padding: '30% 0' }}>
              <UseLoader />
            </div>
          ) : (
            <NoteDetail note={item} />
          )}
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
