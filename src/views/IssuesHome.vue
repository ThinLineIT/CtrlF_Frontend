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

export default {
  components: {
    IssueContent,
    IssueCountBar,
    IssueSearchBar,
  },
  name: "HomeIssues",
};
</script>

<style scoped>
.Issue-Count {
  margin-bottom: 30px;
}
</style>
