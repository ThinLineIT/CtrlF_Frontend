<template>
  <v-container class="main" fluid>
    <div class="note-container">
      <div class="note-box" v-for="(note, i) in getTitles" :key="i">
        <NOTEBACKGROUND1 ref="svgRef" @click="openNote(note.id)" class="testSvg" v-if="i < 5"/>
        <NOTEBACKGROUND2 ref="svgRef" @click="openNote(note.id)" class="testSvg"  v-else-if="i >= 5 && i < 10"/>
        <NOTEBACKGROUND3 ref="svgRef" @click="openNote(note.id)" class="testSvg"  v-else />
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
    ...mapActions(["delSelectedTopicPage"]),
    openNote(clickedNoteId) {
      this.delSelectedTopicPage();
      this.$router.push({ name: "NoteID", params: { noteID: clickedNoteId } });
    },
  },
  updated() {
    const svgs = this.$el.querySelectorAll("svg text");
    this.getTitles.map((note, index) => {
      if (note.title.length > 10) {
        // var noteTitle = note.title.substr(0, 11) + "...";
        svgs[index].innerHTML = "";
        var split = note.title.split(" ");
        for (var i in split) {
          var newTSPAN = document.createElement("tspan");
          newTSPAN.innerHTML = split[i];
          newTSPAN.setAttribute("x", 0);
          newTSPAN.setAttribute("y", 0); // 넣었는데 보이지 않는 현상
          svgs[index].appendChild(newTSPAN);
        }
        console.log(svgs[index])
      } else {
        var noteTitle = note.title;
        svgs[index].innerHTML = noteTitle;
      }
    });
  },
};
</script>

<style scoped>
.main {
  display: flex;
}

.note-container {
  width: 1219px;
  display: grid;
  grid-template-columns: repeat(5, 190px);
}

.request-sidebar {
  width: 319px;
  height: 681px;
}

.testSvg {
  font-weight: bold;
}

.testSvg:hover {
  cursor: pointer;
}

text {
  font-weight: bold;
}

</style>
