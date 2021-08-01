import Axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import NoteDetail from '../../src/component/items/notes/note_detail';

const Post = ({ item }) => {
  const router = useRouter();

  if (router.isFallback) {
    console.log(item);
    return (
      <div style={{ padding: '100px 0' }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.title}</title>
            <meta name="description" content={item.title}></meta>
          </Head>
          <NoteDetail item={item} />;
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
//     fallback: true,
//   };
// }

export async function getServerSideProps(context) {
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
