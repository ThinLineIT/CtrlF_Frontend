<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col v-for="(issue, i) in getIssue" :key="i" cols="3">
            <div class="issueContent" >
              <span class="issue-title"> {{ issue.title }} </span>
              <br>
              <span class="issue-content"> {{ issue.content }} </span> 
            </div> 
            <ISSUEBACKGROUND
              
              class="issueBg"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


import ISSUEBACKGROUND from "../../assets/ISSUEBACKGROUND.svg";
import { mapGetters } from "vuex"

export default {
  name: "IssueContent",
  components : {
    ISSUEBACKGROUND
  },
  computed : {
    ...mapGetters(["getIssue"])
  },
  data() {
    return {

    }
  },
};
</script>


<style scoped>
.issueContent { 
  position: absolute;
  width: 230px;
  margin: 10px 0px 0px 10px;
}

.issue-title {
  font-weight: bold;
  font-size: 20px;
}

</style>
