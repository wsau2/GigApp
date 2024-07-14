<template>
    <div class="bg-white flex flex-row justify-between px-[16px] h-[80px] fixed left-0 right-0 bottom-0 z-10 items-center custom-shadow-top">
      <router-link to="/"><img src="../assets/home.svg" class="size-[40px]"/></router-link>  
      <router-link to="/calendar"><img src="../assets/calendar.svg" class="size-[35px]"/></router-link>
      <router-link to="/detail"><img src="../assets/bell.svg" class="size-[35px]"/></router-link>
      <router-link to="/wallet"><img src="../assets/money.svg" class="size-[35px]"/></router-link>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.custom-shadow-top {
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>