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
            <v-icon>mdi-home</v-icon>
            <v-icon>mdi-pencil</v-icon>
            <v-icon>mdi-text-search</v-icon>
        </div>
    </div>
    <div class="noteContent__text">여기는 노트텍스트입니다.</div>
  </div>
</template>

<script>
export default {
  name: "NoteContent",
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
.notebar {
    display: flex;
}
</style>


