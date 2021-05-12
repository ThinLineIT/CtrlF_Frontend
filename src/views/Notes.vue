<template>
  <v-container fluid class="note-container">
    <div class="noteheader">
      <NoteHeader />
    </div>
    <div class="note-content">
      <div class="sideBar">
        <SideBar />
      </div>
      <div class="noteContent">
        <router-view />
      </div>
    </div>
  </v-container>
</template>

<script>
import SideBar from "@/components/Note/SideBar.vue";
import NoteHeader from "@/components/Note/NoteHeader";

export default {
  components: {
    SideBar,
    NoteHeader,
  },
  methods: {},
};
</script>

<style scoped>
.note {
  display: flex;
}
.sideBar {
  height: 100%;
  padding-bottom: 0px;
}

.note-content {
  display: flex;
  margin-top: 123px;
}

.noteContent {
  margin-left: 50px;
}

.note-container {
  padding: 0px 0px 40px 0px;
}

.noteheader {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1;
  width: 100%;
}
</style>
