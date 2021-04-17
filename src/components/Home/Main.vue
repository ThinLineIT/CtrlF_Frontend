<template>
  <v-container>
    <v-container>
      <v-row>
          <v-col>
              <v-row>
                <v-col v-for="note in getTitles" :key="note.id" cols="3">
                    <div>
                        {{ note.title }}
                    </div>
                    <NOTEBACKGROUND class="testSvg"/>
                    
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
import NOTEBACKGROUND from "../../assets/noteBack.svg"

export default {
    computed: {
        ...mapGetters(["getTitles"]),

    },
    components: {
        IssueSideBar, 
        MainSearch,
        NOTEBACKGROUND
    },
}
</script>

<style scoped>

</style>
