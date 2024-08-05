import { createRouter, createWebHistory } from 'vue-router';
import MainComp from '@/components/MainComp.vue';

const routes = [
  {
    path: '/',
    component: MainComp,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return savedPosition || { x: 0, y: 0 };
  }
});

export default router;
