<template>
  <v-row>
    <v-col cols="3">
      <router-link :to="{ name: 'Home' }">
         홈으로 돌아가기
      </router-link>
    </v-col>
    <v-col cols="6"> MAIN || SUB </v-col>
    <v-col cols="3">
      <v-text-field
        outlined
        append-icon="mdi-card-search-outline"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IssueSearchBar",
  data() {
    return {

    }
  },
};
</script>
