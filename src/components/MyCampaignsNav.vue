<template>
    <div class="flex justify-between px-3 pt-6 pb-5">
        <div>
            <h3 class="text-xl font-semibold">Your campaings (2)</h3>
        </div>
        <div class="flex flex-row h-[40px] overflow-hidden rounded-lg border border-[rgb(226,232,240)]">
            <Button variant="secondary" class="rounded-none h-10 w-[50px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    All
            </Button>
            <Button variant="secondary" class="rounded-none h-10 w-[137px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
            <i class="fa-solid fa-stopwatch"></i>In Progress
            </Button>
            <Button variant="secondary" class="rounded-none h-10 w-[134px] bg-[#F1F5F9] hover:bg-[#e4eaf1]">
                    <i class="fa-solid fa-check-double"></i>Concluded
            </Button>
        </div>
    </div>
</template>

<script setup>
    import { Button } from './ui/button';
</script>