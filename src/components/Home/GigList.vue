<template>
  <div class="bg-[#E4F4FF] h-screen mt-[100px] overflow-y-auto">
    <GigCard title="Mow Lawn" pay="$100" time="15 minutes"/>
    <GigCard title="Paint fence" pay="$1000" time="15 minutes"/>
    <GigCard title="Walk dog" pay="$100" time="15 minutes"/>
  </div>
</template>

<script setup lang="ts">
import GigCard from "./GigCard.vue";
</script>

<!-- mongosh "mongodb+srv://cluster0.azdppcx.mongodb.net/" --apiVersion 1 --username wsaulnier1004 --password qxhVpPyBdggsIBLi -->