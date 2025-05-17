<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="mr-16 ml-16 flex justify-center pt-44">
    <div class="flex flex-row w-full justify-between">
      <div>
        <h4 class="font-inter font-semibold text-[30px] text-[#101828]">Explore</h4>
        <p class="font-plus-jakarta font-normal text-[16px] leading-[24px] text-[#475467]">
          Where do you want to help          
        </p>
      </div>
      <div class="flex flex-row gap-3">
        <div class="flex flex-row gap-0 text-[#1F2937] w-[188px] h-[40px] rounded-lg overflow-hidden border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280D]">
          <Button variant="secondary" class="rounded-none w-24 h-10 hover:bg-[#e6e6e6]">
            <i class="fa-solid fa-arrow-up"></i>
            Price
          </Button> 
          <Button variant="secondary" class="rounded-none w-24 h-10 hover:bg-[#e6e6e6]">
            <i class="fa-solid fa-arrow-down"></i>
            Date
          </Button> 
        </div>
        <Button variant="secondary" class="w-[136px] h-[40px] text-white bg-[#84CC16] hover:bg-[#77b15e] rounded-lg border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#1018280D]">
          <i class="fa-solid fa-filter"></i>
          Show filters
        </Button> 
      </div>
    </div>
  </div> 
</template>


