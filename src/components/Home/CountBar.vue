<template>
  <v-text-field class="idea-number" rounded solo :label="`현재 모아진 아이디어${getCounter}`" append-icon="mdi-card-search-outline"> </v-text-field>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCounter"]),
  },
  name: "CountBar",
  Mounted() {
    const ideaNumberLabel = this.$el.querySelectorALL("label");
    ideaNumberLabel[1].style.color = "red";
  }

};
</script>

<style scoped>
.idea-number {
  height: 100px;
}

</style>
