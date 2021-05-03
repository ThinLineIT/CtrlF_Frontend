<template>
  <div class="pageSideBar" id="pageSideBarId">
    <v-card v-if="getNote.title.length > 10" class="mainTitle-small">
      {{ getNote.title }}
    </v-card>
    <v-card v-else class="mainTitle">
      {{ getNote.title }}
    </v-card>
    <v-card class="titleList">
      <v-row>
        <v-col class="topic-List" cols="5">
          <v-list class="topic-list-title" flat>
            <v-list-item
              class="topic-title"
              v-for="(topic, i) in getNote.topics"
              :key="i"
            >
              <v-list-item-content class="topic-title-content">
                <v-list-item-title
                  class="topic"
                  @click="topicPagesLoad(topic.title, topic.id)"
                  >{{ topic.title }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="page-list" id="page-listId">
          <pagesName />
        </v-col>
        <!-- <v-col v-else class="page-list" id="page-listId" cols="5">
          <pagesName />
        </v-col> -->
      </v-row>
      <v-divider insert></v-divider>
      <div class="AddBtn" id="AddBtnId">
        <div class="add-1">
          <span @click="addPage" id="addTopic">
            <!--class="grey--text"-->
            Add Topic
          </span>
        </div>
        <v-divider vertical></v-divider>
        <div class="add-2">
          <span @click="addPage" id="addPage"> add page </span>
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
    ...mapGetters([
      "getNote",
      "getAllPages",
      "getSelectTopic",
      "getIsTopicClicked",
    ]),
  },
  name: "SideBar",
  date() {
    return {};
  },
  methods: {
    addPage() {
      this.$router.push({ name: "create-page" });
    },
    ...mapActions(["pageLoad", "selectedPageLoad", "nowTopicNameLoad"]),
    ...mapMutations([
      "DEL_SELECTED_PAGES",
      "DEL_SELECTED_TOPICS",
      "TOPIC_CLICKED",
      "TOPIC_UNCLICKED",
    ]),
    topicPagesLoad(topicName, topicId) {
      this.nowTopicNameLoad(topicName);
      this.DEL_SELECTED_PAGES();
      for (let i = 0; i < this.getAllPages.length; i++) {
        if (topicId === this.getAllPages[i].topic_id) {
          this.selectedPageLoad(this.getAllPages[i]);
        }
      }
      if (this.getIsTopicClicked === false) {
        this.TOPIC_CLICKED();
        document.getElementById("AddBtnId").style.display = "none";
        document.getElementById("page-listId").style.width = "16rem";
        document.getElementById("page-listId").style.display = "";
      } else {
        this.TOPIC_UNCLICKED();
        document.getElementById("AddBtnId").style.display = "";
        document.getElementById("page-listId").style.width = "9.9rem";
        document.getElementById("page-listId").style.display = "none";
        // document.getElementById('pageSideBarId').style.width = "22.8em"
      }
    },
  },
  created() {
    this.pageLoad();
  },
  destroyed() {
    this.TOPIC_UNCLICKED();
  },
};
</script>

<style scoped>
#page-listId {
  width: 9.9rem;
}

.page-list {
  padding-left: 0;
}

.topic-List {
  border-right: solid gray 0.1px;
  padding: 0;
  margin: 12px;
  width: 8.2rem;
}

.mainTitle-small {
  font-size: 1.56rem;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

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
  min-height: 900px;
  min-width: 21em;
}
.titleList {
  border-top: 12px solid #43af83;
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
  padding: 0px 31px;
}
#addTopic,
#addPage {
  text-decoration: none;
  margin: 13px;
}

#addPage:hover {
  cursor: pointer;
}

#addTopic:hover {
  cursor: pointer;
}

.topic:hover {
  cursor: pointer;
}

.topic-title {
  padding: 0px 0px 0px 15px;
}

.topic-title-content {
  padding: 0px;
  text-align: center;
}

/* 
.topic-list-title {
  width: 8.25rem;
} */
</style>
