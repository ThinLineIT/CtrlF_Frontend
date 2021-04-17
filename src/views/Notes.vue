<template>
    <v-container>
        <router-view></router-view>
        <v-btn router :to = "{name : 'Create'}" exact >노트 Create</v-btn>

    </v-container>    
</template>

<script>
export default {
    methods() {
        
    },
}
</script>