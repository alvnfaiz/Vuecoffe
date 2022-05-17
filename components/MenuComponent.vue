<template>
  <div class="w-full md:w-1/3 lg:w-1/4 p-4 my-4">
    <div class="flex flex-col w-full card translate-3d-none-after relative overflow-hidden card translate-3d-none-after rounded-md shadow hover:shadow-xl">
      <div class="relative group text-primary-500 h-68">
        <img :src="menuid.image" alt="" class="h-68 object-center">
      </div>
      <div class="flex flex-col flex-grow">
        <div class="pl-8 pr-4 pt-4 mb-4 text-left relative flex-grow">
          <h3 class="my-4">
            <span class="text-sm block italic">{{ menuid.category.name }}</span>
            <span class="text-xl font-medium block">{{ menuid.name }}</span>
            <span class="text-2xl text-sky-500">Rp. {{ menuid.price }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['menuid']
}
</script>
