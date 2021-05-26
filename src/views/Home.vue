<template>
  <v-container class="scroll-content" fluid>
    <loadPage v-if="getIsLoadingPage === true" class="clip" />
    <div v-else>
      <HiddenHeader class="home-hidden" />
      <div class="home">
        <countBanner />
        <div class="router">
          <router-view />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
// import Header from "../components/Common/Header";
import countBanner from "../components/Common/CountBanner";
import { mapActions, mapGetters } from "vuex";
import HiddenHeader from "../components/Common/HiddenHeader";
import loadPage from "@/components/Common/Loading";

export default {
  computed: {
    ...mapGetters(["getIsLoadingPage"]),
  },
  components: {
    HiddenHeader,
    countBanner,
    // Header,
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
  position: absolute;
  z-index: 99;
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
  margin-top: 50px;
  padding: 0;
  width: 100%;
  justify-content: center;
}

.mainSide {
  margin-top: 50px;
  display: block;
  margin-right: 30px;
}

.home {
  margin-top: 143px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
