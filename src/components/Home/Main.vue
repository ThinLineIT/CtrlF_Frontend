<template>
  <v-container class="main">
    <div class="note-container">
      <div class="note-box" v-for="(note, i) in getTitles" :key="i">
        <NOTEBACKGROUND1
          ref="svgRef"
          @click="openNote(note.id)"
          class="testSvg"
          v-if="i < 5"
        />
        <NOTEBACKGROUND2
          ref="svgRef"
          @click="openNote(note.id)"
          class="testSvg"
          v-else-if="i >= 5 && i < 10"
        />
        <NOTEBACKGROUND3
          ref="svgRef"
          @click="openNote(note.id)"
          class="testSvg"
          v-else
        />
      </div>
    </div>
    <div class="request-sidebar">
      <IssueSideBar />
    </div>
  </v-container>
</template>

<script>
import IssueSideBar from "./IssueSideBar";
import { mapActions, mapGetters } from "vuex";
import NOTEBACKGROUND1 from "../../assets/noteBack1.svg";
import NOTEBACKGROUND2 from "../../assets/noteBack2.svg";
import NOTEBACKGROUND3 from "../../assets/noteBack3.svg";

export default {
  computed: {
    ...mapGetters(["getTitles"]),
  },
  components: {
    IssueSideBar,
    NOTEBACKGROUND1,
    NOTEBACKGROUND2,
    NOTEBACKGROUND3,
  },
  methods: {
    ...mapActions(["delSelectedTopicPage", "changeCount"]),
    openNote(clickedNoteId) {
      this.delSelectedTopicPage();
      this.$router.push({ name: "NoteID", params: { noteID: clickedNoteId } });
    },
    svgText() {
      const svgs = this.$el.querySelectorAll("svg text");
      this.getTitles.map((note, index) => {
        if (note.title.length > 10) {
          var noteTitle = note.title.substr(0, 11) + "...";
          svgs[index].innerHTML = noteTitle;
          // svgs[index].innerHTML = "";
          // var split = note.title.split(" ");
          // for (var i of split) {
          //   var newTSPAN = document.createElement("tspan");
          //   newTSPAN.innerHTML = i;
          //   newTSPAN.setAttribute("x", 0);
          //   newTSPAN.setAttribute("y", 0);
          //   svgs[index].appendChild(newTSPAN);
          // }
        } else {
          noteTitle = note.title;
          svgs[index].innerHTML = noteTitle;
        }
      });
    },
  },
  mounted() {
    this.svgText();
  },
};
</script>

<style scoped>
.main {
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
}

.note-container {
  margin-left: 250px;
  min-width: 700px;
  width: 64%;
  display: grid;
  grid-template-columns: repeat(5, 220px);
}

.request-sidebar {
  width: 16.61%;
  height: 681px;
  margin-right: 87px;
}

.testSvg {
  font-weight: bold;
  margin-right: 40px;
}

.testSvg:hover {
  cursor: pointer;
}

text {
  font-weight: bold;
}
</style>
