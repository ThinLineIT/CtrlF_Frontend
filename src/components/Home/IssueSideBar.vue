<template>
  <v-card class="IssueSideBar">
    <v-card-title>
        요청 검토 중인 내용
    </v-card-title>
    <v-list>
        <v-list-item
            v-for="issue in getIssue"
            :key="issue"
            two-line
        >
            <v-list-item-content>
              <v-list-item-title>{{ issue.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ issue.registration_date }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
        ...mapGetters(["getIssue"]),
    },  
  name: "IssueSideBar",
};
</script>


<style scoped>
.IssueSideBar {
    width: 250px;
}
</style>