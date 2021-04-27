<template>
  <v-container fluid class="note-container">
    <v-row class="note">
      <v-col class="sideBar" cols="4">
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
  height: 100%;
  padding-bottom: 0px;
}


.note-container {
  padding: 0;
}
</style>
