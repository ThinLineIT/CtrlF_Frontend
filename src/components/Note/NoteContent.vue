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
        <NoteNavBtn />
      </div>
    </div>
    <div class="noteContent__text">
      <p>
        {{ getNowTopicContent }}
      </p>
    </div>
    <v-speed-dial class="fixed-button">
      <template v-slot:activator>
        <v-btn color="white" dark fab>
          <v-icon color="black"> mdi-plus </v-icon>
          <!-- v-if로 버튼 클릭시 변경-->
        </v-btn>
      </template>
      <v-btn fab dark large color="white">
        <span class="float-buttons"
          >BOOKMARK <br />
          BUTTON</span
        >
      </v-btn>
      <v-btn fab dark large color="white">
        <span class="float-buttons"
          >SHARE <br />
          BUTTON</span
        >
      </v-btn>
      <v-btn fab dark large color="white">
        <span class="float-buttons" @click="addPage"
          >WRITE <br />
          BUTTON</span
        >
      </v-btn>
      <v-btn fab dark large color="white">
        <span class="float-buttons"
          >request <br />
          BUTTON</span
        >
      </v-btn>
    </v-speed-dial>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NoteNavBtn from "./NoteNavBtn";

export default {
  computed: {
    ...mapGetters([
      "getNote",
      "getNowTopic",
      "getNowPage",
      "getNowTopicContent",
    ]),
  },
  name: "NoteContent",
  components: {
    NoteNavBtn,
  },
  methods: {
    ...mapActions(["noteLoad"]),
    addPage() {
      this.$router.push({ name: "create-page" });
    },
  },
  created() {
    this.noteLoad(this.$route.params.noteID);
  },
};
</script>

<style scoped>
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

.request,
.login,
.home,
.search {
  width: 30px;
  height: 30px;
  fill: grey;
  padding-right: 5px;
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
