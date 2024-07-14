<template>
<div class="p-[16px] flex flex-col space-y-[16px]">
    <!-- X button -->
    <router-link to="/"><div class="text-right text-[50px]">X</div></router-link>  
    <!-- Header -->
    <div class="font-bold">
        <h1 class="text-[40px]">Mow Lawn</h1>
        <p class="text-[17px]">$100</p>
        <p class="text-[17px]">15 minutes</p>
    </div>
    <!-- Text body -->
    <div class="text-[17px]">
        Lorem ipsum dolor sit amet consectetur. Libero vel suspendisse dapibus enim pharetra sed. A imperdiet diam eu turpis volutpat laoreet lorem. Eget feugiat suscipit diam sagittis orci velit. Dictumst varius non fermentum ipsum sed orci nunc. Cras metus urna tellus ut nunc sed id orci massa. Sed in eget nunc tempus pulvinar.
    </div>
    <!-- Profile Card -->
    <div class="bg-[#E4F4FF] rounded-lg h-[100px] flex flex-row p-[16px] items-center space-x-4 shadow-lg">
        <img src="../../assets/bell.svg" class="size-[70px]"/>
        <div>
            <p class="text-[20px] font-bold">Jane Doe</p>
            <p class="text-[17px]">community rating: 5/5</p>
        </div>
    </div>
    <!-- Map -->


    <!-- Apply Button -->
    <button class="bg-[#59FF56] shadow-lg font-bold rounded-lg h-[42px]">Apply</button>
</div>
</template>

<script setup lang="ts">
</script>