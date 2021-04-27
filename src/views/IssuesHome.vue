<template>
  <v-container>
    <v-card class="Issue-Count" rounded="pill">
      <IssueCountBar />
    </v-card>
    <div> 
      <IssueSearchBar />
    </div>
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
  margin-top: 80px;
  margin-bottom: 30px;
}
</style>
