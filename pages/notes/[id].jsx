import Axios from 'axios';
import Head from 'next/head';
import NoteDetail from '../../src/components/items/notes/noteDetail/note_detail';

const Post = ({ item }) => {
  const { title } = item;
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content={title}></meta>
          </Head>
          <NoteDetail note={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const apiUrl = `${
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
  }notes?cursor=0`;
  const res = await Axios.get(apiUrl);
  const data = res.data.notes;
  return {
    paths: data.slice(0, 15).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `${
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.NEXT_PUBLIC_RELEASE_API_BASE_URL
  }notes/${id}`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
