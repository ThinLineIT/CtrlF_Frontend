<template>
  <v-card class="IssueSideBar">
    <v-card-title>
        요청 검토 중인 내용
    </v-card-title>
    <v-list>
        <v-list-item
            v-for="i in 5"
            :key="i"
        >
            <v-list-item-content>
                <v-list-item-title>Tile</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "IssueSideBar",
};
</script>


<style scoped>
.IssueSideBar {
    width: 250px;
}
</style>