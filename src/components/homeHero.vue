<template>
    <div class="w-full h-[1116px] bg-fixed pt-44" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }">
        <section class="flex flex-col justify-center text-center items-center max-w-[1140px] m-auto">
            <h1 class="text-white text-[89px]/22 font-semibold mb-7 w-220">Solve problems all around the world</h1>
            <p class="text-white text-[24px] font-semibold mb-20 w-120">Fund and sign campaigns and missions in all the 234 countries on the globe</p>
            <Button class="bg-lime-500 mb-3">Get Started</Button>
        </section>
    </div>
</template>

<script setup>
    import { Button } from './ui/button';
    import backgroundImage from '@/assets/mainBg.jpg';
</script>