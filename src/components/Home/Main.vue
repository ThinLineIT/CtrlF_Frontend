<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col v-for="n in 12" :key="n" cols="3">
          <v-card height="200"></v-card>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
