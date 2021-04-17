<template>
  <v-container fluid>
    여기는 홈입니다.
    <v-btn router :to = "{name : 'Note'}" exact >노트</v-btn>
    <v-btn router :to = "{name : 'Issue'}" exact >이슈</v-btn> 
  </v-container>
</template>

<script>

export default {
  components: {
  },
};
</script>
