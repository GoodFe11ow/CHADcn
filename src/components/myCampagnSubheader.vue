<template>
    <div class="mr-16 ml-16 flex justify-center pt-10 pb-10">
    <div class="flex flex-row w-full justify-between items-start">
      <div>
        <h4 class="font-sans font-semibold text-[48px] leading-[30px] mb-4 text-[#101828]">My campaigns</h4>
        <p class="font-jakarta font-normal text-[16px] leading-[24px] text-[#475467] pt-2">
          Your current sales summary and activity.        
        </p>
      </div>
      <div class="flex flex-row gap-3 justify-center items-center">
          <Button variant="campaign" class="rounded-lg border-4 border-[#F7FEE7] bg-[#D9F99D] w-40 h-12 ">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            Export report
          </Button> 
          <Button variant="campaign" class="rounded-md w-22 h-10 bg-white border-2 border-[#E2E8F0]">
            <i class="fa-solid fa-circle-plus"></i>
            Invite
          </Button> 
      </div>
    </div>
  </div> 
</template>

<script setup>
    import { Button } from './ui/button';
</script>