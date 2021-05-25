export default {
  data() {
    return {
      subName: " - 커넵",
    };
  },
  methods: {
    changeTabName() {},
  },
  watch: {
    $route(to) {
      document.title = `${to.name}${this.subName}`;
    },
  },
};
