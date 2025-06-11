<script setup lang="ts">
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

</script>
<template>
    <div class="flex flex-col mr-16 ml-16 ">
        <div class="pt-4 pb-4 border-b-2 flex flex-col h-[165px] justify-between">
            <h4 class="font-inter font-semibold text-[20px] leading-[28px] text-[#101828]">
                <i class="fa-solid fa-users pr-2"></i>Organizadora</h4>
            <div class="flex flex-row gap-4">
                <Avatar class="bg-[#D9F99D] h-11 w-11">
                    <AvatarImage src="src/assets/avatar1.png" />
                </Avatar>
                <div class="flex flex-col">
                    <p class="font-inter font-semibold text-[18px] leading-[28px] text-[#101828]">Sindy Rheaume</p>
                    <div class="flex flex-row gap-4">
                        <p class="font-inter font-medium text-[14px] leading-[14px] text-[#1E293B]">Bragança</p>
                        <p class="font-inter font-medium text-[14px] leading-[14px] text-[#002251]"> &bull; Organizadora</p>
                    </div>
                </div>
            </div>
        <Button variant="contract" class=" text-[#475467]">
            Contract
        </Button> 
        </div>
    </div>
<div class="flex flex-col mr-16 ml-16 ">
        <div class="pt-4 pb-4 border-b-2 flex flex-col justify-between">
            <h4 class="font-inter font-semibold text-[20px] leading-[28px] text-[#101828]">
                <i class="fa-solid fa-dove pr-2"></i>Words of support</h4>
            <div class="flex flex-row">
                <div class="flex flex-col pb-4 gap-4">
                    <div class="flex flex-col">
                        <p class="font-sans font-medium italic text-base leading-6 pt-4 pb-4 text-[#101828]">
                            I just wanted to help 💪
                        </p>
                        <div class="flex flex-row gap-4">
                            <Avatar class="bg-[#D9F99D] h-11 w-11">
                                <AvatarImage src="src/assets/memojis.png" />
                            </Avatar>
                            <div>
                                <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">
                                    Sindy Rheaume
                                </p>
                                <div class="flex flex-row gap-2 justify-start items-center">
                                    <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                        $150
                                    </p>
                                    <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                       &bull; 10 horas
                                    </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-sans font-medium italic text-base leading-6 pb-4 text-[#101828]">
                            Thinking of you two and hoping you get better soon! 🙏
                        </p>
                        <div class="flex flex-row gap-4">
                            <Avatar class="bg-[#D9F99D] h-11 w-11">
                                <AvatarImage src="src/assets/memojis.png" />
                            </Avatar>                            
                            <div>
                                <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">
                                    Michael O'Keefe
                                </p>
                                <div class="flex flex-row gap-2 justify-start items-center">
                                    <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                        $150
                                    </p>
                                    <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                        &bull; 10 horas
                                    </p>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-sans font-medium italic text-base leading-6 pb-4 text-[#101828]">
                            Keep strong both 
                        </p>
                        <div class="flex flex-row gap-4">
                            <Avatar class="bg-[#D9F99D] h-11 w-11">
                                <AvatarImage src="src/assets/memojis.png" />
                            </Avatar>
                            <div>
                                <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">
                                    Michael Millward
                                </p>
                                <div class="flex flex-row gap-2 justify-start items-center">
                                    <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                        $150
                                    </p>
                                    <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                       &bull; 10 horas
                                    </p>
                                </div>   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        <Button variant="showMore" class="text-[#475467]">
            Show more
        </Button> 
        </div>
    </div>
    <div class="mr-16 ml-16 pt-4 pb-4 border-b-2 flex flex-row justify-between">
        <p>Created on November 2nd, 2023</p>
        <i class="fa-solid fa-location-dot"></i>
    </div>
    <div class="mr-16 ml-16 pt-4 pb-4 flex flex-row gap-2 justify-start items-center">
        <i class="fa-solid fa-flag"></i>
        <p class="underline text-[#0F172A]">Denunciar esta campanha</p>
    </div>
    
</template>