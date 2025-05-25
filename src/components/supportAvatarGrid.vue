<template>
 <div class="pb-8 flex flex-wrap justify-center items-center mr-16 ml-16 f-full">
      <overviewAvatar
        v-for="(a, i) in articles"
        :key="i"
        :avatar="a.avatar"
        :author="a.author"
        :city="a.city"
        :name="a.name"
        :message="a.message"
        :price="a.price"
        :hour="a.hour"
      />
 </div>
</template>

<script setup>
import overviewAvatar from '../components/overviewAvatar.vue'

const articles = [
  {
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    city: 'Bragança',
    name: 'Organizadora',
  },
  {
    message: 'I just wanted to help 💪',
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    price: '$150',
    hour: '10 Horas',
  },
  {
    message: 'I just wanted to help 💪',
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    price: '$150',
    hour: '10 Horas',
  },
  {
    message: 'I just wanted to help 💪',
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    price: '$150',
    hour: '10 Horas',
  },
  {
    message: 'I just wanted to help 💪',
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    price: '$150',
    hour: '10 Horas',
  },
  {
    message: 'I just wanted to help 💪',
    avatar: 'https://picsum.photos/396/176',
    author: 'Sindy Rheaume',
    price: '$150',
    hour: '10 Horas',
  },

]
</script>
