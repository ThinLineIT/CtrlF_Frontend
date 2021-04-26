<template>
  <div class="CountBar">
    <span>요청 검토 중인 내용 {{getIssue.length}} </span>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
span {
  font-size: 32px;
}
</style>
