<template>
  <v-container>
    <v-card v-for="(issue, i) in getIssue" :key="i">
      <div class="issue">
        <v-card-title class="issue-title">{{ issue.title }}</v-card-title>
        <v-card-text class="issue-date">{{
          issue.registration_date
        }}</v-card-text>
      </div>
      <MEMOPREVIEW />
    </v-card>
    <v-card router :to="{ name: 'Issue' }" exact> + View More </v-card>
  </v-container>
</template>

<script>
import MEMOPREVIEW from "../../assets/MEMO_PREVIEW.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    MEMOPREVIEW,
  },
  computed: {
    ...mapGetters(["getIssue"]),
  },
  name: "IssueSideBar",
};
</script>

<style scoped>
.memo {
  width: 50px;
  height: 50px;
}

.issue {
  position: absolute;
}
.issue-title {
  padding-bottom: 3px;
}
</style>
