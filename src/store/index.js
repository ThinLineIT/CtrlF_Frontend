import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const noteModule = {
  state: {
    dialogIssue: "",
    isTopicClicked: false,
    isNoteLoading: false,
    noteDetail: [],
    selectedTopicPage: "",
    isPageLoading: false,
    allPages: null,
    nowPage: null,
    nowTopic: null,
    nowTopicContent: null,
    isCopy: false,
    isRequestLoading: false,
  },
  getters: {
    getNoteLoadingPage(state) {
      return state.isNoteLoading;
    },
    getIsCopy(state) {
      return state.isCopy;
    },
    getDialogIssue(state) {
      return state.dialogIssue;
    },
    getIsTopicClicked(state) {
      return state.isTopicClicked;
    },
    getNowTopicContent(state) {
      return state.nowTopicContent;
    },
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
    POST_REQUEST_LOADING_START(state) {
      state.isRequestLoading = true;
    },
    POST_REQUEST_LOADING_END(state) {
      state.isRequestLoading = false;
    },
    GET_NOTEPAGE(state) {
      state.isNoteLoading = false;
    },
    GET_NOTE_LOADING(state) {
      state.isNoteLoading = true;
    },
    COPY_ACT(state) {
      state.isCopy = true;
    },
    COPY_STOP(state) {
      state.isCopy = false;
    },
    TOPIC_CLICKED(state) {
      state.isTopicClicked = true;
    },
    TOPIC_UNCLICKED(state) {
      state.isTopicClicked = false;
    },
    GET_NOWTOPIC_CONTENT(state, topicContent) {
      state.nowTopicContent = topicContent;
    },
    DEL_NOWTOPIC_CONTENT(state) {
      state.nowTopicContent = null;
    },
    GET_NOTE(state, notes) {
      state.noteDetail = notes;
    },
    GET_ALL_PAGES(state, allPages) {
      state.allPages = allPages;
    },
    GET_SELECTED_PAGES(state, selectedPages) {
      state.selectedTopicPage = selectedPages;
    },
    DEL_SELECTED_PAGES(state) {
      state.selectedTopicPage = "";
    },
    GET_NOWPAGE_NAME(state, nowPage_name) {
      state.nowPage = nowPage_name;
    },
    GET_NOWTOPIC_NAME(state, nowTopic_name) {
      state.nowTopic = nowTopic_name;
    },
    DEL_NOW_PAGE_TOPIC_NAME(state) {
      state.nowPage = null;
      state.nowTopic = null;
      state.selectedTopicPage = [];
    },
    GET_DIALOGISSUE(state, dialog) {
      state.dialogIssue = dialog;
    },
  },
  actions: {
    async noteLoad({ commit }, noteID) {
      commit("GET_NOTE_LOADING");
      await axios
        .get(`https://kongjingoo.pythonanywhere.com/api/notes/${noteID}`)
        .then((res) => {
          commit("GET_NOTE", res.data);
          commit("GET_ALL_PAGES", res.data.topics);
          commit("GET_NOWPAGE_NAME", res.data.topics[0].pages[0].title);
          commit("GET_NOWTOPIC_NAME", res.data.topics[0].title);
          commit("GET_SELECTED_PAGES", res.data.topics[0].pages);
          console.log("노트 로딩");
          axios
            .get(
              `https://kongjingoo.pythonanywhere.com/api/pages/${res.data.topics[0].pages[0].id}`
            )
            .then((res) => {
              commit("GET_NOWTOPIC_CONTENT", res.data.content);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      // commit("DEL_NOWTOPIC_CONTENT");
      commit("GET_NOTEPAGE");
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
    delSelectedTopicPage({ commit }) {
      commit("DEL_NOW_PAGE_TOPIC_NAME");
    },
    nowTopicContentLoad({ commit }, pageId) {
      axios
        .get(`https://kongjingoo.pythonanywhere.com/api/pages/${pageId}`)
        .then((res) => {
          commit("GET_NOWTOPIC_CONTENT", res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dialogLoad({ commit }, dialog) {
      commit("GET_DIALOGISSUE", dialog);
    },
    copyActivate({ commit }) {
      commit("COPY_ACT");
    },
    copyStop({ commit }) {
      commit("COPY_STOP");
    },
    async issuePost({ commit }, writedIssue) {
      commit("POST_REQUEST_LOADING_START");
      await axios
        .post("https://kongjingoo.pythonanywhere.com/api/issues/", {
          topic_id: writedIssue[0],
          note_id: writedIssue[1],
          title: writedIssue[2],
          content: writedIssue[3],
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      commit("POST_REQUEST_LOADING_END");
    },
  },
};

const mainModule = {
  state: {
    isLoadingPage: false,
    isLoadingCount: false,
    pageCount: -1,
    getTitles: [],
    issueData: [],
    whatCount: 1,
    issueTopicCat: [],
  },
  getters: {
    getIssueTopicCat: function (state) {
      return state.issueCatTopics;
    },
    getCounter: function (state) {
      return state.pageCount;
    },
    getTitles: function (state) {
      return state.getTitles;
    },
    getIssue: function (state) {
      return state.issueData;
    },
    getWhatCount: function (state) {
      return state.whatCount;
    },
    getIsLoadingPage: function (state) {
      return state.isLoadingPage;
    },
  },
  mutations: {
    GET_ISSUE_TOPIC_CAT(state, topics) {
      state.issueCatTopics = topics;
    },
    GET_MAINPAGE(state) {
      state.isLoadingPage = false;
    },
    GET_LOADING(state) {
      state.isLoadingPage = true;
    },
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
    CHANGE_COUNTBAR_TO_MAIN(state) {
      state.whatCount = 1;
    },
    CHANGE_COUNTBAR_TO_ISSUE(state) {
      state.whatCount = 0;
    },
  },
  actions: {
    async dataLoad({ commit }) {
      commit("GET_LOADING");
      console.log("Main 로딩 시작");
      await axios
        .get("https://kongjingoo.pythonanywhere.com/api/home/")
        .then((res) => {
          //console.log(res.data.notes.length);
          commit("GET_COUNT_SUCCESS", res.data.count);
          commit("GET_PAGE_TITLE", res.data.notes);
        })
        .catch((err) => {
          commit("GET_COUNT_FAIL");
          console.log(err);
        });
      // await axios
      //   .get("https://thkwon.pythonanywhere.com/api/all_page_count/")
      //   .then((res) => {
      //     commit("GET_COUNT_SUCCESS", res.data.count);
      //   })
      //   .catch((err) => {
      //     commit("GET_COUNT_FAIL");
      //     console.log(err);
      //   });
      // await axios
      //   .get("https://thkwon.pythonanywhere.com/api/notes/")
      //   .then((res) => {
      //     commit("GET_PAGE_TITLE", res.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      await axios
        .get("https://kongjingoo.pythonanywhere.com/api/issues/")
        .then((res) => {
          commit("GET_ISSUE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      commit("GET_MAINPAGE");
      console.log("로딩 종료");
    },
    changeCountIssue({ commit }) {
      commit("CHANGE_COUNTBAR_TO_ISSUE");
    },
    changeCountMain({ commit }) {
      commit("CHANGE_COUNTBAR_TO_MAIN");
    },
    changeIssueTopicCat({ commit }, noteId) {
      console.log(noteId);
      axios
        .get(`https://kongjingoo.pythonanywhere.com/api/notes/${noteId}/`)
        .then((res) => {
          commit("GET_ISSUE_TOPIC_CAT", res.data.topics);
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
    issue: mainModule,
  },
  plugins: [createPersistedState()],
});

export default store;
