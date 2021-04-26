<template>
  <v-container>
    <v-card>
      <div v-for="(issue, i) in this.getIssue.slice(0, 5)" :key="i">
        <div class="issue">
          <span class="issue-title" >{{ issue.title }}</span>
          <!-- <v-card-text class="issue-date">{{ issue.registration_date }}</v-card-text> -->
        </div>
        <MEMOPREVIEW />
      </div>
      <div>
        <v-btn retain-focus-on-click class="more-btn" router :to="{ name: 'Issue' }" exact> + View More </v-btn>
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
}
.issue-title {
  padding-bottom: 3px;
  font-size: 15px;
}

.more-btn {
  width: 110px;
  height: 110px;
}
</style>
