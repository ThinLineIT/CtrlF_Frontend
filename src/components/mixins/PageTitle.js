export default {
  data() {
    return {
      subName: " - 커넵",
    };
  },
  watch: {
    $route(to) {
      document.title = `${to.name}${this.subName}`;
      console.log(to.name);
      console.log("일단 가즈앙");
    },
  },
};
