<template>
    <div class="w-full h-full bg-fixed pt-35 lg:pt-44  pb-7" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
        <section class="flex flex-col justify-center text-center items-center w-full p-[5%] lg:m-auto">
            <h1 class="text-white text-[50px]/15 font-bold  lg:text-[89px]/22 lg:font-semibold mb-7 lg:w-220">Solve problems all around the world</h1>
            <p class="text-white text-[24px] font-semibold mb-10 lg:mb-20 lg:w-120">Fund and sign campaigns and missions in all the 234 countries on the globe</p>
            <Button class="bg-lime-500 mb-3">Get Started</Button>
            <p class="text-white font-medium mt-3">Already have an account?<a href="#" class="pl-1 underline underline-offset-3">Log in</a></p>
        </section>
        <campaignCard class="m-auto"/>
        <div class="flex justify-center items-center gap-1 lg:gap-3 bg-slate-50 lg:w-60 w-40 h-6 rounded-full m-auto mt-7">
            <div class="w-2 h-2 rounded p-1 bg-lime-500"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
            <div class="w-2 h-2 rounded p-1 bg-gray-200"></div>
        </div>
    </div>
</template>

<script setup>
    import campaignCard from '@/components/campaignCard.vue';
    import { Button } from './ui/button';
    import backgroundImage from '@/assets/mainBg.jpg';
</script>