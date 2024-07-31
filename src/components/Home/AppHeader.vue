<template>
    <div class="pt-[50px] pb-[20px] px-[16px] flex space-x-[10px] fixed top-0 left-0 right-0 z-10 bg-white shadow-lg">
      <!-- Search bar -->
      <div class="bg-[#D9D9D9] rounded-lg border border-gray-300 flex-auto py-[5px] px-[8px] flex space-x-[5px]">
        <div>
          <img src="../../assets/search.svg" width="24"/>
        </div>
        <input type="text" 
          placeholder="Search" 
          class="placeholder:text-black placeholder:font-bold w-full bg-transparent h-[24px] border-0">
      </div>
      
      <!-- Filter Button -->
      <img src="../../assets/filter.svg" width="24" @click="scream"/>
  </div>
</template>

<script setup lang="ts">
function scream() {
  alert("ahhh!")
}
</script>