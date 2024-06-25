<script setup lang="ts">
</script>

<template>
  <!-- Top section -->
  <div class="pt-[50px] pb-[20px] px-[16px] flex space-x-[10px]">
    <!-- Search bar -->
    <div class="bg-[#D9D9D9] rounded-lg border border-gray-300 flex-auto py-[5px] px-[8px] flex space-x-[5px]">
      <unicon name="search" />
      <input type="text" 
        placeholder="Search" 
        class="placeholder:text-black placeholder:font-bold w-full bg-transparent">
    </div>
    
    <!-- Filter Button -->
    <button><unicon name="filter" /></button>
  </div>

  <!-- bottom section -->
  <div class="bg-[#E4F4FF] h-screen">
    <br/>
    <div class="bg-white m-[10px]">
      <p>Mow Lawn</p>
      <p>$100</p>
      <p>15 minutes</p>
    </div>
    <div class="bg-white m-[10px]">
      <p>Mow Lawn</p>
      <p>$100</p>
      <p>15 minutes</p>
    </div>
    <div class="bg-white m-[10px]">
      <p>Mow Lawn</p>
      <p>$100</p>
      <p>15 minutes</p>
    </div>
  </div>
</template>

<style scoped>
</style>
