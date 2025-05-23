import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Explore from '../Views/Explore.vue'
import Campaing from '../Views/Campaing.vue';
import Profile from '../Views/Profile.vue'
import Favorites from '../Views/Favorites.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/campaing', component: Campaing },
  { path: '/explore', component: Explore },
  { path: '/profile', component: Profile},
  { path: '/favorites', component: Favorites},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;