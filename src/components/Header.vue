<script setup>
  import logo from '../assets/Crowdly.png'
  import { Input } from '@/components/ui/input'

  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const isHomePage = computed(() => route.path === '/');
</script>

<template>
  <header class="bg-transparent absolute w-full px-6 py-4 flex justify-evenly items-center">
   
    <nav class="text-lg flex items-center gap-6">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Crowdfy Logo" class="w-7 h-6" />
        <span class="font-bold text-lg" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']">Crowdfy</span>
      </div>
      <router-link to="/" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']" class="cursor-pointer">Home</router-link>
      <router-link to="/explore" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']" class="cursor-pointer">Explore</router-link>
      <router-link to="/campaigns" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']" class="cursor-pointer">Campaigns</router-link>
      <router-link to="/profile" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']" class="cursor-pointer">Profile</router-link>
    </nav>

    <!-- Icons Section -->
    <div class="flex items-center gap-3">
      <Input />
      <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <i class="fa-solid fa-plus text-gray-600"></i>
      </button>
      <img src="https://github.com/unovue.png" alt="User" class="w-10 h-10 rounded-full" />
      <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <i class="fa-solid fa-gear text-gray-600"></i>
      </button>
    </div>
  </header>
</template>