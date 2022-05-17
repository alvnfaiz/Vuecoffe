<template>
  <div class="max-h-screen">
    <h1 class="text-center text-3xl text-sky-800 font-medium">
      Hello World
    </h1>
    <div class="flex flex-initial">
      <div class="overflow-y basis-4/5 flex flex-wrap justify-between">
        <ListMenu v-for="item in menu" :id="id" :key="item.id" class="w-1/2" :menunya="item"/>
      </div>
      <div class="overflow-y basis-1/5 flex flex-wrap">
        <NewOrder />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import NewOrder from '~/components/NewOrder.vue'
import ListMenu from '~/components/ListMenu.vue'
export default {
  name: 'DashboardIndex',
  components: { ListMenu, NewOrder },
  data () {
    return {
      menu: []
    }
  },
  layout: 'dashboard',
  async mounted () {
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
                stock
                price
                name
                image
                id
                description
                category_id
              }
            }
          `
      }
    }).then((response) => {
      this.menu = response.data.data.menu
    })
  }
}
</script>
