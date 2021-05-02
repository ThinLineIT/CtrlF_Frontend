<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col>
          <v-row>
            <v-col v-for="(issue, i) in getIssue" :key="i" cols="3">
              <div class="issueContent">
                <span class="issue-title"> {{ issue.title }} </span>
                <br />
                <div>궁금해요 20</div>
                <br />
                <span class="issue-content"> {{ issue.content }} </span>
              </div>
              <ISSUEBACKGROUND1 class="issueBg" v-if="i % 4 === 0" />
              <ISSUEBACKGROUND2 class="issueBg" v-else-if="i % 4 === 1" />
              <ISSUEBACKGROUND3 class="issueBg" v-else-if="i % 4 === 2" />
              <ISSUEBACKGROUND4 class="issueBg" v-else />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import ISSUEBACKGROUND1 from "../../assets/ISSUEBACKGROUND1.svg";
import ISSUEBACKGROUND2 from "../../assets/ISSUEBACKGROUND2.svg";
import ISSUEBACKGROUND3 from "../../assets/ISSUEBACKGROUND3.svg";
import ISSUEBACKGROUND4 from "../../assets/ISSUEBACKGROUND4.svg";
import { mapGetters } from "vuex";

export default {
  name: "IssueContent",
  components: {
    ISSUEBACKGROUND1,
    ISSUEBACKGROUND2,
    ISSUEBACKGROUND3,
    ISSUEBACKGROUND4,
  },
  computed: {
    ...mapGetters(["getIssue"]),
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.issueContent {
  padding: 10px 0px 0px 10px;
  position: absolute;
  width: 230px;
  margin: 10px 0px 0px 10px;
}

.issue-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
