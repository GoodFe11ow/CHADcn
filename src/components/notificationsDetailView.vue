<template>
    <div class="relative h-screen w-full">
        <!-- Background Image Layer -->
        <div class="relative h-full">
            <img src="@/assets/ImageProfile.png" alt="Countryside" class="w-full h-full object-cover" />
            <!-- Price Points -->
            <div v-for="(point, index) in pricePoints" :key="index"
                class="absolute bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                :style="{
                    top: point.top,
                    left: point.left,
                    right: point.right,
                    transform: 'translate(-50%, -50%)'
                }">
                <TrendingUp class="w-3 h-3 inline mr-1" />
                {{ point.amount }}
            </div>

            <!-- Floating Note -->
            <div class="absolute top-4 right-4 bg-green-100 text-green-800 p-3 rounded-lg shadow-lg max-w-xs">
                <p class="text-sm">Vai ficarótimo a introdução de passagem de dados do ambiente!</p>
                <div class="text-xs mt-2 text-green-600">yesterday</div>
            </div>
        </div>

        <!-- Campaign Details Card -->
        <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-t-2xl shadow-2xl p-6 overflow-y-auto max-h-[70vh] w-full max-w-2xl">
            <div class="flex items-start space-x-4">
                <div class="w-15 h-15 rounded-full bg-lime-400 flex items-center justify-center">
                    <img src="@/assets/emoji.png" class="w-15 h-15" />
                </div>
                <div class="flex-1">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">
                        Help us Teach English for Kids on China Countryside
                    </h2>
                    <p class="text-gray-600 text-sm mb-4">
                        I need about 9,000 signatures to deliver to my mayor in two weeks and get that great idea
                        more about our project...
                    </p>

                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                                <img src="@/assets/emoji.png" class="w-10 h-10" />
                            </div>
                            <div>
                                <div class="font-medium text-gray-900 flex items-center gap-2">
                                    Mateus Rodrigues
                                    <span class="flex items-center text-sm text-gray-500 ml-3">
                                        <i class="fa-solid fa-location-dot mr-1"></i>
                                        São Paulo, Brazil
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button class="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600">
                            Sign campaign
                        </button>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex -space-x-2">
                            <div v-for="(supporter, index) in supporters.slice(0, 8)" :key="index"
                                class="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs">
                                {{ supporter }}
                            </div>
                            <div
                                class="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs text-gray-600">
                                +99
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-gray-900">4,533/9,000</div>
                        </div>
                    </div>

                    <div class="w-full bg-gray-200 rounded-full h-2 mt-3">
                        <div class="bg-green-500 h-2 rounded-full" style="width: 50%"></div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Roadmap</h3>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3" v-for="(item, i) in roadmap" :key="i">
                                <div class="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
                                    <img src="@/assets/emoji.png" class="w-10 h-10"
                                        alt="Yellow smiling emoji with open mouth and cheerful expression, set against a transparent background" />
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center space-x-2">
                                        <span class="font-medium text-gray-900">{{ item.user }}</span>
                                        <span class="text-sm text-gray-500">{{ item.time }}</span>
                                    </div>
                                    <p class="text-sm text-gray-600">{{ item.action }}</p>
                                    <p v-if="item.description" class="text-sm text-gray-500 mt-1 italic">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { TrendingUp } from 'lucide-vue-next'
import { ref } from 'vue'

const pricePoints = [
    { amount: '$23.42', top: '15%', left: '60%' },
    { amount: '$12.31', top: '30%', left: '65%' },
    { amount: '$43.80', top: '20%', left: '85%' },
    { amount: '$53.88', top: '45%', left: '70%' },
    { amount: '$23.42', top: '35%', right: '15%' },
    { amount: '$51.21', top: '40%', right: '8%' }
]

const supporters = ['👤', '👤', '👤', '👤', '👤', '👤', '👤', '👤', '👤']

const roadmap = [
    {
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: "is gathering 9000 signs to city's prefecture",
        description: '"We need to deliver this about of 9,000 signs to the mayor to he approve us as international english teacher"',
        type: 'petition',
        isActive: true
    },
    {
        user: 'Mateus Rodrigues',
        time: 'in 20 days',
        action: 'Raise together $1000 to pay for our (2 persons) flights to 1st weeks'
    }
]
</script>
