<template>
  <div class="pageSideBar">
    <v-card class="mainTitle">
      {{ getNote.title }}
    </v-card>
    <v-card class="titleList">
      <v-row>
        <v-col>
          <v-list flat>
            <v-list-item v-for="(topic, i) in getNote.topics" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  class="topic"
                  @click="topicPagesLoad(topic.title, topic.id)"
                  >{{ topic.title }} {{ topic.id }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <pagesName />
        </v-col>
      </v-row>
      <v-divider insert></v-divider>
      <div class="AddBtn">
        <div>
          <router-link
            :to="{ name: 'Create' }"
            class="grey--text"
            id="addTopic"
          >
            Add Topic
          </router-link>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <router-link :to="{ name: 'Create' }" class="grey--text" id="addPage">
            add page
          </router-link>
        </div>
        <!-- TODO: Show popup to nmae a new topic-->
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import pagesName from "./TopicPages";
export default {
  components: { pagesName },
  computed: {
    ...mapGetters(["getNote", "getAllPages", "getSelectTopic"]),
  },
  name: "SideBar",
  date() {
    return {};
  },
  methods: {
    ...mapActions(["pageLoad", "selectedPageLoad", "nowTopicNameLoad"]),
    ...mapMutations(["DEL_SELECTED_PAGES", "DEL_SELECTED_TOPICS"]),
    topicPagesLoad(topicName, topicId) {
      this.nowTopicNameLoad(topicName);
      this.DEL_SELECTED_PAGES();
      for (let i = 0; i < this.getAllPages.length; i++) {
        if (topicId === this.getAllPages[i].topic_id) {
          this.selectedPageLoad(this.getAllPages[i]);
        }
      }
    },
  },
  created() {
    this.pageLoad();
  },
};
</script>

<style scoped>
.mainTitle {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.pageSideBar {
  padding: 30px;
  background-color: #43af83;
  min-height: 969px;
  min-width: 200px;
}
.titleList {
  border-top: 12px solid #43af83;
}

.live {
  background-color: #43af83 !important;
}

.topic {
  background-color: #8ecfb5;
  color: #ffffff;
  height: 30px;
  line-height: 30px;
  padding: 0px 15px;
  border-top-left-radius: 15px;
  border-end-start-radius: 15px;
}

.col {
  height: inherit;
}

.AddBtn {
  display: flex;
  justify-content: space-between;
}
#addTopic {
  text-decoration: none;
  margin: 13px;
}
#addPage {
  text-decoration: none;
  margin: 13px;
}
</style>
