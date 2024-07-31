<template>
  <div>
      <h2 class="text-4xl font-bold mt-4 font-otterco text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-gray-500">Tell me about your next project</h2>
      <div class="flex justify-center mt-10">
          <button class="flex items-center justify-center px-4 py-2 bg-slate-950 text-white rounded-3xl h-10 text-xs" onclick="window.location.href='mailto:yuvrajbiswalofficial@gmail.com'">
              <img :src="require('@/assets/images/emaiil.png')" alt="Email Icon" class="h-4 w-4 mr-2 bg-black" />
              Email Me
          </button>
          <button class="flex items-center justify-center px-4 py-2 bg-white border-2 border-gray-300 text-slate-950 rounded-3xl h-10 text-xs ml-4" onclick="window.location.href='https://wa.me/9348220494'">
            <img :src="require('@/assets/images/icons8-whatsapp-32.png')" alt="WhatsApp Icon" class="h-4 w-4 mr-2 bg-white" />
            WhatsApp
          </button>
      </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>