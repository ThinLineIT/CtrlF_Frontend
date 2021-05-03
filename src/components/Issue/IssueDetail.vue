<template>
  <v-container> 여기는 이슈 디테일 페이지 입니다. </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getIssue"]),
  },
};
</script>

<style scoped></style>
