<template>
  <input ref="count-search" class="count-search" id="tt" type="text" placeholder="테스트">
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCounter"]),
  },
  name: "CountBar",
  mounted() {
    const placeFind = this.$refs["count-search"];
    placeFind.placeholder = `현재 모아진 아이디어   ${this.getCounter}`;
  }

};
</script>

<style scoped>
input {
  font-size : 35px;
  font-weight: bold;
  line-height: 50px;
  height: 98px;
  width: 839px;
  background-color: white;
  box-shadow: 0 0 0 2px grey;
  border-radius: 25px;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 black;
}


input::placeholder {
  color: black;
}

input:focus {
  outline: none;
}
</style>
