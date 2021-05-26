<template>
  <v-container fluid class="note-container">
    <clipBoard v-if="getIsCopy === true" class="clip" />
    <noteLoadPage v-if="getNoteLoadingPage === true" class="note-loadpage" />
    <div class="note">
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
    </div>
  </v-container>
</template>

<script>
import SideBar from "@/components/Note/SideBar.vue";
import NoteHeader from "@/components/Note/NoteHeader";
import clipBoard from "@/components/Common/ClipBoard";
import { mapGetters } from "vuex";
import noteLoadPage from "@/components/Common/NoteLoading";

export default {
  computed: {
    ...mapGetters(["getIsCopy", "getNoteLoadingPage"]),
  },
  components: {
    noteLoadPage,
    SideBar,
    NoteHeader,
    clipBoard,
  },
  methods: {},
};
</script>

<style scoped>
.note {
  display: flex;
  height: 100%;
}
.note-loadpage {
  z-index: 99;
  opacity: 50%;
  position: absolute;
}

.clip {
  width: 100%;
  height: 800px;
  position: absolute;
  z-index: 99;
}

.sideBar {
  height: 100%;
  padding-bottom: 0px;
  width: 28.75%;
}

.note-content {
  display: flex;
  margin-top: 123px;
  height: 100%;
  width: 100%;
}

.noteContent {
  width: 71.25%;
  background-color: white;
}

.note-container {
  padding: 0px 0px 0px 0px;
  height: 100%;
}

.noteheader {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 2;
  width: 100%;
}
</style>
