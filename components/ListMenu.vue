<template>
  <div class="p-4">
    <div class="w-auto border border-gray-300 p-8 rounded-md">
      <div class="flex min-w-max">
        <div w-class="w-52 inline-block">
          <img :src="menunya.image" alt="" class="h-56 w-56 object-center rounded-md">
          <div class="flex flex-wrap mt-4">
            <button type="button" class="bg-sky-500 text-white p-2 rounded-md">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
            <input type="number" class="bg-sky-500 text-white font-bold p-2 rounded-md w-24 mx-2 text-center" value="1">
            <button type="button" class="bg-sky-500 text-white font-bold p-2 rounded-md">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
          </div>
        </div>
        <div class="w-48 ml-4">
          <h3 class="my-4">
            <span class="text-xl font-medium block">{{ menunya.name }}</span>
            <span class="text-slate-600">
              {{ menunya.description }}
            </span>
            <span class="text-2xl text-sky-500">Rp. 20.000</span>
          </h3>
          <div class="flex items-end">
            <button type="button" class="bg-sky-500 text-white p-4 rounded-md">
              <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </button>
            <button type="button" class="bg-sky-500 text-white p-4 rounded-md ml-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['menunya'],
  name: 'DashboardMenu',
  layout: 'dashboard'
}
</script>
