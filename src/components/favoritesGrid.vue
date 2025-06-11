<template>
 <div class="pb-8 flex flex-wrap justify-center items-center mr-16 ml-16 f-full">
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
    image: 'https://picsum.photos/396/176',
    author: 'Olivia Rhye',
    title: 'Ms. Saint-Martin Doranyia Pascal',
    desc: 'Hi This is your Miss Teen Carnival 2022 Doranyia Pascal I will be representing Saint Martin...',
    percentage: '50%',
    price: '€8,516.95',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Olivia Rhye',
    title: 'Educación en Academia de...',
    desc: 'Hola, mi nombre es Xhaomi Torres soy la madre de Joseph Y. Christian Torres. Joseph es...',
    percentage: '50%',
    price: '€9,977.32',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Olivia Rhye',
    title: 'Aidez la famille Mimba....',
    desc: 'À la mi-septembre, les enfants MIMBA ont été profondément affectés par la...',
    percentage: '75%',
    price: '€8,129.86',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Olivia Rhye',
    title: 'Huni Kuin Sacred Support',
    desc: 'I tend not to speak too much about this work, perhaps it is to be experienced and not to be explained.',
    percentage: '75%',
    price: '€5,411.79',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Jaylon Aminoff',
    title: "LET'S MAKE THE DIY...",
    desc: "I'm David Perez aka Chino, who started skating this spot some years ago with my...",
    percentage: '75%',
    price: '€7,490.26',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Davis Press',
    title: 'Solar project of Bobryk...',
    desc: 'In March 2022 the secondary school of Bobrytskiy Lyceum of Kyiv Region...',
    percentage: '75%',
    price: '€3,427.64',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Omar Franci',
    title: 'Our animals need...',
    desc: 'For the last 6 years we are saving and collecting animals from different farms...',
    percentage: '75%',
    price: '€6,691.26',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Jakob Septimus',
    title: 'Mini-Oven for pick-a-pão',
    desc: 'I would like nothing more than to continue baking bread for you, to be able to ...',
    percentage: '75%',
    price: '€9,184.17',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Adison Gouse',
    title: 'Streetart stamping for...',
    desc: 'In the spirit of generosity and compassion, a charitable organization tirelessly...',
    percentage: '75%',
    price: '€3,182.49',
  },
  {
    image: 'https://picsum.photos/396/176',
    author: 'Emery Dias',
    title: 'Embracing Humanity...',
    desc: 'Charitable endeavors blossom like flowers of goodwill, as individuals and communities...',
    percentage: '75%',
    price: '€8,207.41',
  },
]
</script>
