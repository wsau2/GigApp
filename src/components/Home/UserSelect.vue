<template>
    <div v-for="user in listingStore.users" class="flex space-x-3 items-start">
        <img :src="user.profilePicture" class="size-[60px] object-cover rounded-full"></img>
        <p>{{ user.userID }}</p>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from '../../../store/store';
    import { onMounted } from 'vue';
    
    const listingStore = useStore();

    onMounted(() => {
        listingStore.updateUsers();
    })
    
</script>