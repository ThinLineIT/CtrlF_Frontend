<template>
  <v-row>
    <v-col cols="3">
      <v-btn> 홈으로 돌아가기 </v-btn>
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
  data() {},
};
</script>
