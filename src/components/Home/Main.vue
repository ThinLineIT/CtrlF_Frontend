<template>
  <v-container>
    <v-container>
      <v-row>
          <v-col>
              <v-row>
                <v-col v-for="note in getTitles" :key="note.id" cols="3">
                    <v-card height="200">
                      {{ note.title }}
                    </v-card>
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

export default {
    computed: {
        ...mapGetters(["getTitles"]),
    },
    components: {
        IssueSideBar, 
        MainSearch
    },
}
</script>
