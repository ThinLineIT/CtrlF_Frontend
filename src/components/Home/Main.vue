<template>
  <v-container class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-for="(note, i) in getTitles" :key="i" cols="3">
              <!-- 모듈화시켜서 더 다양한 색깔 노트 불러오기 -->
              <div v-if="i % 4 === 0">
                <NOTEBACKGROUND1
                  ref="svgRef"
                  @click="openNote(note.id)"
                  class="testSvg"
                />
              </div>
              <div v-else-if="i % 4 === 1">
                <NOTEBACKGROUND2
                  ref="svgRef"
                  @click="openNote(note.id)"
                  class="testSvg"
                />
              </div>
              <div v-else-if="i % 4 === 2">
                <NOTEBACKGROUND3
                  ref="svgRef"
                  @click="openNote(note.id)"
                  class="testSvg"
                />
              </div>
              <div v-else>
                <NOTEBACKGROUND4
                  ref="svgRef"
                  @click="openNote(note.id)"
                  class="testSvg"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <MainSearch />
          <IssueSideBar />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import IssueSideBar from "./IssueSideBar";
import MainSearch from "./MainSearch";
import { mapActions, mapGetters } from "vuex";
import NOTEBACKGROUND1 from "../../assets/noteBack1.svg";
import NOTEBACKGROUND2 from "../../assets/noteBack2.svg";
import NOTEBACKGROUND3 from "../../assets/noteBack3.svg";
import NOTEBACKGROUND4 from "../../assets/noteBack4.svg";
// import MEMO_MODULES from "../../assets/Memo/noteBG";

export default {
  computed: {
    ...mapGetters(["getTitles"]),
  },
  components: {
    IssueSideBar,
    MainSearch,
    NOTEBACKGROUND1,
    NOTEBACKGROUND2,
    NOTEBACKGROUND3,
    NOTEBACKGROUND4,
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
      } else {
        var noteTitle = note.title;
        svgs[index].innerHTML = noteTitle;
      }
    });
  },
};
</script>

<style scoped>
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
