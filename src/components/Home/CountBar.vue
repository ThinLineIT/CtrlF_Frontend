<template>
  <div class="CountBar">
    <span class="home-count">현재 모아진 아이디어 {{ getCounter }} </span>
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
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
span {
  font-size: 2rem;
}

</style>
