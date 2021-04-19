<template>
  <v-card flat> </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NoteNamebar",
  computed: {
    ...mapGetters([""]),
  },
  data() {
    return {};
  },
};
</script>
