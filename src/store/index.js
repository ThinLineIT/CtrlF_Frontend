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
    selectedTopicPage: [],
    isPageLoading: false,
    allPages: null,
    nowPage: null,
    nowTopic: null,
    nowTopicContent: null,
    isCopy: false,
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
        .get(`https://thkwon.pythonanywhere.com/api/notes/${noteID}`)
        .then((res) => {
          commit("GET_NOTE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      commit("DEL_NOWTOPIC_CONTENT");
      commit("GET_NOTEPAGE");
    },
    pageLoad({ commit }) {
      axios
        .get(`https://thkwon.pythonanywhere.com/api/pages`)
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
    delSelectedTopicPage({ commit }) {
      commit("DEL_NOW_PAGE_TOPIC_NAME");
    },
    nowTopicContentLoad({ commit }, topicContent) {
      commit("GET_NOWTOPIC_CONTENT", topicContent);
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
  },
};

const issueModule = {
  state: {
    isLoadingPage: false,
    isLoadingCount: false,
    pageCount: -1,
    getTitles: [],
    issueData: [],
    whatCount: 1, // true = main, false = issue
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
    getWhatCount: function (state) {
      return state.whatCount;
    },
    getIsLoadingPage: function (state) {
      return state.isLoadingPage;
    },
  },
  mutations: {
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
      console.log("로딩 시작");
      await axios
        .get("https://thkwon.pythonanywhere.com/api/all_page_count/")
        .then((res) => {
          commit("GET_COUNT_SUCCESS", res.data.count);
          console.log("1");
        })
        .catch((err) => {
          commit("GET_COUNT_FAIL");
          console.log(err);
        });
      await axios
        .get("https://thkwon.pythonanywhere.com/api/notes/")
        .then((res) => {
          commit("GET_PAGE_TITLE", res.data);
          console.log("2");
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get("https://thkwon.pythonanywhere.com/api/issues/")
        .then((res) => {
          console.log("3");
          commit("GET_ISSUE", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      commit("GET_MAINPAGE");
      console.log("로딩 끝");
    },
    changeCountIssue({ commit }) {
      commit("CHANGE_COUNTBAR_TO_ISSUE");
    },
    changeCountMain({ commit }) {
      commit("CHANGE_COUNTBAR_TO_MAIN");
    },
  },
};

const store = new Vuex.Store({
  modules: {
    note: noteModule,
    issue: issueModule,
  },
  plugins: [createPersistedState()],
});

export default store;
