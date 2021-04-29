<template>
  <div class="issue-searchBar">
    <div>
      <router-link :to="{ name: 'Home' }" class="issue-home">
        <v-icon>mdi-arrow-left</v-icon> 홈으로 돌아가기
      </router-link>
    </div>
    <div class="issue-category">
      <v-card class="issue-category-main"> <span>MAIN</span> </v-card>
      <v-card class="issue-category-sub"> <span>SUB</span> </v-card>
    </div>
    <div class="issue-search">
      <input class="issue-search" type="text" />
      <!-- append-icon="mdi-card-search-outline" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "IssueSearchBar",
};
</script>

<style scoped>
.issue-searchBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.issue-home {
  text-decoration-line: none;
  color: black;
  font-size: 23px;
}

.issue-category {
  display: flex;
}

.issue-category-main,
.issue-category-sub {
  width: 250px;
  height: 55px;
  display: table;
}

span {
  vertical-align: middle;
  display: table-cell;
  text-align: center;
}

.issue-search {
  width: 250px;
  height: 47px;
  border: solid 0.5px gray;
  border-radius: 20px;
}
</style>
