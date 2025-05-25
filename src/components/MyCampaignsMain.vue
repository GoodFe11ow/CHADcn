<template>
    <myCampagnSubheader />
    <div>
        <div>
            <div class=" border-1 border-gray-200">
                <MyCampaignsNav />
                <div class="flex flex-wrap gap-5">
                    <MyCampaignsBankCard />
                    <MyCampaignsBankCard />
                    <MyCampaignsBankCard />
                    <MyCampaignsBankCard />
                </div>
            </div>
            <div></div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup>
    import MyCampaignsBankCard from './MyCampaignsBankCard.vue';
    import MyCampaignsNav from './MyCampaignsNav.vue';
    import myCampagnSubheader from './myCampagnSubheader.vue';
</script>