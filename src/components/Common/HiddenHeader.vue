<template>
  <div class="hidden-title" id="hiddenbar">
    <div class="hidden-text" @click="$router.push({ name: 'Main' })">
      <img class="hidden-png" src="../../assets/LOGO_SOLO.png" />
      <span>커넵</span>
    </div>
    <div id="hidden-input">
      <input
        class="hidden-search"
        type="text"
        placeholder="검색어를 입력해주세요"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // scroll: 0,
      // scrollWindow: "",
      // homeHeader: "",
    };
  },
  name: "HiddenHeader",
  methods: {
    // handleScroll() {
    //   this.scroll = window.scrollY;
    //   if (0 <= this.scroll && this.scroll < 100) {
    //     this.scrollWindow.style.display = "none";
    //     // this.homeHeader.style.display = "flex";
    //   } else {
    //     this.homeHeader.style.display = "hidden";
    //     // this.scrollWindow.style.display = "flex";
    //   }
    // },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    // const scrollWindow = document.getElementById("hiddenbar");
    // const homeHeader = document.getElementById("homebar-id");
    // this.homeHeader = homeHeader;
    // this.scrollWindow = scrollWindow;
  },
  destroyed() {
    // window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
span {
  margin-left: 10px;
  font-size: 40px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 6px black;
}

#hidden-input input {
  background-image: url("../../assets/search.png");
  background-size: 35px;
  background-position: 850px center;
  font-size: 25px;
  font-weight: bold;
}

.hidden-title {
  display: flex;
  position: fixed;
  background-color: white;
  top: 0px;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 123px;
  box-shadow: 0px 7px 5px #00000080;
}

.hidden-search {
  width: 935px;
  height: 61px;
  border: 1px solid;
  border-radius: 45px;
  padding-left: 20px;
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
