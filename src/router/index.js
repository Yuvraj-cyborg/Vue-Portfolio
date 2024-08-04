import MainComp from '@/components/MainComp.vue';
<<<<<<< HEAD
import ProjectComp from '@/components/ProjectComp.vue';
=======
>>>>>>> f0d6a0ed250cb8833063ed85b366aeb9b944ccc8
import ServicesComp from '@/components/ServicesComp.vue';
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
{
  path: '/main',
  name: 'main',
  components: MainComp,
},
{
<<<<<<< HEAD
  path: '/services',
  name: 'services',
  components: ServicesComp,
},
{
  path: '/projects',
  name: 'projects',
  components: ProjectComp,
}


=======
  path: "/services",
  name: 'services',
  components: ServicesComp,
}

>>>>>>> f0d6a0ed250cb8833063ed85b366aeb9b944ccc8
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
