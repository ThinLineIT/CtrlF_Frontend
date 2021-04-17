<template>
  <div class="home">
    <div class="homeBar">
      <v-card class="logo" rounded="pill">
        LOGO
      </v-card>
      <v-card class="countBar" rounded="pill">
        <CountBar />
      </v-card>
    </div>
    <div class="test">
      <router-view />
      <!-- <div class="mainSide">
        <MainSearch />
        <IssueSideBar />
      </div> -->
    </div>
    여기는 홈입니다.
    <v-btn router :to="{ name: 'Note' }" exact>노트</v-btn>

    <v-btn router :to="{ name: 'Issue' }" exact>이슈</v-btn>
    <v-btn @click="apiTest"> api </v-btn>
  </div>
</template>

<script>
import CountBar from "../components/Home/CountBar";
import axios from "axios";
// import IssueSideBar from "../components/Home/IssueSideBar";
// import MainSearch from "../components/Home/MainSearch";
import { mapActions } from "vuex";

export default {
  components: { CountBar},
  methods: {
    ...mapActions(["dataLoad"]),
    apiTest() {
      axios.get("http://thkwon.pythonanywhere.com/api/notes/")
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  created() {
    this.dataLoad();
  },
};
</script>

<style scoped>
.test {
  display: flex;
  margin-top: 50px;
}

.homeBar {
  display: flex;
}

.mainSide {
  margin-top: 50px;
  display: block;
  margin-right: 30px;
}

.logo {
  width: 300px;
  padding: 10px 20px 10px 20px;
  margin: 40px 20px 0px 130px;
  height: 60px;
}
.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 800px;
}
</style>
