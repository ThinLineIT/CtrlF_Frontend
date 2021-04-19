import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const noteModule = {
  state: {
    noteLoading: false,
    noteDetail: [],
    selectedTopicPage: [],
    isPageLoading: false, // page를 로딩하기 위함
    allPages: null,
    nowPage: null,
    nowTopic: null,
  },
  getters: {
    getAllPages(state) {
      return state.allPages;
    },
    getSelectTopic(state) {
      return state.selectedTopicPage;
    },
    getNote(state) {
      return state.noteDetail;
    },
    getNowPage(state) {
      return state.nowPage;
    },
    getNowTopic(state) {
      return state.nowTopic;
    },
  },
  mutations: {
    GET_NOTE(state, notes) {
      state.noteDetail = notes;
    },
    GET_ALL_PAGES(state, allPages) {
      state.allPages = allPages;
      console.log(state.allPages);
    },
    GET_SELECTED_PAGES(state, selectedPages) {
      state.selectedTopicPage.push(selectedPages);
    },
    DEL_SELECTED_PAGES(state) {
      state.selectedTopicPage = [];
    },
    GET_NOWPAGE_NAME(state, nowPage_name) {
      state.nowPage = nowPage_name;
    },
    GET_NOWTOPIC_NAME(state, nowTopic_name) {
      state.nowTopic = nowTopic_name;
    },
  },
  actions: {
    noteLoad({ commit }, noteID) {
      axios
        .get(`http://thkwon.pythonanywhere.com/api/notes/${noteID}`)
        .then((res) => {
          commit("GET_NOTE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageLoad({ commit }) {
      axios
        .get(`http://thkwon.pythonanywhere.com/api/pages`)
        .then((res) => {
          commit("GET_ALL_PAGES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async selectedPageLoad({ commit }, pages) {
      await commit("GET_SELECTED_PAGES", pages);
    },
    nowPageNameLoad({ commit }, pageName) {
      commit("GET_NOWPAGE_NAME", pageName);
    },
    nowTopicNameLoad({ commit }, topicName) {
      commit("GET_NOWTOPIC_NAME", topicName);
    },
  },
};

const issueModule = {
  state: {
    isLoadingCount: false,
    pageCount: -1,
    getTitles: [],
    issueData: [],
  },
  getters: {
    getCounter: function (state) {
      return state.pageCount;
    },
    getTitles: function (state) {
      return state.getTitles;
    },
    getIssue: function (state) {
      return state.issueData;
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
    GET_PAGE_TITLE(state, titles) {
      state.getTitles = titles;
    },
    GET_ISSUE(state, issues) {
      state.issueData = issues;
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
      axios
        .get("http://thkwon.pythonanywhere.com/api/notes/")
        .then((res) => {
          commit("GET_PAGE_TITLE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get("http://thkwon.pythonanywhere.com/api/issues/")
        .then((res) => {
          commit("GET_ISSUE", res.data);
        })
        .catch((err) => {
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
