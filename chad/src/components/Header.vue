<script setup>
import logo from '../assets/Crowdly.png'
import { Input } from '@/components/ui/input'
</script>

<template>
  <header class="bg-white px-6 py-4 flex justify-between items-center ml-16 mt-5 mr-16 mb-5">
   
    <nav class="text-sm flex items-center gap-6">
      <div class="flex items-center gap-2">
      <img :src="logo" alt="Crowdfy Logo" class="w-7 h-6" />
      <span class="font-bold text-lg">Crowdfy</span>
      </div>
      <a href="#" class="text-gray-500 hover:text-black">Home</a>
      <a href="#" class="text-gray-500 hover:text-black">Explore</a>
      <a href="#" class="text-gray-500 hover:text-black">Campaigns</a>
      <a href="#" class="text-gray-400 hover:text-black">Profile</a>
    </nav>

    <!-- Icons Section -->
    <div class="flex items-center gap-3">
      <Input />
      <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <i class="fa-solid fa-plus text-gray-600"></i>
      </button>
      <img src="https://your-avatar-url.com/avatar.png" alt="User" class="w-10 h-10 rounded-full" />
      <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
        <i class="fa-solid fa-gear text-gray-600"></i>
      </button>
    </div>
  </header>
</template>