<template>
  <div class="noteContent">
    <div class="notebar">
        <div class="noteContent__title">
            <span class="noteContent__title-sub" >
                SUB TITLE
            </span>
            <span class="noteContent__title-content">
                CONTENT TITLE
            </span>
        </div>
        <div class="noteBtn">
            <SearchIcon class="search" />
            <RequestIcon class="request" />
            <LoginIcon class="login" />
            <router-link :to = "{name: 'Home'}">
                <HomeIcon class="home" />
            </router-link>

        </div>
    </div>
    <div class="noteContent__text">여기는 노트텍스트입니다.</div>
  </div>
</template>

<script>
import SearchIcon from "../../assets/SEARCH BUTTON.svg"
import RequestIcon from "../../assets/REQUEST BUTTON.svg"
import LoginIcon from "../../assets/LOGIN BUTTON.svg"
import HomeIcon from "../../assets/HOME BUTTON.svg" 

export default {
  name: "NoteContent",
  components : {
      SearchIcon,RequestIcon,LoginIcon,HomeIcon
  }
};
</script>

<style scoped>
.noteContent {
  margin-right: 100px;
  margin-top: 50px;
}
.noteContent__title {
    display: flex;
    margin-right: 400px;
}
.noteContent__title-sub {
    background-color: grey;
    padding: 5px;
    border-top: solid;
    border-left: solid;
    border-bottom: solid;
    border-radius: 10px 0px 0px 10px;;
}
.noteContent__title-content {
    padding: 5px;
    border-top: solid;
    border-right: solid;
    border-bottom: solid;
    border-radius: 0px 10px 10px 0px;;
}
.noteContent__text {
    margin-top: 30px;
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

</style>


