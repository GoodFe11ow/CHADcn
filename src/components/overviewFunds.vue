<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

</script>
<template>
    <div class="flex flex-col gap-4 w-[200px] lg:w-[400px]">
        <div class="shadow-sm border border-[#EAECF0] p-4 rounded-[12px] flex flex-col gap-4" style="box-shadow: 0px 1px 3px 0px #1018281A;">
            <p class="text-[#475467] font-inter font-semibold text-[20px] leading-[28px] tracking-[-0.035em]">
                <i class="fa-solid fa-hand-holding-dollar text-yellow-300"></i> Funds donated to this campaign
            </p>
            <p class="font-inter font-normal text-[30px] leading-[36px] tracking-[-0.0075em] text-[#1E293B]">
                $15.000 / <span class="font-inter font-bold text-[30px] leading-[36px] tracking-[-0.0075em]">$20.000</span>
            </p>
            <Progress :model-value="75" />
            <div class="flex flex-col gap-4">
                <p class="font-plus-jakarta font-normal text-[16px] leading-[24px] tracking-normal text-[#475467]">185 doações</p>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-row gap-4">
                        <Avatar class="bg-[#D9F99D] h-11 w-11">
                            <AvatarImage src="src/assets/memojis.png" />
                        </Avatar>                            
                        <div>
                            <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">Marilyn Aminoff</p>
                            <div class="flex flex-row gap-2 justify-start items-center">
                                <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                    $39.03
                                </p>
                                <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                    &bull; 8 horas
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <Avatar class="bg-[#D9F99D] h-11 w-11">
                            <AvatarImage src="src/assets/memojis.png" />
                        </Avatar>                            
                        <div>
                            <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">Cheyenne Dokidis</p>
                            <div class="flex flex-row gap-2 justify-start items-center">
                                <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                    $50.00
                                </p>
                                <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                    &bull; 7 horas
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <Avatar class="bg-[#D9F99D] h-11 w-11">
                            <AvatarImage src="src/assets/memojis.png" />
                        </Avatar>                            
                        <div>
                            <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">Miracle Franci</p>
                            <div class="flex flex-row gap-2 justify-start items-center">
                                <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                    $51.04
                                </p>
                                <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                    &bull; 5 horas
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <Avatar class="bg-[#D9F99D] h-11 w-11">
                            <AvatarImage src="src/assets/memojis.png" />
                        </Avatar>                            
                        <div>
                            <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">Adison Franci</p>
                            <div class="flex flex-row gap-2 justify-start items-center">
                                <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                    $57.25
                                </p>
                                <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                    &bull; 4 horas
                                </p>
                            </div>   
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <Avatar class="bg-[#D9F99D] h-11 w-11">
                            <AvatarImage src="src/assets/memojis.png" />
                        </Avatar>                            
                        <div>
                            <p class="font-sans font-semibold text-[18px] leading-[28px] text-[#101828]">Jocelyn Rhiel Madsen</p>
                            <div class="flex flex-row gap-2 justify-start items-center">
                                <p class="font-sans font-medium text-[14px] text-[#1E293B]">
                                    $84.60
                                </p>
                                <p class="font-sans font-medium text-[14px] leading-[14px] text-[#002251]">
                                    &bull; 10 horas
                                </p>
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center items-center gap-4">
                    <Button variant="campaign" class="rounded-lg border-4 border-[#F7FEE7] bg-[#D9F99D] w-40 h-12 ">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        Share Campaign
                    </Button> 
                    <Button variant="campaign" class="rounded-md w-46 h-10 bg-white border-2 border-[#E2E8F0]">
                        <i class="fa-regular fa-heart"></i>
                        Like
                    </Button> 
                </div>
            </div>
        </div>
        <div class="shadow-sm border border-[#EAECF0] p-4 rounded-[12px] flex flex-col gap-4" style="box-shadow: 0px 1px 3px 0px #1018281A;">
            <p class="text-[#475467] font-inter font-semibold text-[20px] leading-[28px] tracking-[-0.035em]">
                <i class="fa-solid fa-thumbs-up text-yellow-300"></i> Fund this campaign
            </p>
              <div class="grid w-full max-w-sm items-center gap-4">
                <div class="grid w-full max-w-sm items-center gap-2">
                    <Label for="funding">Funding</Label>
                    <Input id="funding" type="funding" placeholder="0.50 ETH" />
                    <p class="font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[#64748B]">~$950,23</p>                    
                </div>
                <div class="grid w-full max-w-sm items-center gap-2">
                    <Label for="support">Words of support</Label>
                    <textarea id="support" type="support" class="w-[364px] h-22 border-2 rounded-b-lg" placeholder=" you a nice weekend and stay strong guys, I'm here with you all 💪🫡💚️"></textarea>
                    <p class="font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[#64748B]">Not only numbers make the difference on our lives :)</p>                    
                </div>
                <Button type="donate" class="bg-[#84CC16]">
                    <i class="fa-solid fa-cube"></i>
                    Donate now
                </Button>
                <div class="flex flex-row justify-center items-center gap-4">
                    <Progress :model-value="33" />
                    <p class="font-sans font-normal text-sm leading-6 align-middle text-[#344054]">1/3</p>
                </div>
            </div>
        </div>
    </div>
</template>