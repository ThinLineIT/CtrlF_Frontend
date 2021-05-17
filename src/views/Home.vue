<template>
  <v-container class="scroll-content" fluid>
    <loadPage v-if="getIsLoadingPage === true" class="clip" />
    <div v-else>
      <HiddenHeader class="home-hidden" />
      <div class="home">
        <Header />
        <div class="router">
          <router-view />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Header from "../components/Common/Header";
import { mapActions, mapGetters } from "vuex";
import HiddenHeader from "../components/Common/HiddenHeader";
import loadPage from "@/components/Common/Loading";

export default {
  computed: {
    ...mapGetters(["getIsLoadingPage"]),
  },
  components: {
    HiddenHeader,
    Header,
    loadPage,
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
.clip {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
}

.home-hidden {
  justify-content: center;
  z-index: 1;
}

.scroll-content {
  padding: 0;
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
