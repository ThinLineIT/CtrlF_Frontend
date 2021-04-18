<template>
  <v-container class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-for="(note, i) in getTitles" :key="i" cols="3">
              <div>
                {{ note.title }}
              </div>

              <NOTEBACKGROUND
                ref="svgRef"
                @click="
                  $router.push({ name: 'NoteID', params: { noteID: note.id } })
                "
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
import { mapGetters } from "vuex";
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
  updated() {   
    const svgs = this.$el.querySelectorAll('svg text')

    this.getTitles
      .map((note, index) => {
        svgs[index].innerHTML = note.title
      })
  },
};
</script>

<style scoped></style>
