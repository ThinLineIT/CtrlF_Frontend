<template>
  <div class="issue-category">
    <select class="category-note">
      <option>ALL</option>
    </select>
    <select class="category-topic">
      <option>ALL</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "IssueSearchBar",
};
</script>

<style scoped>
.category-note {
  font-weight: bold;
  font-size: 1.375rem;
  padding-left: 9%;
  border-radius: 30px 00px 00px 30px;
  background-color: white;
  max-width: 270px;
  width: 22.84%;
  height: 55px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.category-topic {
  font-weight: bold;
  font-size: 1.375rem;
  padding-left: 9%;
  border-radius: 0px 30px 30px 0px;
  background-color: white;
  max-width: 270px;
  width: 22.84%;
  height: 55px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
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
  width: 100%;
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
