<template>
    <div>
        <p class="text-4xl font-bold mt-4 font-inter text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-gray-500">Domains of which services are provided by me.</p> <br>
    <div class="relative flex items-center mt-12">
    <div class="w-full bg-gray-200 h-0.5 "></div>
    <button class="absolute left-1/2 transform -translate-x-1/2 py-2 bg-white text-center font-semibold rounded-full w-24 font-inter">
        Services
    </button>
</div> <br>
<br>
<div class="container mx-auto font-inter">
  <div class="flex justify-center">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ml-40">
    <div v-for="service in services" :key="service.id" class="p-4 text-left">
      <img :src="require('@/assets/images/' + service.image)" alt="Brand Logo" class="mb-4 h-8">
      <h3 class="font-semibold">{{ service.title }}</h3>
      <p class="text-gray-600 mt-2">{{ service.description }}</p>
    </div>
  </div>
</div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      services: [
        { id: 1, image: 'webdev.png', title: 'Web Dev', description: 'Creating Websites that are Smooth, efficient, and enjoyable to use.' },
        { id: 2, image: 'consult.png', title: 'Consultancy', description: 'Consult regarding any tech info or new project tech stack' },
        { id: 3, image: 'blockchain-icon.png', title: 'Blockchain', description: 'Collaborate and create web3 web apps with Rust.' },
        { id: 3, image: 'astro.png', title: 'Astrophysics', description: 'Collaborate and research on astrophysics. ' },
        
      ]
    };
  }  
    }
</script>

<style scoped>

</style>