<template>
    <div class="flex flex-col items-center mt-[100px]">
        <h1 class="text-[20px] my-[20px]">Select a user</h1>

        <div>
            <div v-for="user in listingStore.users" class="flex space-x-3 items-center" @click.stop="selectUser(user)">
                <img :src="user.profilePicture" class="size-[60px] object-cover rounded-full"></img>
                <p>{{ user.userID }}</p>
            </div>
        </div>
        

        <h1 class="text-[20px] my-[20px]">Create new User</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" class="size-[60px] object-cover rounded-full" @click.stop="createNewUser"></img>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../../store/store';
import { onMounted } from 'vue';
import type { User } from 'utils/ZodTypes';
    
const listingStore = useStore();

onMounted(() => {
    listingStore.updateUsers();
})

const router = useRouter();

function selectUser(user: User) {
    listingStore.currUser = user;
    router.push('/wallet')
}

function createNewUser() {
    router.push('/')
}

</script>