<template>
    <div class="w-[430px] h-[330px]">
        <div class="flex overflow-hidden  rounded-[27px] relative">
            <div class="grow bg-lime-300 pt-[32px] pl-[21px]">
                <div class="pb-[48px] pl-[6px]">
                    <p class="font-semibold text-sm">Crowdify</p>
                    <h4 class="font-semibold text-[27px]/8 w-[200px]">Renovate Kingstown Orphanage</h4>
                </div>
                <div class="pb-[24px]">
                    <p class="uppercase text-[10px]">ana yamamoto</p>
                    <p class="font-semibold">5226 6749 6789 4341</p>
                </div>
            </div>
            <img src="/src/assets/cardIcon.svg" alt="" class="absolute bottom-4 right-5">
            <img src="/src/assets/crowdfyIcon.svg" alt="" class="absolute top-8 right-5">
            <img src="/src/assets/bankcardimg.png" class="object-center object-cover w-[108px] h-[100]" alt="">
        </div>
        <div class="flex justify-between mt-5 mb-2">
            <p>Total donations</p>
            <p class="font-semibold text-[19px] text-gray-600">$2,840.40</p>
        </div>
        <Progress model-value="55" />
    </div>
</template>

<script setup>
    import { Progress } from './ui/progress';
</script>