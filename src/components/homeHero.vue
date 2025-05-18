<template>
    <div class="w-full h-[1116px] bg-fixed pt-44" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
        <section class="flex flex-col justify-center text-center items-center max-w-[1140px] m-auto">
            <h1 class="text-white text-[89px]/22 font-semibold mb-7 w-220">Solve problems all around the world</h1>
            <p class="text-white text-[24px] font-semibold mb-20 w-120">Fund and sign campaigns and missions in all the 234 countries on the globe</p>
            <Button class="bg-lime-500 mb-3">Get Started</Button>
            <p class="text-white font-medium mt-3">Already have an account?<a href="#" class="pl-1 underline underline-offset-3">Log in</a></p>
        </section>
        <campaignCard/>
    </div>
</template>

<script setup>
    import campaignCard from '@/components/campaignCard.vue';
    import { Button } from './ui/button';
    import backgroundImage from '@/assets/mainBg.jpg';
</script>