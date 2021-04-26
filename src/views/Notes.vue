<template>
  <v-container fluid class="note-container">
    <v-row class="note">
      <v-col class="sideBar" cols="3">
        <SideBar />
      </v-col>
      <v-col class="noteContent">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideBar from "@/components/Note/SideBar.vue";
//import NoteContent from "@/components/Note/NoteContent";

export default {
  components: {
    SideBar,
    //NoteContent,
  },
  methods() {},
};
</script>

<style scoped>
.note {
  display: flex;
}
.sideBar {
  height: 100px;
}
.noteContent {
  margin-left: 30px;
  width: calc(100% - 400px);
}

.note-container {
  padding: 0;
}
</style>
