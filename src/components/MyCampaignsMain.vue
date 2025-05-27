<template>
    <myCampagnSubheader />
    <div class="mb-6 flex gap-10 justify-center">
        <div class="w-[936px]">
            <div class=" border-1 border-gray-200 rounded-[12px] mb-6">
                <MyCampaignsNav />
                <MyCampaignsFlex />
                <div class="py-7 px-6 flex justify-between border-t-1">
                    <Button variant="ghost" class="text-lime-600 cursor-pointer hover:bg-gray-100">Need help?</Button>
                    <Button variant="outline" class="cursor-pointer">Manage campagins</Button>
                </div>
            </div>
            <div>
                <MyCampaignsStatistic />
            </div>
        </div>
        <div class="w-[240px]">
           <div class="flex mb-6">
                <p class="grow text-lg font-semibold">Activity</p>
                <p class="font-semibold text-gray-600">View all</p>
           </div>
           <div class="flex flex-col gap-5">
                <activityItem 
                v-for="i in 9" :key="i"
                />
           </div> 
        </div>
    </div>
</template>

<script setup>
    import activityItem from './activityItem.vue';
    import MyCampaignsStatistic from './MyCampaignsStatistic.vue';
    import { Button } from './ui/button';
    import MyCampaignsFlex from './MyCampaignsFlex.vue';
    import MyCampaignsNav from './MyCampaignsNav.vue';
    import myCampagnSubheader from './myCampagnSubheader.vue';
</script>