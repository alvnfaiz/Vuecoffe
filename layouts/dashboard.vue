<template>
  <div>
    <nav class="absolute top-0 z-40 w-full backdrop-blur-sm flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-sky-100 supports-backdrop-blur:bg-white/70">
      <div class="max-w-8xl mx-auto">
        <div class="py-2 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div class="relative flex items-center justify-between">
            <a class="mr-3 flex-none overflow-hidden w-auto" href="/">
              <span class="font-bold text-xl text-sky-800">
                Vue
              </span>
              <span class="font-medium text-lg italic text-sky-800">
                Coffe
              </span>
            </a>
            <div class="relative hidden lg:flex items-center ml-auto">
              <nav class="text-sm leading-6 font-semibold text-right">
                <span class="block text-xl text-sky-800 transition ease-in-out duration-150">
                  Alvin Faiz
                </span>
                <span class="text-slate-600 transition ease-in-out duration-150">
                  Kasir
                </span>
              </nav>
              <div class="flex items-center border-l border-slate-200 ml-4 pl-4 dark:border-slate-800">
                <img src="~/assets/img/kopiboba.jpg" alt="" class="rounded-full w-10 h-10">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="absolute flex items-center h-screen">
      <div class="bg-sky-500 rounded-r-md overflow-hidden">
        <nuxt-link to="/dashboard" class="block p-4 text-white hover:bg-sky-300 text-center">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span class="text-xs">Dashboard</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/menu" class="w-full block p-4 text-white hover:bg-sky-300 text-center">
          <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
          </svg>
          <span class="text-xs">Drink</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/pegawai" class="block p-4 text-white hover:bg-sky-300 text-center">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span class="text-xs">Pegawai</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/kategori" class="block p-4 text-white hover:bg-sky-300 text-center">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <span class="text-xs">Kategori</span>
        </nuxt-link>
        <nuxt-link to="/dashboard/order" class="block p-4 text-white hover:bg-sky-300 text-center">
          <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span class="text-xs">Order</span>
        </nuxt-link>
      </div>
    </div>
    <div class="absolute flex items-center h-screen ml-28">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>
<style scoped>
a.nuxt-link-exact-active {
  @apply bg-sky-400;
}
</style>
