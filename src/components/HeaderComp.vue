<template>
    <header class="bg-gray-200">
      <div class="w-full flex justify-between items-center p-4">
        <div class="flex items-center font-inter ">
            <div class="flex justify-between backdrop-blur-xl items-center gap-2 bg-slate-200 rounded-full text-xs">
                <div class="bg-slate-200 rounded-full ml-4 text-slate-950" id="email">yuvrajbiswalofficial@gmail.com</div>
                <button class=" text-gray-600 bg-white h-7 w-20 rounded-full font-inter text-xs" @click="doCopy">copy</button>
            </div>
          
        </div>
        <nav class="hidden md:flex">
          <router-link to="/main" class="text-gray-700 ml-4">Home</router-link>
          <router-link :to="{name: 'services'}" class="text-gray-700 ml-4">Services</router-link>
          <router-link to="/projects" class="text-gray-700 ml-4">Projects</router-link>
          <router-link to="/contact" class="text-gray-700 ml-4">Contact</router-link>
        </nav>
        <button class="md:hidden text-gray-700" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div v-if="isMenuOpen" class="md:hidden">
        <nav class="flex flex-col p-4">
          <router-link to="/main" class="text-gray-700 mb-2">Home</router-link>
          <router-link :to="{name: 'services'}" class="text-gray-700 mb-2">Services</router-link>
          <router-link to="/projects" class="text-gray-700 mb-2">Projects</router-link>
          <router-link to="/contact" class="text-gray-700">Contact</router-link>
        </nav>
      </div>
      <router-view />
    </header>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        isMenuOpen: false,
        message: 'yuvrajbiswalofficial@gmail.com'

      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      doCopy() {
        this.$copyText(this.message)
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  