import MainComp from '@/components/MainComp.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
{
  path: '/main',
  name: 'main',
  components: MainComp,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return savedPosition || { x: 0, y: 0 };
  },
})

export default router
