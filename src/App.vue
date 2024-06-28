<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import GigList from "./components/GigList.vue"
import AppFooter from "./components/AppFooter.vue";
import JobDetail from "./components/JobDetail.vue";
import { useStore } from "../store/store"
import { storeToRefs } from "pinia";

const jobStore = useStore();
const { showDetail } = storeToRefs(jobStore)
</script>

<template>
  <div v-if="!showDetail">
    <AppHeader/>
    <GigList/>
  </div>
  <JobDetail v-else/>
  
  <AppFooter/>
</template>

<style scoped>
</style>

<!-- What if there was an alert that was like -->
 <!-- intended for mobile screens *qr code* scan to view on your phone! -->