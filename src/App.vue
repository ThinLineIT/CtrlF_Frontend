<template>
  <v-app id="inspire">
    <v-main>
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
#inspire {
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
}
</style>
