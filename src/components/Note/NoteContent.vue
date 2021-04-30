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
        <router-link :to="{ name: 'Home' }">
          <HomeIcon class="home" />
        </router-link>
        <SearchIcon class="search" />
        <RequestIcon class="request" />
        <LoginIcon class="login" />
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
        <span class="float-buttons"
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
import SearchIcon from "../../assets/SEARCH BUTTON.svg";
import RequestIcon from "../../assets/REQUEST BUTTON.svg";
import LoginIcon from "../../assets/LOGIN BUTTON.svg";
import HomeIcon from "../../assets/HOME BUTTON.svg";
import { mapActions, mapGetters } from "vuex";

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
    SearchIcon,
    RequestIcon,
    LoginIcon,
    HomeIcon,
  },
  methods: {
    ...mapActions(["noteLoad"]),
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
  width: 66rem;
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
}
.noteContent__title-content {
  border-radius: 0px 20px 20px 0px;
  line-height: 67px;
  padding: 1px 18px 0px 20px;
  font-weight: bold;
  min-width: 100px;
  min-height: 4.2rem;
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
  width: 60rem;
  justify-content: space-between;
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
