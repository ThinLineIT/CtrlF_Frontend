<template>
  <v-container class="noteContent" fluid>
    <div class="notebar">
      <div class="noteContent__title">
        <span class="noteContent__title-sub">
          {{ getNowTopic }}
        </span>
        <span class="noteContent__title-content"> {{ getNowPage }} </span>
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
      console.log();
      var clipboard = new ClipboardJS(this.copyBtn);
      clipboard.on("success", function (e) {
        console.log(e);
        clipboard.destroy();
      });
      clipboard.on("error", function (e) {
        console.log(e);
        clipboard.destroy();
      });
      setTimeout(() => this.copyStop(), 2000);
    },
    addPage() {
      this.$router.push({ name: "create-page" });
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
  margin-left: 0px;
  padding-left: 0px;
  padding-right: 30px;
  width: 70rem;
}
.noteContent__title {
  display: flex;
}
.noteContent__title-sub {
  background-color: #43af83;
  line-height: 67px;
  border-radius: 20px 0px 0px 20px;
  text-align: center;
  padding: 1px 18px 0px 20px;
  color: #ffffff;
  min-height: 4.2rem;
  min-width: 100px;
  font-weight: bold;
}
.noteContent__title-content {
  border-radius: 0px 20px 20px 0px;
  line-height: 67px;
  padding: 1px 18px 0px 20px;
  font-weight: bold;
  min-width: 700px;
  min-height: 4.2rem;
  font-weight: bold;
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
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.noteBtn {
  display: flex;
  align-items: center;
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
