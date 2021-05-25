<template>
  <div class="note-header">
    <div class="note-header_center">
      <div class="note-header-text" @click="$router.push({ name: 'Main' })">
        <img class="noteheader-png" src="../../assets/LOGO_SOLO.png" />
        <span>커넵</span>
      </div>
      <div>
        <input
          class="note-header-search"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
      </div>
    </div>
    <NoteDialog />
  </div>
</template>

<script>
import NoteDialog from "./NoteDialog";
export default {
  components: {
    NoteDialog,
  },
  name: "NoteHeader",
};
</script>

<style scoped>
span {
  margin-left: 10px;
  font-size: 45px;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 6px black;
}

.note-header-search {
  background-image: url("../../assets/search.png");
  background-size: 35px;
  background-position: 850px center;
  padding-left: 20px;
}

.note-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 123px;
  width: auto;
}

.note-header-search {
  width: 935px;
  height: 61px;
  border: 1px solid;
  border-radius: 45px;
  font-size: 25px;
  font-weight: bold;
}

input:focus {
  outline: none;
}

.note-header-text {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.note-header-text:hover {
  cursor: pointer;
}

.noteheader-png {
  height: 50px;
}

.note-header_center {
  display: flex;
}
</style>
