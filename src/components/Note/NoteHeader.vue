<template>
  <div class="note-header">
    <div class="note-header-text" @click="$router.push({ name: 'Home' })">
      <LOGO class="note-header-logo" />
      <div class="note-header-title">
        <span class="note-header-title-name">커넵</span>
      </div>
    </div>
    <div>
      <input class="note-header-search" type="text" />
    </div>
    <RequestIcon class="request"/>
  </div>
</template>

<script>
import LOGO from "../../assets/logo.svg";
import RequestIcon from "../../assets/REQUEST BUTTON.svg"

export default {
  components: {
    LOGO,
    RequestIcon
  },
  name: "NoteHeader",
};
</script>

<style scoped>
.request {
    width: 31px;
    height: 34px;
    fill: grey;
}

.note-header {
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%); */
}

.note-header-search {
  width: 935px;
  height: 61px;
  border: 1px solid;
}

.note-header-text {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.note-header-text:hover {
  cursor: pointer;
}

.note-header-logo {
  width: 134px;
  height: 50px;
  margin-right: 9px;
}

.note-header-title-name {
  color: black;
}
</style>
