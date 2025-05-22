<script setup>
import logo from '../assets/Crowdly.png'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

// shadcn/ui dropdown
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const route = useRoute()
const router = useRouter()
const isHomePage = computed(() => route.path === '/')

// Programmatic navigation for dropdown
function goTo(path) {
  router.push(path)
}
</script>

<template>
  <header class="bg-transparent absolute h-27 w-full px-6 py-4 flex justify-evenly items-center">

    <!-- NAV: Hidden on mobile, shown on md+ -->
    <nav class="hidden md:flex text-lg items-center gap-6">
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Crowdfy Logo" class="w-7 h-6" />
        <span class="font-bold text-lg"
          :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']">Crowdfy</span>
      </div>
      <router-link to="/" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']"
        class="cursor-pointer">Home</router-link>
      <router-link to="/explore" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']"
        class="cursor-pointer">Explore</router-link>
      <router-link to="/campaigns" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']"
        class="cursor-pointer">Campaigns</router-link>
      <router-link to="/profile" :class="['py-2 px-4 rounded', isHomePage ? 'text-white' : 'text-gray-700']"
        class="cursor-pointer">Profile</router-link>
    </nav>

    <!-- Icons Section -->
    <div class="flex items-center gap-3">
      <!-- Burger Menu: Only on mobile, with dropdown -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button class="w-10 h-10 flex md:hidden items-center justify-center rounded-md" :class="[isHomePage
            ? 'bg-transparent border border-white hover:bg-white/10'
            : 'bg-gray-100 border border-gray-100 hover:bg-gray-200']" aria-label="Menu">
            <i :class="[isHomePage ? 'fa-solid fa-bars text-white' : 'fa-solid fa-bars text-gray-600']"></i>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem @click="goTo('/')">
            <i class="fa-solid fa-house mr-2"></i> Home
          </DropdownMenuItem>
          <DropdownMenuItem @click="goTo('/explore')">
            <i class="fa-solid fa-compass mr-2"></i> Explore
          </DropdownMenuItem>
          <DropdownMenuItem @click="goTo('/campaigns')">
            <i class="fa-solid fa-bullhorn mr-2"></i> Campaigns
          </DropdownMenuItem>
          <DropdownMenuItem @click="goTo('/profile')">
            <i class="fa-solid fa-user mr-2"></i> Profile
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <form action="/search" method="GET">
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10"
            :class="[isHomePage ? 'bg-white/20 text-white placeholder:text-gray-200 border-white' : 'bg-gray-100 text-gray-700 placeholder:text-gray-400 border-gray-300']" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-6" :class="[isHomePage ? 'text-white' : 'text-gray-600']" />
          </span>
        </div>
      </form>
      <button class="w-10 h-10 flex items-center justify-center rounded-md" :class="[isHomePage
        ? 'bg-transparent border border-white hover:bg-white/10'
        : 'bg-gray-100 border border-gray-100 hover:bg-gray-200']">
        <i :class="[isHomePage ? 'fa-solid fa-plus text-white' : 'fa-solid fa-plus text-gray-600']"></i>
      </button>
      <img src="/src/assets/emoji.png" alt="User" class="w-10 h-10 rounded-full bg-lime-400" />
      <button class="w-10 h-10 flex items-center justify-center rounded-md" :class="[isHomePage
        ? 'bg-transparent border border-white hover:bg-white/10'
        : 'bg-gray-100 border border-gray-100 hover:bg-gray-200']">
        <i :class="[isHomePage ? 'fa-solid fa-gear text-white' : 'fa-solid fa-gear text-gray-600']"></i>
      </button>
    </div>
  </header>
</template>
