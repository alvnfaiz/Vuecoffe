<template>
  <div class="max-h-screen">
    <h1 class="text-center text-3xl text-sky-800 font-medium">
      Hello World
    </h1>
    <div class="flex flex-initial">
      <div class="overflow-y basis-4/5 flex flex-wrap justify-between">
        <ListMenu v-for="item in 10" :id="id" :key="item.id" class="w-1/2" />
      </div>
      <div class="overflow-y basis-1/5 flex flex-wrap">
        <NewOrder />
      </div>
    </div>
  </div>
</template>
<script>
import NewOrder from '~/components/NewOrder.vue'
import ListMenu from '~/components/ListMenu.vue'
export default {
  name: 'DashboardIndex',
  components: { ListMenu, NewOrder },
  layout: 'dashboard'
}
</script>
