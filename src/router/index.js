import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Explore from '../Views/Explore.vue'
import Campaign from '../Views/Campaign.vue';
import Profile from '../Views/Profile.vue'
import Favorites from '../Views/Favorites.vue'
import History from '../Views/History.vue'
import Notifications from '../Views/Notifications.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/campaign', component: Campaign },
  { path: '/explore', component: Explore },
  { path: '/profile', component: Profile},
  { path: '/favorites', component: Favorites},
  { path: '/history', component: History},
  { path: '/notifications', component: Notifications},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;