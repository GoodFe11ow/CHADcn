<template>
    <div class="pt-44 flex justify-between max-w-[80%] m-auto">
        <div>
            <h1 class="mb-1 text-3xl font-semibold">My campaigns</h1>
            <p class="text-gray-600">Your current sales summary and activity.</p>
        </div>
        <div>
            <Button class="bg-lime-200 text-black border-4 border-lime-50 border-solid hover:bg-lime-300 hover:border-lime-100"><i class="fa-solid fa-cloud-arrow-up"></i>Export report</Button>
            <Button class="bg-transparent text-black border-1 border-slate-200 hover:bg-gray-200"><i class="fa-solid fa-circle-plus"></i>Invite</Button>
        </div>
    </div>
</template>

<script setup>
    import { Button } from './ui/button';
</script>