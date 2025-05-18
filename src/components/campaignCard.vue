<template>
    <div class="max-w-[658px] bg-white rounded-[12px] mt-6">
        <div class="flex flex-col items-center px-[3%]">
            <div class="border-b border-solid border-black rounded-full border-2 mt-5 mb-6 w-16"></div>
            <div class="flex gap-4 mb-5">
                <Avatar class="w-16 h-16">
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 class="font-semibold text-2xl">Help us Teach English for Kids on China Countryside</h3>
            </div>
            <p class="text-gray-600">I need about <span class="font-bold">9.000 signatures</span> to deliver to my mayor in two weeks and get that grant! Check more about our project and if you want to see how we are changing lovely children lifes on China countryside just teaching how they can use the internet.</p>
            <div class="flex mt-5 gap-3">
                <Avatar class="w-10 h-10">
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Badge class="text-gray-600 text-md">Mateus Rodrigues</Badge>
                <p class="ml-3 mr-25 text-md font-medium flex items-center text-gray-600"><i class="fa-solid fa-location-dot mr-2 text-gray-400"></i> São Paulo, Brazil</p>
                <Button class="bg-lime-500 cursor-pointer">Sign campaing</Button>
            </div>
            <div class="mt-6 flex gap-5 items-center">
                <div class="flex w-56 items-center">
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-lime-50 rounded-full"><img src="/src/assets/emoji.png" alt=""></div>
                    <div class="aspect-square w-6 h-6 ml-[-5px] bg-gray-100 rounded-full text-[12px] pt-[3px]">+99</div>
                </div>
                <Progress class="bg-lime-100 w-53" :model-value="50"/>
                <h2 class="font-semibold text-2xl">4.533/9.000</h2>
            </div>
        </div>
        <div class="flex flex-col px-[3%] mt-6">
            <div class="flex justify-between">
                <h3 class="font-semibold text-md"><span class="text-2xl">Roadmap</span> (Coming Soon)</h3>
                <div class="bg-slate-50 rounded-full flex gap-3 w-16 justify-center items-center">
                    <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
</script>

<style>
    [data-slot="progress-indicator"].bg-primary {
        --primary: #84cc16 !important;
    }
</style>