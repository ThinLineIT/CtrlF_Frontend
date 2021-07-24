// import { atom, selector } from 'recoil';

// export const List = atom({
//   key: 'list',
//   default: [],
// });

// export const setList = selector({
//   key: 'setList',
//   // get: ({ get }) => {
//   //   get(List);
//   // },
//   // set: ({ set }, { list }) => {
//   //   set(List, { list });
//   // },
// });

// export async function getStaticProps() {
//   const apiUrl = process.env.apiUrl;
//   const res = await Axios.get(apiUrl);
//   const data = res.data.notes;

//   return {
//     props: {
//       list: data,
//       length: data.length,
//       name: process.env.name,
//     },
//   };
// }
