<template>
  <div class="hidden-title" id="hiddenbar">
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
  data() {
    return {
      scroll: 0,
      scrollWindow: "",
      homeHeader: "",
    };
  },
  name: "HiddenHeader",
  methods: {
    handleScroll() {
      this.scroll = window.scrollY;
      if (0 <= this.scroll && this.scroll < 30) {
        this.scrollWindow.style.display = "none";
        this.homeHeader.style.display = "flex";
      } else {
        this.homeHeader.style.display = "hidden";
        this.scrollWindow.style.display = "flex";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const scrollWindow = document.getElementById("hiddenbar");
    const homeHeader = document.getElementById("homebar-id");
    this.homeHeader = homeHeader;
    this.scrollWindow = scrollWindow;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.hidden-title {
  display: none;
  position: fixed;
  background-color: white;
  top: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 123px;
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
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
