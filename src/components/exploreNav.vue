<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
    <div class="pr-8 pl-8 flex justify-center">
        <div class="flex flex-row w-full justify-between pt-8">
            <div class="flex flex-row w-[341px] h-[40px] overflow-hidden rounded-lg border border-[rgb(226,232,240)]">
                <Button variant="secondary" class="rounded-none h-10 w-[90px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    All views
                </Button>                
                <Button variant="secondary" class="rounded-none h-10 w-[121px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    <i class="fa-solid fa-file-signature"></i>
                    Petitions
                </Button>                
                <Button variant="secondary" class="rounded-none h-10 w-[130px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                   <i class="fa-solid fa-piggy-bank"></i>
                    Donations
                </Button>                
            </div>
            <div class=" flex flx-row w-[88px] h-[40px] rounded-lg border border-[#CBD5E1] overflow-hidden">
                <Button variant="secondary" class="rounded-none h-10 w-11 bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    <i class="fa-solid fa-list-ul"></i>
                </Button>   
                <Button variant="secondary" class=" rounded-none h-10 w-11 bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    <i class="fa-solid fa-location-dot"></i>
                </Button>   
            </div>
        </div>
    </div>

</template>