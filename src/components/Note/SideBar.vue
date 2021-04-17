<template>
   <div class = "pageSideBar">
       <v-card class="mainTitle">
           여기는 메인타이틀입니다
       </v-card>
       <v-card class="titleList">
           <v-row>
               <v-col>
                <v-list flat>
                    <v-list-item
                        v-for="i in 12"
                        :key="i"
                    >
                        <v-list-item-content>
                            <v-list-item-title>sub Title</v-list-item-title>
                       </v-list-item-content>
                    </v-list-item>
                   </v-list>
               </v-col>
               <v-col>
                <v-list flat>
                    <v-list-item
                        v-for="i in 12"
                        :key="i"
                    >
                        <v-list-item-content>
                            <v-list-item-title>sub Title</v-list-item-title>
                       </v-list-item-content>
                    </v-list-item>
                   </v-list>
               </v-col>
           </v-row>
       </v-card>
   </div>
</template>

<script>
export default {
  name: "SideBar",
  date() {
    return {};
  },
};
</script>

<style scoped>
.mainTitle {
    background-color: blue;
    height: 100px;
}
.pageSideBar {
    margin: 30px;
}
.titleList {
    margin-top: 10px;
    background-color: blueviolet;
}

</style>
