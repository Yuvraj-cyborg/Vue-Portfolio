<template>
  <div class="flex flex-col min-h-screen">
  <HeaderComp />
  <main class="flex-grow">
  <MainComp /> 
  <section class="my-16" id="services">
     <ServicesComp />
  </section>
<<<<<<< HEAD
  <section class="my-16" id="projects">
    <ProjectComp />
  </section>
  <section class="my-16 text-center">
    <ContactComp />
  </section>
  
=======
  <section class="my-16 text-center">
    <ContactComp />
  </section>
>>>>>>> f0d6a0ed250cb8833063ed85b366aeb9b944ccc8

  <router-view />
</main>
  <FooterComp />
</div>
</template>

<script >
import ContactComp from './components/ContactComp.vue';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
<<<<<<< HEAD
import ProjectComp from './components/ProjectComp.vue';
=======
>>>>>>> f0d6a0ed250cb8833063ed85b366aeb9b944ccc8
import ServicesComp from './components/ServicesComp.vue';



export default {
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
    ServicesComp,
    ContactComp,
<<<<<<< HEAD
    ProjectComp,
  
=======
>>>>>>> f0d6a0ed250cb8833063ed85b366aeb9b944ccc8
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  color: whitesmoke;
}




</style>
