<template>
  <div class="CountBar">
    <span class="issue-text">요청 검토 중인 내용 </span> 
    <span class="issue-count">{{getIssue.length}}</span>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name: "IssueCountBar",
  computed : {
    ...mapGetters(["getIssue"]),
  },
};

</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
}

.issue-count {
  font-size: 40px;
  font-weight: bold;
}

.issue-text {
  padding-right: 15px;
  font-size: 32px;
}
</style>
