<template>
  <div class="back">
    <div class="clip-message">클립보드 보드에 복사되었습니다.</div>
  </div>
</template>

<script>
export default {
  name: "clipBoard",
};
</script>

<style scoped>
.clip-message {
  background-color: #aaaaaa;
  color: white;
  font-size: 2.063rem;
  width: 40%;
  text-align: center;
  border-radius: 25px;
  bottom: 0;
  align-self: flex-end;
  margin-right: auto;
  margin-inline-start: auto;
  margin-bottom: 80px;
}

.back {
  width: 100%;
  display: flex;
  height: 100px;
  background-color: #ffffff;
  opacity: 80%;
}
</style>
