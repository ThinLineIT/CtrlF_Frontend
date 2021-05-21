<template>
  <v-app id="inspire">
    <v-main>
      <!-- <div id="size-limit">Plz Zoom Out Or In</div> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
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
  background-color: #f4f4f4;
}
</style>
