<template>
    <div class="w-full h-full bg-fixed pt-44 pb-7" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
        <section class="flex flex-col justify-center text-center items-center m-auto">
            <h1 class="text-white text-[89px]/22 font-semibold mb-7 w-220">Solve problems all around the world</h1>
            <p class="text-white text-[24px] font-semibold mb-20 w-120">Fund and sign campaigns and missions in all the 234 countries on the globe</p>
            <Button class="bg-lime-500 mb-3">Get Started</Button>
            <p class="text-white font-medium mt-3">Already have an account?<a href="#" class="pl-1 underline underline-offset-3">Log in</a></p>
        </section>
        <campaignCard class="m-auto"/>
        <div class="flex justify-center items-center gap-3 bg-slate-50 w-60 h-6 rounded-full m-auto mt-7">
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