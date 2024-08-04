import MainComp from '@/components/MainComp.vue';
import ProjectComp from '@/components/ProjectComp.vue';
import ServicesComp from '@/components/ServicesComp.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
{
  path: '/main',
  name: 'main',
  components: MainComp,
},
{
  path: '/services',
  name: 'services',
  components: ServicesComp,
},
{
  path: '/projects',
  name: 'projects',
  components: ProjectComp,
}


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
