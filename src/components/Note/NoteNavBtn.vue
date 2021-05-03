<template>
  <v-container class="page-create">
    <div class="notebar">
      <div class="noteBtn">
        <router-link :to="{ name: 'Home' }">
          <HomeIcon class="home" />
        </router-link>
        <SearchIcon class="search" />
        <RequestIcon class="request" />
        <LoginIcon class="login" />
      </div>
    </div>
  </v-container>
</template>

<script>
import SearchIcon from "../../assets/SEARCH BUTTON.svg";
import RequestIcon from "../../assets/REQUEST BUTTON.svg";
import LoginIcon from "../../assets/LOGIN BUTTON.svg";
import HomeIcon from "../../assets/HOME BUTTON.svg";

export default {
  name: "NoteNavBtn",
  components: {
    SearchIcon,
    RequestIcon,
    LoginIcon,
    HomeIcon,
  },
};
</script>

<style scoped>
.request,
.login,
.home,
.search {
  width: 35px;
  height: 30px;
  fill: grey;
  padding-right: 8px;
}

.notebar {
  display: flex;
  justify-content: flex-end;
}

.noteBtn {
  display: flex;
  align-items: center;
}
</style>
