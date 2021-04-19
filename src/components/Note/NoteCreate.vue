<template>
  <v-container class="page-create">
    <v-text-field label="제목"></v-text-field>
    <v-textarea
      background-color="white"
      clearable
      clear-icon="mdi-close-circle"
      filled
      solo
      auto-grow
      name="input-7-4"
      label="내용을 입력하세요"
    ></v-textarea>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.page-create {
  margin-top: 30px;
}
</style>
