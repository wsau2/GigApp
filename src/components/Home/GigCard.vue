<template>
    <div class="bg-white m-[16px] rounded-lg drop-shadow-lg">
        <div class="flex flex-row justify-between px-[16px] py-[8px] items-center">
            <p class="font-bold text-2xl">{{ title }}</p>
            <div class="flex flex-col text-right font-bold">
                <p>${{ pay }}</p>
                <p>{{ time }} minutes</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['title', 'pay', 'time'])
</script>