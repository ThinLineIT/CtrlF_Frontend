<template>
  <v-container>
       <v-card v-for="issue in getIssue" :key="issue">
      {{ issue.title }}
       <MEMOPREVIEW/>
    </v-card>            

<!--
    <v-list>
        <v-list-item
            v-for="issue in getIssue"
            :key="issue"
            two-line
        >
            <v-list-item-content>
              <v-list-item-title>{{ issue.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ issue.registration_date }}</v-list-item-subtitle>
              <v-img>
                <MEMOPREVIEW />
              </v-img>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    -->
  </v-container>
</template>

<script>
import MEMOPREVIEW from "../../assets/MEMO_PREVIEW.svg"
import { mapGetters } from "vuex";

export default {
  components:{
    MEMOPREVIEW
  },
  computed: {
        ...mapGetters(["getIssue"])
    },  
  name: "IssueSideBar",
};
</script>


<style scoped>
.memo {
  width: 50px;
  height: 50px;
}


</style>