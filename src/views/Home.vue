<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      class="hiddenbar"
      height="123px"
      absolute
      color="white"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
    >
      <v-toolbar-title>
        <HiddenHeader />
      </v-toolbar-title>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="900"
    >
      <v-container class="scroll-content" fluid>
        <div class="home">
          <Header />
          <div class="router">
            <router-view />
          </div>
        </div>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import Header from "../components/Common/Header";
import { mapActions } from "vuex";
import HiddenHeader from "../components/Common/HiddenHeader";

export default {
  components: {
    HiddenHeader,
    Header,
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
.hiddenbar {
  justify-content: center;
  display: flex;
}

.scroll-content {
  padding: 0;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

.router {
  display: flex;
  margin-top: 120px;
  padding: 0;
  width: 100%;
}

.mainSide {
  margin-top: 50px;
  display: block;
  margin-right: 30px;
}

.home {
  margin-top: 90px;
}
</style>
