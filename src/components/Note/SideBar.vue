<template>
   <div class = "pageSideBar">
       <v-card class="mainTitle">
           NOTE
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
                            <v-list-item-title class="topic">TOPIC</v-list-item-title>
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
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.pageSideBar {
    padding: 30px;
    background-color: #43AF83;
    min-height: 969px;
}
.titleList {
    border-top: 12px solid #43AF83;
}

.live {
    background-color: #43AF83 !important;
}

.topic {
    background-color: #8ECFB5;
    color: #ffffff;    
    height: 30px;
    line-height: 30px;
    padding: 0px 15px;
    border-top-left-radius: 15px;
    border-end-start-radius: 15px;
}

.col {
    height: inherit;
}

</style>
