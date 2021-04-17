<template>
  <div class="note">
    <v-container>
      <SideBar />
      <router-view />
    </v-container>
  </div>
  <!-- <v-btn router :to="{ name: 'Create' }" exact>노트 Create</v-btn> -->
</template>

<script>
import SideBar from "@/components/Note/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  methods() {},
};
</script>

<style scoped></style>
