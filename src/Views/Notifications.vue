<template>
  <!-- Header and subheader on top (spanning both halves) -->
  <notificationsSubheader />

  <!-- Main content as two equal columns -->
  <div class="flex h-[calc(100vh-88px)]"> <!-- Adjust 88px to your header height -->
    <div class="w-1/2 h-full overflow-y-auto">
      <notificationsPanel />
    </div>
    <div class="w-1/2 h-full overflow-y-auto">
      <notificationsDetailView />
    </div>
  </div>
</template>

<script setup>
import notificationsPanel from '@/components/notificationsPanel.vue';
import notificationsSubheader from '@/components/notificationsSubheader.vue';
import notificationsDetailView from '@/components/notificationsDetailView.vue';
</script>
