<template>
  <header class="bg-gray-200">
    <div class="w-full flex justify-between items-center px-4 py-0">
      <div class="flex items-center font-inter ">
        <div class="flex justify-between backdrop-blur-xl items-center gap-2 bg-slate-200 rounded-full text-xs">
          <div class="bg-slate-200 rounded-full ml-4 text-slate-950" id="email">yuvrajbiswalofficial@gmail.com</div>
          <button class=" text-gray-600 bg-white h-7 w-20 rounded-full font-inter text-xs" @click="doCopy">{{ buttonText }}</button>
        </div>
      </div>
      <nav class="hidden md:flex">
        <a href="#main" class="text-gray-700 ml-4">Home</a>
        <a href="#services" class="text-gray-700 ml-4">Services</a>
        <a href="#projects" class="text-gray-700 ml-4">Projects</a>
        <a href="#contact" class="text-gray-700 ml-4">Contact</a>
      </nav>
      <button class="md:hidden text-gray-700" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="md:hidden">
      <nav class="flex flex-col p-4">
        <a href="#main" class="text-gray-700 mb-2">Home</a>
        <a href="#services" class="text-gray-700 mb-2">Services</a>
        <a href="#projects" class="text-gray-700 mb-2">Projects</a>
        <a href="#contact" class="text-gray-700">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      message: 'yuvrajbiswalofficial@gmail.com',
      isCopied: false
    };
  },
  computed: {
    buttonText() {
      return this.isCopied ? 'Copied!' : 'Copy';
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    doCopy() {
      this.$copyText(this.message).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2000); 
      });
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
