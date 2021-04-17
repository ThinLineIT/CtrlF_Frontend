import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memos: [],
  },
  mutations: {
    addMemoInMutation: function (state, payload) {
      state.memos.push(payload);
    },
  },
  actions: {
    addMemoInAction: ({ commit }, payload) => {
      console.log(payload);
      commit("addMemoInMutation", payload);
    },
    getTest: () => {
      axios
        .get("https://reqres.in/api/users?page=2") //config는 보안관련 인자
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          // 반드시 arrow사용
          console.log(err);
        });
    },
  },
});
