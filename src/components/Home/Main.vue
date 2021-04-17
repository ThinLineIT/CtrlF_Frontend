<template>
  <v-container>
    <v-container>
      <v-row>
          <v-col>
              <v-row>
                <v-col v-for="n in 12" :key="n" cols="3">
                    <v-card height="200"></v-card>
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
export default {
    components: {
        IssueSideBar, 
        MainSearch
    },
}
</script>
