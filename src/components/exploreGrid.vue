<template>
 <div class="md:col-span-2 space-y-12">
      <imageCard
        v-for="(a, i) in articles"
        :key="i"
        :title="a.title"
        :desc="a.desc"
        :author="a.author"
        :image="a.image"
        :percentage="a.percentage"
        :price="a.price"
      />
 </div>
</template>

<script setup>
import imageCard from '../components/imageCard.vue'


const articles = [
  {
    title: 'Ms. Saint-Martin Doranyia Pascal',
    desc: 'Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin...',
    author: 'Olivia Rhye',
    image: 'https://picsum.photos/200/300',
    percentage: '50%',
    price: ' €8,516.95',
  },
]
</script>
