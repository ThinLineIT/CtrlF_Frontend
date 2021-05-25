<template>
  <v-app id="inspire">
    <v-main>
      <!-- <div id="size-limit">Plz Zoom Out Or In</div> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import pageTitle from "@/components/mixins/PageTitle";
export default {
  name: "App",
  computed: {
    ...mapGetters(["getNote"]),
  },
  mixins: [pageTitle],
  components: {},

  data: () => ({}),
  watch: {
    $route(to) {
      if (to.name == "NotePage") {
        document.title = this.getNote.title + " - 커넵";
      }
    },
  },
};
</script>

<style scoped>
/* #size-limit {
  position: absolute;
  z-index: 99;
  height: 100%;
  background-color: grey;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  top: 0;
}

@media screen and (min-width: 1800px) and (max-width: 2500px) {
  #size-limit {
    display: none;
  }
} */

#inspire {
  height: 100%;
  width: 100%;
  background-image: url("./assets/home_background.png");
}
</style>
