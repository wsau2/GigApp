<template>

<!-- User Info -->
<div class="bg-[#E4F4FF] w-full flex flex-col items-center py-[50px] mb-[20px]">
    <img src="../../assets/mads.webp" class="size-[100px] rounded-full"/>
    <p class="text-[80px] font-bold">$100</p>
    <p>balance</p>
</div>

<!-- User Interactions -->
<div class="flex flex-col items-center">
    <h1>Transactions</h1>
    <Transaction/>
    <Transaction/>
</div>

</template>

<script setup lang="ts">
import Transaction from './Transaction.vue'
</script>