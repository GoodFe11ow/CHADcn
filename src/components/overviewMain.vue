<template>
    <div class="flex flex-row mb-20">
        <div class="flex flex-col">
            <overviewArticle />
            <overviewAvatar />
        </div>
        <OverviewFunds />
    </div>

</template>

<script setup>
import overviewArticle from './overviewArticle.vue';
import overviewAvatar from './overviewAvatar.vue';
import OverviewFunds from './overviewFunds.vue';
</script>