<template>
    
    <form>
        <h1>Profile</h1>
        <div class="space-y-12">
            <div class="grid grid-cols-6">
                <div class="col-span-3">
                    <label for="first-name" class="block">First name</label>
                    <input name="first-name" type="text"/>
                </div>
                
                <div class="col-span-3">
                    <label for="last-name" class="block">Last name</label>
                    <input name="last-name" type="text"/>
                </div>

                <div class="col-span-4">
                    <label for="email" class="block">Email</label>
                    <input name="email" type="text" class="w-full"/>
                </div>
                
                <div class="col-span-full">
                    <label for="street-address" class="block">Address</label>
                    <input name="street-address" type="text" class="w-full"/>
                </div>

                <div>
                    <label for="resume" class="block">Resume</label>
                    <input name="resume" type="file"/>
                </div>
                
                <div>
                    <label for="hispanic-latino" class="block">Hispanic/Latino</label>
                    <input name="hispanic-latino" type="checkbox"/>
                </div>
                
                
                <button type="submit" class="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-indigo-500">Submit</button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
</script>