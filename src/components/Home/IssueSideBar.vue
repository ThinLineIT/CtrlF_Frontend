<template>
  <v-container fluid>
    <v-card class="issue-side">
      <div class="issue-request"><span>요청 검토 중인 내용</span></div>
      <div
        class="issue-box"
        v-for="(issue, i) in this.getIssue.slice(0, 5)"
        :key="i"
      >
        <div class="issue">
          <span class="issue-title">{{ issue.title.substr(0, 15) }}</span>
        </div>
        <MEMOPREVIEW1 class="memo" v-if="i % 4 === 0" />
        <MEMOPREVIEW2 class="memo" v-else-if="i % 4 === 1" />
        <MEMOPREVIEW3 class="memo" v-else-if="i % 4 === 2" />
        <MEMOPREVIEW3 class="memo" v-else />
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
import { mapGetters } from "vuex";

export default {
  name: "IssueSideBar",
  components: {
    MEMOPREVIEW1,
    MEMOPREVIEW2,
    MEMOPREVIEW3,
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
.issue-box {
  display: flex;
}

.issue-side {
  width: 100%;
}

.memo {
  width: 93%;
  margin: auto;
}

.issue {
  position: absolute;
  padding: 30px 10px 10px 30px;
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
  padding-top: 17px;
  font-weight: bold;
}
</style>
