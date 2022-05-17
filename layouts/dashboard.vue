<template>
  <div>
    <nav class="sticky top-0 z-40 w-full backdrop-blur-sm flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-sky-100 supports-backdrop-blur:bg-white/70">
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
    <div class="flex items-center h-screen rounded-r-md">
      <div class="bg-sky-700">
        <nuxt-link to="/dashboard" class="block p-4  text-white bg-sky-600">
          <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/dashboard/menu" class="block p-4 text-white">
          <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/dashboard/pegawai" class="block p-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/dashboard/kategori" class="block p-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/dashboard/order" class="block p-4">
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>
