import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Explore from '../Views/Explore.vue'
import Campaing from '../Views/Campaing.vue';

const routes = [
  { path: '/campaing', component: Campaing },
  { path: '/explore', component: Explore },
  { path: '/', component: Home },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;