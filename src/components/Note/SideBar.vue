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
                  @click="topicSelect(topic.title)"
                  class="topic"
                  >{{ topic.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list flat>
            <v-list-item v-for="(topic, j) in getNote.topics" :key="j">
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-divider insert></v-divider>
        <div class="AddBtn">
            <div><router-link :to="{ name: 'Create' }" class="grey--text" id="addTopic"> Add Topic </router-link> </div>
            <v-divider vertical></v-divider>
            <div><router-link :to="{ name: 'Create' }" class="grey--text" id="addPage"> add page </router-link> </div>
        <!-- TODO: Show popup to nmae a new topic-->
        </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getNote", "getSelectTopic"]),
  },
  name: "SideBar",
  date() {
    return {};
  },
  methods: {
    topicSelect(topicTitle) {
      this.getSelectTopic = topicTitle;
    },
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
    margin-left: 13px;
}
#addPage {
    text-decoration: none;
    margin-right: 13px;
}
</style>
