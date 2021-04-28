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
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    IssueContent,
    IssueCountBar,
    IssueSearchBar,
  },
  name: "HomeIssues",
  computed: {
    ...mapGetters(["getIssue"]),
  },
  methods: {
    ...mapActions(["issueLoad"]),
  },
  beforeMount() {
    this.issueLoad();
    console.log(this.getIssue); // 새로고침시 먹통
  },
};
</script>

<style scoped>
.Issue-Count {
  margin-top: 80px;
  margin-bottom: 30px;
}
</style>
