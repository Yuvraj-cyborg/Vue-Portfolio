<template>  
  <div>  
    <p class="text-4xl font-bold mt-4 font-inter text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-gray-500">  
      Let's Collaborate on Innovative Projects  
    </p>  
    <br>  
    <div class="relative flex items-center mt-12">  
      <div class="w-full bg-gray-200 h-0.5"></div>  
      <button class="absolute left-1/2 transform -translate-x-1/2 py-2 bg-white text-center font-semibold rounded-full w-24 font-inter">  
        Projects  
      </button>  
    </div>  
    <br>  
    <br>  
    <div class="container mx-auto font-inter">  
      <div class="flex justify-center">   
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">   
          <div v-for="project in projectsWithImages" :key="project.id" class="p-4 text-start border-2 border-gray-300 transition-transform transform hover:scale-105 hover:border-gray-400" @click="goToProject(project.link)">  
            <img :src="project.imageSrc" alt="Project Image" class="w-full h-auto">  
            <h3 class="font-bold mt-2 text-gradient-to-r from-slate-950 to-gray-500">{{ project.title }}</h3>  
            <p class="text-gray-600 mt-2">{{ project.description }}</p>  
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
      projects: [  
        { id: 1,  
          title: 'Agency Website',   
          description: 'Created an agency website whose backend was pre-existing. Worked with tech like SQL, AWS, C#, and bootstrap.',  
          imageUrl: 'pro1.png',  
          link: 'https://ajeets.com'  
        },  
        { id: 2,   
          title: 'Dynamic short notes app',  
          description: 'Took design inspiration from YouTube and created a mini note-taking website with dynamic input feature.',   
          imageUrl: 'pro2.png',  
          link: 'https://mini-docus.vercel.app'  
        },  
        { id: 3,   
          title: 'Rust todo-CLI',  
          description: 'Made a Rust todo app but not a usual todo list. This project is made to create special Todo CLI commands for functioning.',   
          imageUrl: 'rustt.png',  
        },  
        { id: 4,   
          title: '3D website clone',  
          description: 'Made a clone of cyberfiction.io, a best website award-winning website at awwwards.',   
          imageUrl: 'pro4.png',  
          link: 'https://yuvitron.vercel.app',  
        },  
      ]  
    }  
  },  
  computed: {  
    projectsWithImages() {  
      return this.projects.map(project => ({  
        ...project,  
        imageSrc: require(`@/assets/images/${project.imageUrl}`)  
      }));  
    }  
  },  
  methods: {  
    goToProject(link) {  
      if (link) {  
        window.open(link, '_blank'); // Open in a new tab  
      }  
    }  
  }  
}  
</script>  

<style scoped>  
/* Add any scoped styles here */  
</style>