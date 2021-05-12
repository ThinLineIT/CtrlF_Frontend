<template>
  <div class="homeBar">
    <div class="logo-title" @click="$router.push({ name: 'Home' })">
      <img class="header-png" src="../../assets/LOGO_TITLE.png" />
    </div>
    <div class="countBar">
      <CountBar />
    </div>
  </div>
</template>

<script>
import CountBar from "./CountBar";
export default {
  components: {
    CountBar,
  },
  name: "Header",
};
</script>

<style scoped>
.homeBar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-title {
  display: flex;
  align-items: center;
  padding-top: 68px;
}

.logo-title:hover {
  cursor: pointer;
}

.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 800px;
}

.header-png {
  height: 61px;
}
</style>
