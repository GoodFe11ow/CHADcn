import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import About from '../Views/About.vue';
import Contact from '../Views/Contact.vue';
import Explore from '../Views/Explore.vue'
import Campaing from '../Views/Campaing.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/campaing', component: Campaing },
  { path: '/explore', component: Explore },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;