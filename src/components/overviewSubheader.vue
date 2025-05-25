<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
</script>
<template>
    <div class=" pt-30 pb-2 w-full">
        <div class="border-2 pt-2 pb-2">
            <div class="flex flex-row justify-between items-center mr-16 ml-16">
                <!-- Nav bar -->
                <div class="mr-8 ml-8">
                    <ul class="flex flex-row items-center gap-3">
                        <button  class="text-[#1E293B] font-medium rounded-md border-4 border-[#F7FEE7] bg-[#D9F99D] pr-3 pl-3 pt-2 pb-2">
                            <i class="fa-regular fa-eye"></i>
                            Overview
                        </button>
                        <button class="text-[#1E293B] font-medium pr-3 pl-3 pt-2 pb-2">
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
</template>