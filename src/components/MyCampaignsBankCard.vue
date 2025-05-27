<template>
    <div class="w-[430px] h-[330px]">
        <div class="flex overflow-hidden  rounded-[27px] relative">
            <div class="grow bg-lime-300 pt-[32px] pl-[21px]" :class="bgColorClass">
                <div class="pb-[48px] pl-[6px]" :class="textColorClass">
                    <p class="font-semibold text-sm">Crowdify</p>
                    <h4 class="font-semibold text-[27px]/8 w-[200px]">{{ title }}</h4>
                </div>
                <div class="pb-[24px]" :class="textColorClass">
                    <p class="uppercase font-semibold text-[10px]">{{ name }}</p>
                    <p class="font-semibold">{{ card_number }}</p>
                </div>
            </div>
            <img src="/src/assets/cardIcon.svg" alt="" class="absolute bottom-4 right-5">
            <img src="/src/assets/crowdfyIcon.svg" alt="" class="absolute top-8 right-5">
            <img :src="image" class="object-center object-cover w-[108px] h-[100]" alt="">
        </div>
        <div class="flex justify-between mt-5 mb-2">
            <p>Total donations</p>
            <p class="font-semibold text-[19px] text-gray-600">{{ amount_collected }}</p>
        </div>
        <Progress :model-value="percentage" />
    </div>
</template>

<script setup>
    import { Progress } from './ui/progress';
    defineProps({
        title: String,
        name: String,
        card_number: String,
        amount_collected: String,
        percentage: String, 
        bgColorClass: String,
        textColorClass: String,
        progressColorClass: String,
        progressBgColorClass: String,
        image: String
    })
</script>