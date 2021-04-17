<template>
  <div class="note">
    <div class="sideBar">
      <SideBar />
    </div>
    <div class="noteContent">
        <NoteContent />
    </div>
  </div>
  <!-- <v-btn router :to="{ name: 'Create' }" exact>노트 Create</v-btn> -->
</template>

<script>
import SideBar from "@/components/Note/SideBar.vue";
import NoteContent from "@/components/Note/NoteContent";

export default {
  components: {
    SideBar,
    NoteContent,
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
</style>
