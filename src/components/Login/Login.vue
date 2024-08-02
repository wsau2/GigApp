<template>
    <div class="flex flex-col items-center mt-[100px]">
        <h1 class="text-[20px] my-[20px]">Select a user</h1>
        <UserSelect/>
        <h1 class="text-[20px] my-[20px]">Create new User</h1>
    </div>
</template>

<script setup lang="ts">
import UserSelect from '../Home/UserSelect.vue';
</script>