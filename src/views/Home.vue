<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="primary"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container class="scroll-content" fluid>
        <div class="home">
          <div class="homeBar">
            <div class="logo-title">
              <LOGO class="logo" />
              <div class="title"> <span class="title-name">커넵</span> </div>
            </div>
            <div class="countBar">
              <CountBar />
            </div>
          </div>
          <div class="test">
            <router-view />
          </div>
        </div>
      </v-container>
    </v-sheet>
  </v-card>
</template>
 
<script>
import CountBar from "../components/Home/CountBar";
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

.scroll-content {
  padding: 0;
}

.overflow-y-auto {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.overflow-y-auto::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

.logo-title {
  display: flex;
  align-items: center;
  padding-top: 68px;
}
.title-name {
  font-size: 34px;
}

.test {
  display: flex;
  margin-top: 120px;
  padding: 0;
}

.homeBar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mainSide {
  margin-top: 50px;
  display: block;
  margin-right: 30px;
}

.logo {
  width: 163px;
  height: 61px;
  margin-right: 19px;
}
.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 800px;
}
</style>
