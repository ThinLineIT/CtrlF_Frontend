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
          <span class="issue-title">{{ issue.title.substr(0, 19) }}</span>
        </div>
        <MEMOPREVIEW1 class="memo" v-if="i % 4 === 0" />
        <MEMOPREVIEW2 class="memo" v-else-if="i % 4 === 1" />
        <MEMOPREVIEW3 class="memo" v-else-if="i % 4 === 2" />
        <MEMOPREVIEW3 class="memo" v-else />
      </div>
      <div class="more">
        <div class="more-btn" @click="$router.push({ name: 'Issue' })">
          <span>+</span>
          View More
        </div>
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
  width: 100%;
  margin: auto;
}

.issue {
  position: absolute;
  padding: 35px 10px 0px 25px;
}
.issue-title {
  font-size: 1rem;
  font-weight: bold;
}

.more-btn {
  cursor: pointer;
  width: 79%;
  height: 44px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  box-shadow: 10px 9px 14px -5px #9a9a9a;
  text-align: center;
}
.more {
  display: flex;
  justify-content: center;
  width: 100%;
}

.issue-request {
  text-align: center;
  margin-bottom: 10px;
  padding-top: 17px;
  font-weight: bold;
}
</style>
