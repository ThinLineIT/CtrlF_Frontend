import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

const noteModule = {
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},
};

const issueModule = {
  state: () => ({}),
  mutations: {},
  actions: {},
};

const store = new Vuex.Store({
  modules: {
    note: noteModule,
    issue: issueModule,
  },
});

export default store;

// export default new Vuex.Store({
//   state: {
//     memos: [],
//   },
//   mutations: {
//     addMemoInMutation: function (state, payload) {
//       state.memos.push(payload);
//     },
//   },
//   actions: {
//     addMemoInAction: ({ commit }, payload) => {
//       console.log(payload);
//       commit("addMemoInMutation", payload);
//     },
//     getTest: () => {
//       axios
//         .get("https://reqres.in/api/users?page=2") //config는 보안관련 인자
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           // 반드시 arrow사용
//           console.log(err);
//         });
//     },
//   },
// });
