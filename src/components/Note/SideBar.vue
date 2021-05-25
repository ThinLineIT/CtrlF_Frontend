<template>
  <div class="pageSideBar" id="pageSideBarId">
    <div v-if="getNote.title.length > 10" class="mainTitle-small">
      <span class="note-name"> {{ getNote.title }} </span>
    </div>
    <div v-else class="mainTitle">
      <span class="note-name"> {{ getNote.title }} </span>
    </div>
    <div class="titleList">
      <div class="topic-List">
        <div
          class="topic-list-title"
          v-for="(topic, i) in getNote.topics"
          :key="i"
        >
          <span
            class="topic"
            v-if="topic.title.length <= 7"
            @click="topicPagesLoad(topic.title, topic.id)"
          >
            {{ topic.title }}
          </span>
          <span
            class="topic-small"
            v-else
            @click="topicPagesLoad(topic.title, topic.id)"
          >
            {{ topic.title }}
          </span>
        </div>
      </div>
      <hr class="divider" />
      <div class="page-list" id="page-listId">
        <pagesName />
      </div>
    </div>
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
      let test = this.getAllPages.length;
      console.log(test);
      for (let i = 0; i < this.getAllPages.length; i++) {
        if (topicId === this.getAllPages[i].id) {
          this.selectedPageLoad(this.getAllPages[i].pages);
          console.log(this.getAllPages[i].pages);
          break;
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
  created() {},
  destroyed() {
    this.TOPIC_UNCLICKED();
  },
};
</script>

<style scoped>
.divider {
  height: 100%;
}

#page-listId {
  min-width: 45%;
  display: inline-block;
}

.page-list {
  padding-left: 0;
  margin: 41px 0px 19px 20.1px;
  width: 55.5%;
}

.topic-List {
  padding: 0;
  margin: 41px 0px 19px 19px;
  width: 44.5%;
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
  padding-top: 44px;
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
  display: flex;
  background-color: white;
}

.topic-list-title {
  background-color: #8ecfb5;
  border-top-left-radius: 15px;
  border-end-start-radius: 15px;
  margin-bottom: 25.36px;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topic {
  color: #ffffff;
  font-size: 1.25rem;
}

.topic-small {
  color: #ffffff;
  font-size: 0.8125rem;
}

.topic-small:hover {
  cursor: pointer;
}

.topic:hover {
  cursor: pointer;
}

.topic-title {
  padding: 0px 0px 0px 15px;
}
</style>
