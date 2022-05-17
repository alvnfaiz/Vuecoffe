<template>
  <div>
    <h1 class="text-center text-3xl text-sky-800">
      Dashboard
    </h1>
    <div class="flex flex-wrap justify-between">
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Orderan
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Menu
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Pegawai
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Keuntungan
        </h1>
      </div>
    </div>
    <div class="flex">
      Okey boi
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'NewOrder',
  layout: 'dashboard',
  data () {
    return {
      data: {
        role: ''
      }
    }
  },
  async mounted () {
    this.data = this.$store.state.data
    if (this.data.role !== 'admin') {
      this.$router.push('/')
    }
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://guided-treefrog-70.hasura.app/v1/graphql',
        data: {
          query: `
            query MyQuery {
              order(limit: 10) {
                id
                order_number
                payment_method
                status
                table_number
                total_price
                updated_at
              }
            }
          `
        }
      })
      this.$store.commit('setOrder', response.data.data.order)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

</script>
