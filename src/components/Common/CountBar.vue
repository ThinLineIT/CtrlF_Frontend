<template>
  <div id="count-input">
    <input
      ref="count-search"
      class="count-search"
      id="tt"
      type="text"
      placeholder="테스트"
      onfocus="this.placeholder='검색어를 입력해주세요'"
      title="검색어를 입력하세요"
      disabled
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCounter", "getWhatCount", "getIssue"]),
  },
  name: "CountBar",
  methods: {
    ...mapActions(["changeCountMain", "changeCountIssue"]),
    clicked() {
      const placeFind = this.$refs["count-search"];
      placeFind.placeholder = "검색어를 입력해주세여";
    },
    changePlaceholder(countType) {
      if (countType) {
        const placeFind = this.$refs["count-search"];
        placeFind.placeholder = `현재 모아진 아이디어   ${this.getCounter}`;
      } else {
        const placeFind = this.$refs["count-search"];
        placeFind.placeholder = `요청 검토 중인 아이디어    ${this.getIssue.length}`;
      }
    },
  },
  mounted() {
    const placeFind = this.$refs["count-search"];
    placeFind.placeholder = `현재 모아진 아이디어   ${this.getCounter}`;
    placeFind.addEventListener("focusout", () => {
      this.changePlaceholder(this.getWhatCount);
    });
    if (this.$route.name === "Issue") {
      placeFind.placeholder = `요청 검토 중인 아이디어    ${this.getIssue.length}`;
    }
  },
  watch: {
    $route(to) {
      if (to.name === "Main") {
        this.changeCountMain();
        this.changePlaceholder(this.getWhatCount);
      } else if (to.name === "Issue") {
        this.changeCountIssue();
        this.changePlaceholder(this.getWhatCount);
      } else {
        console.log("다른 페이지");
      }
    },
  },
};
</script>

<style scoped>
#count-input input {
  background-image: url("../../assets/search.png");
  background-size: 40px;
  background-position: 750px center;
}

input {
  font-size: 35px;
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
  color: #9c9090;
}

input:focus {
  outline: none;
}
</style>
