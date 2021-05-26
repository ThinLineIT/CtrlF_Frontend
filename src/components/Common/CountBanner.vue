<template>
  <div id="count__banner">
    <div class="count__banner-text">
      <span ref="count-text" id="count-text">s</span>
      <span ref="count-num" id="count-num">s</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCounter", "getWhatCount", "getIssue"]),
  },
  name: "countBanner",
  methods: {
    ...mapActions(["changeCountMain", "changeCountIssue"]),
    changePlaceholder(countType) {
      const countFindText = this.$refs["count-text"];
      const countFindNum = this.$refs["count-num"];
      if (countType) {
        countFindText.innerHTML = `현재 모아진 아이디어   `;
        countFindNum.innerHTML = `   ${this.getCounter}`;
      } else {
        countFindText.innerHTML = `요청 검토 중인 아이디어    `;
        countFindNum.innerHTML = `   ${this.getIssue.length}`;
      }
    },
  },
  mounted() {
    const countFindText = this.$refs["count-text"];
    const countFindNum = this.$refs["count-num"];
    this.changePlaceholder(this.getWhatCount);
    if (this.$route.name === "Issue") {
      countFindText.innerHTML = `요청 검토 중인 아이디어    `;
      countFindNum.innerHTML = `   ${this.getIssue.length}`;
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
#count__banner {
  padding-top: 16%;
  width: 95%;
  background-image: url("../../assets/Count_img.png");
  background-size: 100%;
  background-position: 0px center;
  font-size: 4.5rem;
  position: relative;
}

.count__banner-text {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 31%;
}

#count-num {
  font-weight: bold;
}

#count-text {
  font-weight: 200;
}
</style>
