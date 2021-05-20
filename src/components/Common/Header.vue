<template>
  <div class="homeBar" id="homebar-id">
    <div class="logo-title" @click="$router.push({ name: 'Main' })">
      <img class="header-png" src="../../assets/LOGO_SOLO.png" />
      <span>커넵</span>
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
span {
  margin-left: 10px;
  font-size: 45px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 6px black;
}

.homeBar {
  display: flex;
  align-items: center;
}

.logo-title {
  display: flex;
  /* width: 15.11%; */
  align-items: center;
  padding-top: 68px;
}

.logo-title:hover {
  cursor: pointer;
}

.countBar {
  height: 60px;
  margin: 40px 20px 0px 40px;
  width: 43.72%;
}

.header-png {
  height: 61px;
}
</style>
