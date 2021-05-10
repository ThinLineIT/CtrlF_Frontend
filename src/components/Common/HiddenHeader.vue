<template>
  <div class="hidden-title">
    <div class="hidden-text" @click="$router.push({ name: 'Home' })">
      <LOGO class="hidden-logo" />
      <div class="hidden-title">
        <span class="hidden-title-name">커넵</span>
      </div>
    </div>
    <div>
      <input class="hidden-search" type="text" />
    </div>
  </div>
</template>

<script>
import LOGO from "../../assets/logo.svg";

export default {
  components: {
    LOGO,
  },
  name: "HiddenHeader",
};
</script>

<style scoped>
.hidden-title {
  display: flex;
}

.hidden-search {
  width: 935px;
  height: 61px;
  border: 1px solid;
}

.hidden-text {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.hidden-text:hover {
  cursor: pointer;
}

.hidden-logo {
  width: 134px;
  height: 50px;
  margin-right: 9px;
}

.hidden-title-name {
  color: black;
}
</style>
