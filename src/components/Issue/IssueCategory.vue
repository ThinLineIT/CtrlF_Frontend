<template>
  <div class="issue-category">
    <div class="category__note-select">
      <select class="category-note" @change="showTopicCat($event)">
        <option value="all">ALL</option>
        <option v-for="(note, i) in getTitles" :key="i" :value="note.id">
          {{ note.title }}
        </option>
      </select>
    </div>
    <div class="category__topic-select">
      <select class="category-topic">
        <option>ALL</option>
        <option
          v-for="(topic, i) in getIssueTopicCat"
          :key="i"
          :value="topic.id"
        >
          {{ topic.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTitles", "getIssueTopicCat"]),
  },
  name: "IssueSearchBar",
  methods: {
    ...mapActions(["changeIssueTopicCat"]),
    showTopicCat(event) {
      let test = parseInt(event.target.value);
      if (test !== "all") this.changeIssueTopicCat(test);
    },
  },
};
</script>

<style scoped>
.category__note-select {
  display: flex;
  width: 270px;
  background-color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 30px 00px 00px 30px;
  justify-content: flex-end;
  max-width: 270px;
}

.category-note {
  border-radius: 30px 00px 00px 30px;
  font-weight: bold;
  font-size: 1.375rem;
  background-color: white;
  max-width: 270px;
  width: 90%;
  height: 55px;
  text-align-last: center;
  text-align: center;
}

.category__topic-select {
  display: flex;
  /* width: 22.84%; */
  width: 270px;
  background-color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 0px 30px 30px 0px;
  justify-content: flex-start;
  max-width: 270px;
}

.category-topic {
  font-weight: bold;
  font-size: 1.375rem;
  border-radius: 0px 30px 30px 0px;
  background-color: white;
  max-width: 270px;
  width: 90%;
  height: 55px;
  text-align-last: center;
  text-align: center;
}

select:focus {
  outline: none;
}

.issue-home {
  text-decoration-line: none;
  color: black;
  font-size: 23px;
}

.issue-category {
  display: flex;
  align-items: center;
  width: 1260px;
  justify-content: flex-end;
}

.issue-category-main,
.issue-category-sub {
  width: 22.84%;
  height: 55px;
  display: table;
}

span {
  vertical-align: middle;
  display: table-cell;
  text-align: center;
  font-weight: bold;
  font-size: 1.375rem;
}

.issue-search {
  width: 250px;
  height: 47px;
  border: solid 0.5px gray;
  border-radius: 20px;
}
</style>
