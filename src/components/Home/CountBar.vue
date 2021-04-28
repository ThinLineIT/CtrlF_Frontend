<template>
  <div class="CountBar">
    <span class="countbar-main">현재 모아진 아이디어 </span>
    <span class="countbar-count"> {{ getCounter }} </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCounter"]),
  },
  name: "CountBar",
};
</script>

<style scoped>
.countbar-main {
  padding-right: 30px;
}

.countbar-count {
  font-size: 2.3rem;
  font-weight: bold;
}
div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
span {
  font-size: 1.8rem;
}
</style>
