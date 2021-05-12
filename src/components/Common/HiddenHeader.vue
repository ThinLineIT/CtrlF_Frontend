<template>
  <div class="hidden-title">
    <div class="hidden-text" @click="$router.push({ name: 'Home' })">
      <img class="hidden-png" src="../../assets/LOGO_TITLE.png" />
    </div>
    <div>
      <input class="hidden-search" type="text" placeholder="검색" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
  border-radius: 45px;
}

input:focus {
  outline: none;
}

.hidden-text {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.hidden-text:hover {
  cursor: pointer;
}

.hidden-png {
  height: 50px;
}
</style>
