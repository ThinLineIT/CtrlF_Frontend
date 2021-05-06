<template>
  <v-container>
    <v-card>
      <div class="issue-request"><span>요청 검토 중인 내용</span></div>
      <div v-for="(issue, i) in this.getIssue.slice(0, 5)" :key="i">
        <div class="issue">
          <span class="issue-title">{{ issue.title.substr(0, 15) }}</span>
          <br />
          <span class="issue-consider">궁금해요 20</span>
        </div>
        <MEMOPREVIEW1 v-if="i % 4 === 0" />
        <MEMOPREVIEW2 v-else-if="i % 4 === 1" />
        <MEMOPREVIEW3 v-else-if="i % 4 === 2" />
        <MEMOPREVIEW4 v-else />
      </div>
      <div class="more">
        <v-btn
          elevation="0"
          block
          color="white"
          class="more-btn"
          router
          :to="{ name: 'Issue' }"
          exact
        >
          + View More
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import MEMOPREVIEW1 from "../../assets/MEMO_PREVIEW1.svg";
import MEMOPREVIEW2 from "../../assets/MEMO_PREVIEW2.svg";
import MEMOPREVIEW3 from "../../assets/MEMO_PREVIEW3.svg";
import MEMOPREVIEW4 from "../../assets/MEMO_PREVIEW4.svg";
import { mapGetters } from "vuex";

export default {
  name: "IssueSideBar",
  components: {
    MEMOPREVIEW1,
    MEMOPREVIEW2,
    MEMOPREVIEW3,
    MEMOPREVIEW4,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getIssue"]),
  },
};
</script>

<style scoped>
.memo {
  width: 50px;
  height: 50px;
}

.issue {
  position: absolute;
  padding: 17px 10px 10px 17px;
}
.issue-title {
  font-size: 1rem;
  font-weight: bold;
}
.issue-consider {
}

.more-btn {
  width: 110px;
  height: 110px;
  padding-right: 10px;
}
.more {
  text-align: center;
}

.issue-request {
  text-align: center;
  margin-bottom: 10px;
  padding-top: 10px;
  font-weight: bold;
}
</style>
