<template>
  <div class=" pt-30 pb-2 w-full"><!-- I put the code here instead of the component so that the page change works -->
        <div class="border-2 pt-2 pb-2">
            <div class="flex flex-row justify-between items-center mr-16 ml-16">
                <!-- Nav bar -->
                <div class="mr-8 ml-8">
                    <ul class="flex flex-row items-center gap-3">
                        <button @click="activeTab = 'overview'" :class="{'rounded-md border-4 border-[#F7FEE7] bg-[#D9F99D]': activeTab === 'overview'
                         }" class=" cursor-pointer text-[#1E293B] font-medium pr-3 pl-3 pt-2 pb-2">
                            <i class="fa-regular fa-eye"></i>
                            Overview
                        </button>
                        <button @click="activeTab = 'myCampaigns'" class="cursor-pointer text-[#1E293B] font-medium pr-3 pl-3 pt-2 pb-2" :class="{
                          'rounded-md border-4 border-[#F7FEE7] bg-[#D9F99D]': activeTab ==='myCampaigns'
                        }">
                            <i class="fa-regular fa-paper-plane"></i>
                            My campaigns
                        </button>
                    </ul>
                </div> 
            <!-- Search bar -->
                <div>
                    <form action="/search" method="GET">
                        <div class="relative w-full max-w-sm items-center">
                            <Input id="search" type="text" placeholder="Search..." class="pl-10" />
                            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                            <Search class="size-6 text-muted-foreground" />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  <OverviewMainPage v-if="activeTab === 'overview'" /> <!-- made 2 pages copmonents for overview and my campaigns -->
  <MyCampaignsMain v-else-if="activeTab === 'myCampaigns'" />
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('overview'); //overview opens by default
import MyCampaignsMain from '@/components/MyCampaignsMain.vue';
import OverviewMainPage from '@/components/OverviewMainPage.vue';
</script>