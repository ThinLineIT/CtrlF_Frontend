<template>
  <v-list flat>
    <v-list-item
      v-for="(item, index) in this.getSelectTopic"
      :key="index"
      @click="nowPageLoad(item.title)"
    >
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "pagesName",
  computed: {
    ...mapGetters(["getNowPage", "getSelectTopic"]),
  },
  data() {
    return {
      items: ["aaa", "ccc", "ddd", "bbb"],
    };
  },
  methods: {
    ...mapActions(["nowPageNameLoad"]),
    nowPageLoad(title) {
      this.nowPageNameLoad(title);
    },
  },
};
</script>

<style scoped></style>
 