<template>
  <v-container class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-for="(note, i) in getTitles" :key="i" cols="3">
              <NOTEBACKGROUND
                ref="svgRef"
                @click="openNote(note.id)"
                class="testSvg"
              />
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
import NOTEBACKGROUND from "../../assets/noteBack.svg";

export default {
  computed: {
    ...mapGetters(["getTitles"]),
  },
  components: {
    IssueSideBar,
    MainSearch,
    NOTEBACKGROUND,
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
      svgs[index].innerHTML = note.title;
    });
  },
};
</script>

<style scoped></style>
