<template>
  <v-container fluid class="note-container">
    <div class="sideBar" cols="4">
      <SideBar />
    </div>
    <div class="noteContent">
      <router-view />
    </div>
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
.noteContent {
  margin-left: 50px;
}

.note-container {
  padding: 0px 0px 40px 0px;
  display: flex;
}

</style>
