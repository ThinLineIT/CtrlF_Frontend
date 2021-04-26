<template>
  <v-container>
    <v-card>
      <div v-for="(issue, i) in this.getIssue.slice(0, 5)" :key="i">
        <div class="issue">
          <span class="issue-title" >{{ issue.title.substr(0, 12)}}</span>
          <!-- <v-card-text class="issue-date">{{ issue.registration_date }}</v-card-text> -->
        </div>
        <MEMOPREVIEW />
      </div>
      <div class="more">
        <v-btn elevation="0" block color="white" class="more-btn" router :to="{ name: 'Issue' }" exact> + View More </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import MEMOPREVIEW from "../../assets/MEMO_PREVIEW.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    MEMOPREVIEW,
  },
  data() {
    return {
      
    }
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
  padding: 10px 10px 10px 10px;
}
.issue-title {
  padding-bottom: 3px;
  font-size: 1rem;
}

.more-btn {
  width: 110px;
  height: 110px;
  padding-right: 10px;
}
.more {
  text-align: center;
}
</style>
