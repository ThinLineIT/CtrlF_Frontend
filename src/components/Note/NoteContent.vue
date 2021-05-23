<template>
  <v-container class="noteContent" fluid>
    <div class="notebar">
      <div class="noteContent__title">
        <div v- class="noteContent__title-sub">
          {{ getNowTopic }}
        </div>
        <div class="noteContent__title-content">{{ getNowPage }}</div>
      </div>
      <div class="noteBtn">
        <v-icon
          class="clip"
          id="clip-id"
          data-clipboard-target="#noteContent__text-card-id"
          @click="copyContent"
          size="43"
        >
          mdi-upload
        </v-icon>
      </div>
    </div>
    <div class="noteContent__text">
      <p
        v-html="compiledMarkdown"
        class="noteContent__text-card"
        id="noteContent__text-card-id"
      >
        {{ getNowTopicContent }}
      </p>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import marked from "marked";
import ClipboardJS from "clipboard";

export default {
  computed: {
    ...mapGetters([
      "getNote",
      "getNowTopic",
      "getNowPage",
      "getNowTopicContent",
    ]),
    compiledMarkdown() {
      if (this.getNowTopicContent === null) {
        return "";
      } else {
        return marked(this.getNowTopicContent, { sanitize: true });
      }
    },
  },
  name: "NoteContent",
  data() {
    return {
      copyBtn: "",
    };
  },
  components: {},
  methods: {
    ...mapActions(["noteLoad", "copyActivate", "copyStop"]),
    copyContent() {
      this.copyActivate();
      var clipboard = new ClipboardJS(this.copyBtn);
      clipboard.on("success", function (e) {
        console.log(e, "성공");
        clipboard.destroy();
      });
      clipboard.on("error", function (e) {
        console.log(e, "실패");
        clipboard.destroy();
      });
      setTimeout(() => this.copyStop(), 2000);
    },
  },
  created() {
    this.noteLoad(this.$route.params.noteID);
  },
  mounted() {
    var btns = document.getElementById("clip-id");
    this.copyBtn = btns;
  },
};
</script>

<style scoped>
.noteContent__text-card {
  white-space: pre-line;
}

.noteContent {
  margin-left: 78px;
  padding-left: 0px;
  padding: 0px;
  width: 100%;
}
.noteContent__title {
  display: flex;
  min-width: 77%;
  float: left;
}

.noteContent__title-sub {
  background-color: #43af83;
  line-height: 67px;
  border-radius: 20px 0px 0px 20px;
  text-align: center;
  padding: 1px 13px 0px 15px;
  color: #ffffff;
  min-height: 4.2rem;
  font-weight: bold;
  font-size: 1.7rem;
  width: 21.35%;
  display: inline-block;
}
.noteContent__title-content {
  border-radius: 0px 20px 20px 0px;
  line-height: 67px;
  padding: 1px 18px 0px 20px;
  font-weight: bold;
  width: 78.65%;
  min-height: 4.2rem;
  font-size: 1.95rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 4px;
}
.noteContent__text {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 60rem;
}

.clip:hover {
  cursor: pointer;
}

.notebar {
  width: 77.8%;
  justify-content: space-between;
  margin-top: 90px;
}

.noteBtn {
  display: flex;
  align-items: center;
  float: right;
}

.text__row {
  border-bottom: 1px solid black;
  height: 30px;
  line-height: 35px;
}

.fixed-button {
  position: fixed;
  bottom: 0px;
  right: 25px;
  height: 90px;
}

.float-buttons {
  color: gray;
  font-size: 0.6875rem;
}
</style>
