<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
defineProps(['title', 'desc', 'author', 'image', 'percentage', 'price'])

const parsePercentage = (str) => parseFloat(str.replace('%', ''))
</script>
<template>
    <div class="pr-8 pl-8 flex justify-center">
        <div class="flex flex-row flex-wrap justify-evenly">
            <!-- img card -->
            <div class="flex flex-col gap-4 w-[396px] h-[424px] shadow-sm border border-gray-200 rounded-lg overflow-hidden relative">
                <!-- img part -->
                <div> 
                    <img src="https://picsum.photos/396/176" alt="">
                    <div class="flex flex-row gap-2 absolute top-33 right-2">
                        <Button variant="imageCard" class="">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </Button> 
                        <Button variant="imageCard" class="">
                            <i class="fa-regular fa-heart"></i>
                        </Button>                         
                    </div>
                </div>
                <div class="flex flex-col">
                    <!-- avatar and name part -->
                    <div class="flex flex-row pl-3">
                        <Avatar>
                            <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Badge>
                            <p class="text-[#475467] font-medium text-base leading-6 tracking-normal font-plus-jakarta">{{ author }}</p>
                        </Badge>
                    </div>
                    <!-- text part -->
                    <div class="p-2 flex flex-col justify-between gap-4">
                        <h3 class="text-gray-900 font-semibold text-2xl leading-8 tracking-tight font-inter">{{ title }}</h3>
                        <p class="text-gray-500 font-normal text-base leading-6 tracking-normal font-plus-jakarta">{{ desc }}</p>
                        <Progress :model-value="parsePercentage(percentage)" />                        
                        <div class="flex flex-row justify-between">
                            <div class="flex flex-row justify-center items-center">
                                <i class="fa-solid fa-gift text-slate-800 pr-1"></i>                            
                                <p class="text-slate-800 font-medium text-base font-plus-jakarta"> {{ price }}</p>
                            </div>
                            <p class="text-slate-800 font-medium text-base font-plus-jakarta">{{ percentage }}</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

