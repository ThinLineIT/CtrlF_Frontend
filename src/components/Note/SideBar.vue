<template>
  <div class="pageSideBar" id="pageSideBarId">
    <div v-if="getNote.title.length > 10" class="mainTitle-small">
      <span class="note-name"> {{ getNote.title }} </span>
    </div>
    <div v-else class="mainTitle">
      <span class="note-name"> {{ getNote.title }} </span>
    </div>
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
      </v-row>
      <v-divider insert></v-divider>
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
      // 클릭시 화면 펼침 효과, 향후 사용 예정
      // if (this.getIsTopicClicked === false) {
      //   this.TOPIC_CLICKED();
      //   document.getElementById("AddBtnId").style.display = "none";
      //   document.getElementById("page-listId").style.width = "16rem";
      //   document.getElementById("page-listId").style.display = "";
      // } else {
      //   this.TOPIC_UNCLICKED();
      //   document.getElementById("AddBtnId").style.display = "";
      //   document.getElementById("page-listId").style.width = "9.9rem";
      //   document.getElementById("page-listId").style.display = "none";
      // }
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

.note-name {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 11%;
}

.mainTitle-small {
  font-size: 1.75rem;
  padding-bottom: 35%;
  width: 75%;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  position: relative;
}

.mainTitle {
  width: 75%;
  padding-bottom: 35%;
  line-height: 100px;
  text-align: center;
  font-weight: bold;
  font-size: 3.25rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
}
.pageSideBar {
  padding-top: 30px;
  background-color: #43af83;
  height: 100%;
  min-width: 21em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleList {
  width: 75%;
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
