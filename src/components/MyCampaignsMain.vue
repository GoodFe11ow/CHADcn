<template>
    <myCampagnSubheader />
    <div>
        <div class="w-[936px] m-auto">
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
        <div>

        </div>
    </div>
</template>

<script setup>
    import MyCampaignsStatistic from './MyCampaignsStatistic.vue';
    import { Button } from './ui/button';
    import MyCampaignsFlex from './MyCampaignsFlex.vue';
    import MyCampaignsNav from './MyCampaignsNav.vue';
    import myCampagnSubheader from './myCampagnSubheader.vue';
</script>