<template>
    <div class="bg-white shadow-lg flex flex-col h-full">
        <!-- Header -->
        <div class="p-6 border-b">
            <h1 class="text-2xl font-semibold text-gray-900">Notifications</h1>
            <div class="flex mt-4 space-x-6">
                <button :class="['text-sm font-medium', activeTab === 'All views' ? 'text-gray-900' : 'text-gray-500']"
                    @click="activeTab = 'All views'">
                    All views
                </button>
                <button
                    :class="['text-sm font-medium flex items-center', activeTab === 'Funding' ? 'text-gray-900' : 'text-gray-500']"
                    @click="activeTab = 'Funding'">
                    <Heart class="w-4 h-4 mr-2" />
                    Funding
                </button>
                <button
                    :class="['text-sm font-medium flex items-center', activeTab === 'Signatures' ? 'text-gray-900' : 'text-gray-500']"
                    @click="activeTab = 'Signatures'">
                    <FileText class="w-4 h-4 mr-2" />
                    Signatures
                </button>
            </div>
        </div>

        <!-- Notifications List -->
        <div class="flex-1 overflow-y-auto">
            <div v-for="notification in notifications" :key="notification.id"
                class="p-4 border-b hover:bg-gray-50 cursor-pointer">
                <div class="flex items-start space-x-3">
                    <div class="w-10 h-10 rounded-full bg-lime-200 flex items-center justify-center">
                        <img src="@/assets/emoji.png" alt="Profile" class="w-10 h-10" />
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <span class="font-medium text-gray-900">{{ notification.user }}</span>
                            <span class="text-sm text-gray-500">{{ notification.time }}</span>
                            <div v-if="notification.isActive" class="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <p class="text-sm text-gray-600 mt-1">{{ notification.action }}</p>
                        <p v-if="notification.description" class="text-sm text-gray-500 mt-2 italic">
                            {{ notification.description }}
                        </p>
                        <button v-if="notification.hasButton" :class="[
                            'mt-3 px-4 py-2 rounded-md text-sm font-medium',
                            notification.buttonStyle === 'gray'
                                ? 'bg-gray-500 text-white hover:bg-gray-600'
                                : notification.buttonStyle === 'purple'
                                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                                    : 'bg-green-500 text-white hover:bg-green-600'
                        ]">
                            {{ notification.buttonText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="p-4 border-t bg-white">
            <div class="flex items-center justify-between">
                <button class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    @click="currentPage = Math.max(1, currentPage - 1)">
                    <ChevronLeft class="w-4 h-4" />
                    <span>Previous</span>
                </button>
                <div class="flex space-x-2">
                    <button v-for="page in [1, 2, 3]" :key="page" :class="[
                        'w-8 h-8 rounded',
                        page === currentPage ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                    ]" @click="currentPage = page">
                        {{ page }}
                    </button>
                    <span class="text-gray-400">...</span>
                    <button v-for="page in [8, 9, 10]" :key="page" :class="[
                        'w-8 h-8 rounded',
                        page === currentPage ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                    ]" @click="currentPage = page">
                        {{ page }}
                    </button>
                </div>
                <button class="flex items-center space-x-2 text-gray-600 hover:text-gray-900" @click="currentPage++">
                    <span>Next</span>
                    <ChevronRight class="w-4 h-4" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, Heart, FileText } from 'lucide-vue-next'

const activeTab = ref('All views')
const currentPage = ref(1)

const notifications = ref([
    {
        id: 1,
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: "is gathering 9000 signs to city's prefecture",
        description: '"We need to deliver this about of 9,000 signs to the mayor to he approve us as international english teacher"',
        type: 'petition',
        isActive: true
    },
    {
        id: 2,
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: 'is raising $1000 to afford their travel costs (2 persons)',
        type: 'funding',
        hasButton: true,
        buttonText: 'Fund campaign',
        isActive: true
    },
    {
        id: 3,
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: 'is raising $1000 to afford their travel costs (2 persons)',
        type: 'funding',
        hasButton: true,
        buttonText: 'Fund campaign',
        isActive: true
    },
    {
        id: 4,
        user: 'Mateus Rodrigues',
        time: '2 mins ago',
        action: 'Your 300 uSDG + 10,000 XP will be available in 3 days',
        hasButton: true,
        buttonText: 'Get 300 uSDG',
        buttonStyle: 'gray'
    },
    {
        id: 5,
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: 'is teaching english to 300 chinese children',
        hasButton: true,
        buttonText: 'Write Words of Support',
        buttonStyle: 'green'
    },
    {
        id: 6,
        user: 'Mateus Rodrigues',
        time: '2 mins ago',
        action: 'Your earned 300 uSDG + 10,000 XP',
        hasButton: true,
        buttonText: 'Get 300 uSDG',
        buttonStyle: 'purple'
    },
    {
        id: 7,
        user: 'Mateus Rodrigues',
        time: '2 mins ago',
        action: 'Your 300 uSDG + 10,000 XP will be available in 3 days',
        hasButton: true,
        buttonText: 'Get 300 uSDG',
        buttonStyle: 'gray'
    }
])
</script>
