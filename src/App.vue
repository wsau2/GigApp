<script setup lang="ts">
import AppHeader from "./components/Home/AppHeader.vue";
import GigList from "./components/Home/GigList.vue"
import AppFooter from "./components/AppFooter.vue";
import JobDetail from "./components/Home/JobDetail.vue";
import { useStore } from "../store/store"
import { storeToRefs } from "pinia";
import { onMounted } from "vue";


const jobStore = useStore();
const { showDetail } = storeToRefs(jobStore)

// Mobile view alert
// onMounted(() => alert("Intended for mobile view"))
</script>

<template>
  <router-view></router-view>
  <AppFooter/>
</template>

<style scoped>
</style>

<!-- What if there was an alert that was like -->
 <!-- intended for mobile screens *qr code* scan to view on your phone! -->