<template>
    <div class="max-w-[90%] xl:max-w-[40%] bg-white rounded-[12px] mt-6">
        <div class="flex flex-col items-center px-[3%]">
            <div class="border-b border-solid border-black rounded-full border-2 mt-5 mb-6 w-16"></div>
            <div class="flex w-full gap-4 mb-5">
                <Avatar class="w-10 h-10 lg:w-16 lg:h-16 bg-lime-400">
                    <AvatarImage src="/src/assets/emoji.png" class="mt-[3px]" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 class="font-semibold text-2xl">Help us Teach English for Kids on China Countryside</h3>
            </div>
            <p class="text-gray-600">I need about <span class="font-bold">9.000 signatures</span> to deliver to my mayor in two weeks and get that grant! Check more about our project and if you want to see how we are changing lovely children lifes on China countryside just teaching how they can use the internet.</p>
            <div class="flex mt-5 lg:gap-3">
                <Avatar class="w-8 h-8 lg:w-10 lg:h-10 bg-lime-400">
                    <AvatarImage class="mt-[3px]" src="/src/assets/emoji.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Badge class="text-gray-600 text-md mr-5">Mateus Rodrigues</Badge>
                <p class="ml-3 xl:mr-20 xl:flex text-md font-medium hidden items-center text-gray-600 "><i class="fa-solid fa-location-dot mr-2 text-gray-400"></i> São Paulo, Brazil</p>
                <Button class="bg-lime-500 cursor-pointer">Sign campaing</Button>
            </div>
            <div class="mt-6 flex gap-10 xl:gap-5 items-center">
                <div class="hidden xl:flex xl:w-56 items-center">
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
                <Progress class="bg-lime-100 w-40 xl:w-45" :model-value="50"/>
                <h2 class="font-semibold text-2xl">4.533/9.000</h2>
            </div>
        </div>
        <div class="flex flex-col gap-1 xl:gap-0 px-[3%] mt-6">
            <div class="flex justify-between">
                <h3 class="font-semibold text-md"><span class="text-2xl">Roadmap</span> (Coming Soon)</h3>
                <div class="bg-slate-50 rounded-full flex gap-3 w-16 justify-center items-center">
                    <div class="w-2 h-2 bg-lime-500 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <div class="flex flex-col items-center gap-1">
                    <div>
                        <Avatar class="w-8 h-8 xl:w-12 xl:h-12 bg-lime-400">
                            <AvatarImage class="mt-[3px]" src="/src/assets/emoji.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div class="border-l-2 solid border-gray-200 h-17"></div>
                </div>
                <div>
                    <p class="font-medium text-xs text-slate-400"><span class="text-gray-600 mr-2 text-base">Mateus Rodrigues</span> in 20 days<br><span class="text-sm font-normal text-gray-600">is gathering <span class="text-lime-500 font-bold">9000</span> signs to city's prefecture</span></p>
                    <p class="text-slate-600 text-sm mt-3">“We need to deliver this about of 9.000 signs to the mayor to he approve us as international english teacher”</p>
                </div>
            </div>
            <div class="flex gap-3 mt-1">
                <div class="flex flex-col items-center gap-1">
                    <div>
                        <Avatar class="w-8 h-8 xl:w-12 xl:h-12 bg-lime-400">
                            <AvatarImage class="mt-[3px]" src="/src/assets/emoji.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div class="border-l-2 solid border-gray-200 h-17"></div>
                </div>
                <div>
                    <p class="font-medium text-xs text-gray-600"><span class="text-gray-600 mr-2 text-base">Mateus Rodrigues</span> in 20 days<br><span class="text-sm font-normal text-gray-600">Raise together <span class="text-slate-600 font-bold">$1000</span> to pay for our  (2 persons) flights to 1st weeks</span></p>
                    <div class="w-40 h-10 bg-[#0F172A80] flex justify-center items-center text-white rounded-[6px] mt-3">
                        <i class="fa-solid fa-spinner mr-2 animate-spin"></i>
                        Fund campaing
                    </div>
                </div>
            </div>
            <div class="flex gap-3 mt-1">
                <div class="flex flex-col items-center gap-1">
                    <div>
                        <Avatar class="w-8 h-8 xl:w-12 xl:h-12 bg-lime-400">
                            <AvatarImage class="mt-[3px]" src="/src/assets/emoji.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div class="border-l-2 solid border-gray-200 h-17"></div>
                </div>
                <div>
                    <p class="font-medium text-xs text-gray-600"><span class="text-gray-600 mr-2 text-base">Mateus Rodrigues</span> in 20 days<br><span class="text-sm font-normal text-gray-600">Make <span class="text-purple-600 font-bold">300 children</span> pass on the English proficiency test on China</span></p>
                    <div class="flex gap-1 mt-7">
                        <div class="w-12 h-12 rounded-full bg-[#DDA83A] flex justify-center items-center text-white font-semibold text-2xl relative">3<img src="/src/assets/flag.png" class="w-4 h-4 rounded-full absolute bottom-0 right-0 border-white border"></div>
                        <div class="w-12 h-12 rounded-full bg-[#4B9F38] flex justify-center items-center text-white font-semibold text-2xl relative">2<img src="/src/assets/flag.png" class="w-4 h-4 rounded-full absolute bottom-0 right-0 border-white border"></div>
                        <div class="w-12 h-12 rounded-full bg-[#C5192E] flex justify-center items-center text-white font-semibold text-2xl relative">4<img src="/src/assets/flag.png" class="w-4 h-4 rounded-full absolute bottom-0 right-0 border-white border"></div>
                    </div>
                </div>
            </div>
            <div class="flex gap-3 mt-3">
                <div class="flex flex-col items-center gap-1">
                    <div>
                        <Avatar class="w-8 h-8 xl:w-12 xl:h-12 bg-lime-400">
                            <AvatarImage class="mt-[3px]" src="/src/assets/emoji.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div>
                    <p class="font-medium text-xs text-gray-600"><span class="text-gray-600 mr-2 text-base">Mateus Rodrigues</span>2 min ago<br><span class="text-sm font-normal text-gray-600">You earned <span class="text-purple-600 font-bold">300</span> uSDG + <span class="text-purple-600 font-bold">10.000</span> XP</span></p>
                    <Button class="bg-purple-600 mt-3 mb-8"><i class="fa-brands fa-ethereum"></i>Get 300 uSDG</Button>
                </div>
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