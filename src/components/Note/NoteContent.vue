<template>
  <div class="noteContent">
    <div class="notebar">
      <div class="noteContent__title">
        <span class="noteContent__title-sub">
          {{ getNowTopic }}
        </span>
        <span class="noteContent__title-content"> {{ getNowPage }} </span>
      </div>
      <div class="noteBtn">
        <SearchIcon class="search" />
        <RequestIcon class="request" />
        <LoginIcon class="login" />
        <router-link :to="{ name: 'Home' }">
          <HomeIcon class="home" />
        </router-link>
      </div>
    </div>
    <div class="noteContent__text">
      <v-card>
        {{ getNowTopicContent }}
      </v-card>
    </div>
  </div>
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
  margin-top: 50px;
  width: 80% !important;
}
.noteContent__title {
  display: flex;
}
.noteContent__title-sub {
  background-color: #43af83;
  height: 40px;
  line-height: 40px;
  border-radius: 20px 0px 0px 20px;
  width: 120px;
  text-align: center;
  color: #ffffff;
}
.noteContent__title-content {
  border-radius: 0px 20px 20px 0px;
  height: 38px;
  line-height: 38px;
  padding: 1px 0px 0px 24px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 4px;
  width: 700px;
}
.noteContent__text {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.search {
  width: 30px;
  height: 30px;
  fill: grey;
}
.request {
  width: 30px;
  height: 30px;
  fill: grey;
}

.login {
  width: 30px;
  height: 30px;
  color: grey;
}

.home {
  width: 30px;
  height: 30px;
  fill: grey;
}

.notebar {
  display: flex;
  justify-content: space-between;
}

.noteBtn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
}

.text__row {
  border-bottom: 1px solid black;
  height: 30px;
  line-height: 35px;
}
</style>
