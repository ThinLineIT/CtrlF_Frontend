<template>
  <v-container fluid class="page-create">
    <div class="create-title">
      <div class="noteContent__title">
        <span class="noteContent__title-sub">{{ getNowTopic }}</span>
        <span class="noteContent__title-content"> {{ getNowPage }} </span>
      </div>
      <div @click="pagePost" class="create-post">
        <span>등 록</span>
      </div>
    </div>
    <!-- <v-text-field label="제목"></v-text-field> -->
    <v-textarea
      class="create-content"
      background-color="white"
      clearable
      clear-icon="mdi-close-circle"
      filled
      solo
      auto-grow
      name="input-7-4"
      v-model="getNowTopicContent"
      label="내용을 입력하세요"
    ></v-textarea>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getNowPage", "getNowTopic", "getNowTopicContent"]),
  },
  components: {},
  methods: {
    // ...mapActions(['pageUpload']),
    pagePost() {
      // pageUpload()
      this.$router.push({ name: "NoteID" });
    },
  },
};
</script>

<style scoped>
.create-post {
  background-color: #43af83;
  line-height: 67px;
  width: 147px;
  text-align: center;
  border-radius: 20px 20px 20px 20px;
  color: white;
  font-weight: bold;
}

.create-post:hover {
  cursor: pointer;
}

.create-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.create-content {
  margin-top: 30px;
}

.page-create {
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
  font-weight: bold;
}
.noteContent__title-content {
  border-radius: 0px 20px 20px 0px;
  line-height: 67px;
  padding: 1px 18px 0px 20px;
  font-weight: bold;
  min-width: 600px;
  min-height: 4.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 4px;
  font-weight: bold;
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
</style>
