<template>
  <div class="w-full max-h-fit">
    <div id="hero" class="max-w-8xl mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <h1 class="text-base font-semibold text-primary md:text-xl">
            Welcome to
            <div class="block text-sky-800">
              <span class="text-4xl font-bold">Vue</span><span class="italic text-2xl">.coffe</span>
            </div>
          </h1>
          <h2 class="mb-5 text-md font-medium text-secondary lg:text-xl">
            Coffe, Chill<span class="text-cyan-500"> & Hang Out</span>
          </h2>
          <p class="mb-10 font-medium leading-relaxed text-secondary">
            Bersantai, menikmati senja, belajar, live music. <br>
            Pengalaman yang menyenangkan, kami menyediakan tempat untuk menyenangkan anda.
            <span class="font-bold text-dark dark:text-white">Here we Go!</span>
          </p>

          <a href="#" class="rounded-full bg-sky-800 py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">Lokasi Kami</a>
        </div>
        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="relative mt-10 lg:right-0 lg:mt-9">
            <img src="~/assets/img/coffe.png" alt="" class="z-10">
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125 -z-10">
              <svg class="animate-pulse" width="400" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#7dd3fc"
                  d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Section End, About Section Start -->
    <div id="parallax">
      <div id="about">
        <div class="w-full h-fit">
          <img src="~/assets/img/wave-top.png" alt="" class="w-full h-full">
        </div>
        <div class="w-full bg-sky-700 text-white h-96">
          <div class="flex flex-wrap container mx-auto">
            <div class="w-full lg:w-1/2 px-4">
              <h2 class="mb-5 text-2xl font-medium text-secondary">
                About Us
              </h2>
              <p class="mb-10 font-medium leading-relaxed text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam, quos, quisquam.
              </p>
              <a href="#" class="rounded-full bg-sky-800 py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="w-full h-fit">
          <img src="~/assets/img/wave-bottom.png" alt="" class="w-full h-full">
        </div>
      </div>
      <!-- About Section End, Menu Section Start -->
      <div id="menu" class="mt-20">
        <h2 class="text-3xl font-medium text-sky-800 text-center">
          Menu
        </h2>
        <div class="container mx-auto flex flex-wrap justify-between">
          <MenuComponent v-for="item in menu" :key="item.id" :item="item" :menuid="item" />
        </div>
      </div>
      <!-- Menu Section End -->
      <!-- Footer Section -->
      <div class="border-t dark:border-slate-50/[0.06] lg:border-slate-900/10">
        <div class="container mx-auto">
          <div class="flex items-center justify-between py-4">
            <a href="https://github.com/alvnfaiz/vuecoffe" class="inline-flex items-center justify-center space-x-2 text-xs font-semibold hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer" target="_blank" rel="noopener noreferrer" style="outline:none">
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="h-[18px] w-[18px] fill-slate-800 dark:fill-slate-200">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span class="hidden md:block">Source Code</span>
            </a>
            <p class="flex items-center justify-center space-x-4 text-xs font-semibold">
              © <!-- -->2022<!-- --> - Alvin Faiz Zulfitri. All Rights Reserved.<!-- -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import axios from 'axios'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MenuComponent from '../components/MenuComponent.vue'
export default {
  name: 'IndexPage',
  components: { MenuComponent },
  layout: 'default',
  data: () => ({
    menu: []
  }),
  async mounted () {
    this.init()
    await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'V9yQv0wj8YGJM7GwIQE8XnGb2lwb5qPoYYkNfh4lR156O7aHDroowZ7X7feybJM6'
      },
      url: 'https://guided-treefrog-70.hasura.app/v1/graphql',
      data: {
        query: `
            query MyQuery {
            menu {
              description
              id
              image
              name
              price
              stock
              category {
                name
              }
            }
          }
          `
      }
    }).then((response) => {
      this.menu = response.data.data.menu
    })
  },
  methods: {
    init () {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to('#parallax', {
        scrollTrigger: {
          trigger: '#parallax',
          start: 'top center',
          scrub: true,
          toggleActions: 'restart none none none'
        },
        y: '-70%',
        ease: 'power3.out',
        duration: 3
      })
    }
  }
}
</script>
