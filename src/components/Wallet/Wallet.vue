<template>

<!-- User Info -->
<div class="bg-[#E4F4FF] w-full flex flex-col items-center py-[50px] mb-[20px]">
    <img :src="currUser.profilePicture" class="size-[100px] object-cover rounded-full"/>
    <p>{{ currUser.userID }}</p>
    <p class="text-[80px] font-bold">${{ currUser.money }}</p>
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
import { useStore } from '../../../store/store'

const listingStore = useStore();
const currUser = listingStore.currUser;
</script>