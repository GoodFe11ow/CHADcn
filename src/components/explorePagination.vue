<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

</script>

<template>  
    <div class="border-t-2 pt-8 pb-12 mr-16 ml-16">
        <Pagination v-slot="{ page }" :items-per-page="10" :total="100" :default-page="4">
        <PaginationContent v-slot="{ items }">
        <PaginationPrevious />
        <template v-for="(item, index) in items" :key="index">
            <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
            >
                {{ item.value }}
            </PaginationItem>
        </template>
        <PaginationEllipsis :index="4" />
        <PaginationNext />
        </PaginationContent>
        </Pagination>
    </div>    
</template>