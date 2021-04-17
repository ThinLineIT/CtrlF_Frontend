<template>
  <div class="home">
    <div>
      <CountBar />
    </div>
    <div class="test">
      <router-view />
      <div class="mainSide">
        <IssueSideBar />
        <MainSearch />
      </div>
    </div>
    여기는 홈입니다.
    <v-btn router :to="{ name: 'Note' }" exact>노트</v-btn>

    <v-btn router :to="{ name: 'Issue' }" exact>이슈</v-btn>
    <v-btn @click="apiTest"> api </v-btn>
  </div>
</template>

<script>
import IssueSideBar from "../components/Home/IssueSideBar";
import CountBar from "../components/Home/CountBar";
import MainSearch from "../components/Home/MainSearch";
import axios from "axios";

export default {
  components: { CountBar, IssueSideBar, MainSearch },
  methods: {
    apiTest() {
      axios
        .get("thkwon.pythonanywhere.com/api/all_page_count/")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.test {
  display: flex;
  margin-top: 50px;
}

.mainSide {
  margin-top: 50px;
  display: block;
}
</style>
