<template>
  <div class="CountBar">
    <span>요청 검토 중인 내용 (이슈 숫자) </span>
  </div>
</template>

<script>
export default {
  name: "IssueCountBar",
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
