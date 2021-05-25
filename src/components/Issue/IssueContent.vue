<template>
  <v-container class="issue">
    <IssueCategory class="issue-category" />
    <div class="issue-container">
      <div class="issue-box" v-for="(issue, i) in getIssue" :key="i">
        <div class="issueContent">
          <span class="issue-title"> {{ issue.title }} </span>
          <br />
          <span class="issue-content"> {{ issue.content }} </span>
        </div>
        <ISSUEBACKGROUND1 class="issueBg" v-if="i % 4 === 0" />
        <ISSUEBACKGROUND2 class="issueBg" v-else-if="i % 4 === 1" />
        <ISSUEBACKGROUND3 class="issueBg" v-else-if="i % 4 === 2" />
        <ISSUEBACKGROUND4 class="issueBg" v-else />
      </div>
    </div>
  </v-container>
</template>

<script>
import ISSUEBACKGROUND1 from "../../assets/ISSUEBACKGROUND1.svg";
import ISSUEBACKGROUND2 from "../../assets/ISSUEBACKGROUND2.svg";
import ISSUEBACKGROUND3 from "../../assets/ISSUEBACKGROUND3.svg";
import ISSUEBACKGROUND4 from "../../assets/ISSUEBACKGROUND4.svg";
import IssueCategory from "./IssueCategory";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "IssueContent",
  components: {
    ISSUEBACKGROUND1,
    ISSUEBACKGROUND2,
    ISSUEBACKGROUND3,
    ISSUEBACKGROUND4,
    IssueCategory,
  },
  computed: {
    ...mapGetters(["getIssue"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["changeCount"]),
  },
};
</script>

<style scoped>
.issue-category {
  align-self: center;
}

.issue {
  display: flex;
  flex-direction: column;
  width: 68.7%;
}

.issue-content {
  display: block;
  margin-top: 13px;
}

.issueContent {
  max-width: 265px;
  padding: 10px 0px 0px 30px;
  position: absolute;
  width: 23%;
  margin: 10px 0px 0px 10px;
}

.issueContent:hover {
  cursor: pointer;
}

.issue-title {
  font-weight: bold;
  font-size: 1.313rem;
}
/* .issue-card {
  align-self: center;
  width: 100%;
  margin-top: 32px;
  justify-content: center;
  display: flex;
} */
.issue-container {
  margin-top: 32px;
  padding-right: 10px;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(4, 315px);
  background-color: white;
}

.issueBg {
  margin: 0px 0px 0px 21px;
}
</style>
