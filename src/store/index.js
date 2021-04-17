import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const noteModule = {
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {},
};

const issueModule = {
  state: {
    isLoadingCount: false,
    pageCount: -1,
  },
  getters: {
    getCounter: function (state) {
      return state.pageCount;
    },
  },
  mutations: {
    GET_COUNT_PENDING(state) {
      state.isLoadingCount = true;
    },
    GET_COUNT_SUCCESS(state, count) {
      state.isLoadingCount = false;
      state.pageCount = count;
    },
    GET_COUNT_FAIL(state) {
      state.isLoadingCount = false;
    },
  },
  actions: {
    dataLoad: ({ commit }) => {
      axios
        .get("http://thkwon.pythonanywhere.com/api/all_page_count/")
        .then((res) => {
          commit("GET_COUNT_SUCCESS", res.data.count);
        })
        .catch((err) => {
          commit("GET_COUNT_FAIL");
          console.log(err);
        });
    },
  },
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
