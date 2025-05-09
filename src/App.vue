<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Explore from './Views/Explore.vue';
  import Home from './Views/Home.vue';
  
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>