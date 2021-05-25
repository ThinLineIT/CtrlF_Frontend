<template>
  <v-list flat>
    <v-list-item
      v-for="(item, index) in this.getSelectTopic"
      :key="index"
      @click="nowPageLoad(item.title, item.id)"
      class="page-list"
    >
      <v-list-item-content>
        <v-list-item-title class="page-title">{{
          item.title
        }}</v-list-item-title>
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
    return {};
  },
  methods: {
    ...mapActions(["nowTopicContentLoad", "nowPageNameLoad"]),
    nowPageLoad(title, id) {
      this.nowTopicContentLoad(id);
      this.nowPageNameLoad(title);
    },
  },
};
</script>

<style scoped>
.page-title {
  font-size: 1.2rem;
}

.page-list {
  padding: 0;
}
</style>
