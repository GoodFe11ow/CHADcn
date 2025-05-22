<script setup>
  import { Input } from '@/components/ui/input'
  import { Button } from "@/components/ui/button"
</script>

<template>
  <div class="border-t border-b border-gray-200 bg-white flex items-center justify-between px-6 py-2 w-full">
    <!-- Tabs -->
    <div class="flex items-center gap-2 ml-16">
      <Button variant="ghost"><i class="fa-solid fa-th-large text-gray-600 align-middle mt-[2px]"></i>Gallery</Button>
      <Button variant="ghost"><i class="fa-solid fa-location-dot text-gray-600 align-middle mt-[2px]"></i>Maps</Button>
      <Button variant="ghost"><i class="fa-solid fa-newspaper text-gray-600 align-middle mt-[2px]"></i>Feed</Button>
    </div>
    <!-- Search -->
    
      <div class="mr-16">
        <i class="fa-solid fa-search text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
        <Input class="pl-10" placeholder="Search..." />
      </div>
   </div>
  
</template>

