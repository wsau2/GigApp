<template>
<div class="p-[16px] flex flex-col space-y-[16px]">
    <!-- X button -->
    <router-link to="/"><div class="text-right text-[50px]">X</div></router-link>  
    <!-- Header -->
    <div class="font-bold">
        <h1 class="text-[40px]">{{ currListing.title }}</h1>
        <p class="text-[17px]">${{ currListing.pay }}</p>
        <p class="text-[17px]">{{ currListing.duration }} minutes</p>
    </div>
    <!-- Text body -->
    <div class="text-[17px]">
        {{ currListing.description }}
    </div>
    <!-- Profile Card -->
    <div class="bg-[#E4F4FF] rounded-lg h-[100px] flex flex-row p-[16px] items-center space-x-4 shadow-lg">
        <img src="../../assets/bell.svg" class="size-[70px]"/>
        <div>
            <p class="text-[20px] font-bold">{{ currListing.creator }}</p>
            <p class="text-[17px]">community rating: 5/5</p>
        </div>
    </div>
    <!-- Map -->


    <!-- Apply Button -->
    <button class="bg-[#59FF56] shadow-lg font-bold rounded-lg h-[42px]">Apply</button>
</div>
</template>

<script setup lang="ts">
import { useStore } from '../../../store/store'
import { useRouter } from 'vue-router';

const listingStore = useStore()
const currListing = listingStore.currDetailListing;
const router = useRouter();

if (currListing == null) {
    router.push('/')
}

</script>