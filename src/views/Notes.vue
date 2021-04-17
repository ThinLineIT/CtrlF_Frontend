<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <checkMemo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import checkMemo from "../components/checkMemo";

export default {
  components: {
    checkMemo,
  },
  data() {
    return {}
  },
};
</script>
