<template>
  <v-container>
    <div class="Issue-Count">
      <IssueCountBar />
    </div>
    <v-card>
      <IssueSearchBar />
    </v-card>
    <IssueContent />
  </v-container>
</template>

<script>
import IssueCountBar from "@/components/Issue/IssueCountBar";
import IssueSearchBar from "@/components/Issue/IssueSearchBar";
import IssueContent from "@/components/Issue/IssueContent";
import { mapActions } from "vuex";

export default {
  components: {
    IssueContent,
    IssueCountBar,
    IssueSearchBar,
  },
  name: "HomeIssues",
   methods : {
    ...mapActions(["issueLoad"]),
  },

  created() {
    this.issueLoad();  // 새로고침시 해결요망
  },
};
</script>

<style scoped>
.Issue-Count {
  margin-bottom: 30px;
}
</style>
