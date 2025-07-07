<template>
    <div class="flex gap-6">
        <div class="relative w-[216px] h-[166px] rounded-[12px] border-1 border-gray-200">
            <div class="p-6">
                <p class="text-gray-600 font-medium">Donations</p>
                <h3 class="text-[30px] font-semibold">$1,280</h3>
            </div>
            <div class="border-t pt-1 flex flex-row-reverse">
                <Button variant="ghost" class="text-lime-600">View analytics</Button>
                <i class="fa-solid fa-ellipsis-vertical text-gray-400 absolute top-5 right-5"></i>
            </div>
        </div>
        <div class="relative w-[216px] h-[166px] rounded-[12px] border-1 border-gray-200">
            <div class="p-6">
                <p class="text-gray-600 font-medium">Signatures</p>
                <h3 class="text-[30px] font-semibold">6,785</h3>
            </div>
            <div class="border-t pt-1 flex flex-row-reverse">
                <Button variant="ghost" class="text-lime-600">View report</Button>
                <i class="fa-solid fa-ellipsis-vertical text-gray-400 absolute top-5 right-5"></i>
            </div>
        </div>
        <div class="relative w-[216px] h-[166px] rounded-[12px] border-1 border-gray-200">
            <div class="p-6">
                <p class="text-gray-600 font-medium">Likes</p>
                <h3 class="text-[30px] font-semibold">77</h3>
            </div>
            <div class="border-t pt-1 flex flex-row-reverse">
                <Button variant="ghost" class="text-lime-600">View report</Button>
                <i class="fa-solid fa-ellipsis-vertical text-gray-400 absolute top-5 right-5"></i>
            </div>
        </div>
        <div class="relative w-[216px] h-[166px] rounded-[12px] border-1 border-gray-200">
            <div class="p-6">
                <p class="text-gray-600 font-medium">Views</p>
                <h3 class="text-[30px] font-semibold">13,767</h3>
            </div>
            <div class="border-t pt-1 flex flex-row-reverse">
                <Button variant="ghost" class="text-lime-600">View report</Button>
                <i class="fa-solid fa-ellipsis-vertical text-gray-400 absolute top-5 right-5"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Button } from './ui/button';
</script>