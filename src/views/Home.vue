<template>
  <div class="home">
    <div class="homeBar">
      <!--TODO: 위치조정-->
      <LOGO class="logo" />
      <v-card class="countBar" rounded="pill">
        <CountBar />
      </v-card>
    </div>
    <div class="test">
      <router-view />
    </div>
  </div>
</template>

<script>
import CountBar from "../components/Home/CountBar";

// import IssueSideBar from "../components/Home/IssueSideBar";
// import MainSearch from "../components/Home/MainSearch";
import { mapActions } from "vuex";
import LOGO from "../assets/logo.svg";

export default {
  components: {
    CountBar,
    LOGO,
  },
  methods: {
    ...mapActions(["dataLoad"]),
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
  width: 230px;
  padding: 10px 20px 10px 20px;
  margin: 40px 20px 0px 230px;
  height: 80px;
}
.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 800px;
}
</style>
