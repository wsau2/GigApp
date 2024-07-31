<template>
    <form class="m-[16px]" v-on:submit.prevent="handleSubmit">
        <h1>Create Listing</h1>
        <div class="">
            <div class="grid grid-cols-6 space-y-4">
                <div class="col-span-3">
                    <label for="title" class="block">Title</label>
                    <input name="title" type="text" v-model="title"/>
                </div>
                
                <div class="col-span-full row-span-3">
                    <label for="description" class="block">Description</label>
                    <textarea name="description" class="w-full" v-model="description"></textarea>
                </div>

                <div class="col-span-3">
                    <label for="pay" class="block">Pay</label>
                    <input name="pay" type="number" class="" min="0" v-model="pay"/>
                </div>
                
                <div class="col-span-3">
                    <label for="duration" class="block">Duration</label>
                    <input name="duration" type="number" step="0.01" min="0" v-model="duration"/>
                </div>

                <button type="submit" class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500">Submit</button>
            </div>
        </div>
    </form>
</template>


<!-- Note: would be cool to change submit button to 'pending...' after click -->
<script setup lang="ts">
    import { ref } from 'vue';
    import { postListing } from '../../../utils/query';

    const title = ref('')
    const description = ref('')
    const pay = ref(0)
    const duration = ref(0)
    
    function handleSubmit() {
        
        if (title.value != '') {
            console.log(JSON.stringify({
                title: title.value,
                description: description.value,
                pay: pay.value,
                duration: duration.value,
            }));

            postListing(title.value, description.value, pay.value, duration.value)
        } else {
            alert('Listing must have a title')
        }
        

    }
</script>