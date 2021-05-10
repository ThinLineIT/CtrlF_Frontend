<template>
  <div class="homeBar">
    <div class="logo-title" @click="$router.push({ name: 'Home' })">
      <LOGO class="logo" />
      <div class="title"><span class="title-name">커넵</span></div>
    </div>
    <div class="countBar">
      <CountBar />
    </div>
  </div>
</template>

<script>
import LOGO from "../../assets/logo.svg";
import CountBar from "./CountBar";

export default {
  components: {
    LOGO,
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

.logo {
  width: 163px;
  height: 61px;
  margin-right: 19px;
}

.title-name {
  font-size: 34px;
}

.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 800px;
}
</style>
