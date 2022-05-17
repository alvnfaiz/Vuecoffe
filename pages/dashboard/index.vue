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
        <h1 class="text-center text-5xl font-bold">
          {{ order_aggregate }}
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Menu
        </h1>
        <h1 class="text-center text-5xl font-bold">
          {{ menu_aggregate }}
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Pegawai
        </h1>
        <h1 class="text-center text-5xl font-bold">
          {{ user_aggregate }}
        </h1>
      </div>
      <div class="p-8 bg-sky-500 text-white rounded w-64">
        <h1 class="text-center text-xl font-medium">
          Jumlah Kategori
        </h1>
        <h1 class="text-center text-5xl font-bold">
          {{ cat_aggregate }}
        </h1>
      </div>
    </div>
    <div>
      <h3 class="block text-2xl text-center text-sky-800">
        Order History
      </h3>
      <table>
        <tr>
          <th>
            No
          </th>
          <th>
            Order ID
          </th>
          <th>
            Tanggal
          </th>
          <th>
            Total
          </th>
          <th>
            Status
          </th>
        </tr>
        <tr v-for="(orderan, index) in order" :key="orderan.id" item="orderan">
          <td>
            {{ index + 1 }}
          </td>
          <td>
            {{ orderan.id }}
          </td>
          <td>
            {{ orderan.created_at }}
          </td>
          <td>
            {{ ordeanr.total }}
          </td>
          <td>
            {{ orderan.status }}
          </td>
        </tr>
      </table>
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
      order_aggregate: '',
      menu_aggregate: '',
      user_aggregate: '',
      orders: []
    }
  },
  async mounted () {
    if (this.$store.state.user.role === '') {
      this.$router.push('/')
    }
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'V9yQv0wj8YGJM7GwIQE8XnGb2lwb5qPoYYkNfh4lR156O7aHDroowZ7X7feybJM6'
        },
        url: 'https://guided-treefrog-70.hasura.app/v1/graphql',
        data: {
          query: `
            query MyQuery {
              order_aggregate {
                aggregate {
                  count(columns: id)
                }
              }
              order(limit: 10) {
                id
                order_number
                payment_method
                status
                table_number
                total_price
                updated_at
              }
              menu_aggregate {
                aggregate {
                  count
                }
              }
              users_aggregate {
                aggregate {
                  count
                }
              }
            }
          `
        }
      })
      this.order_aggregate = response.data.data.order_aggregate.aggregate.count
      this.menu_aggregate = response.data.data.menu_aggregate.aggregate.count
      this.user_aggregate = response.data.data.users_aggregate.aggregate.count
      this.$store.commit('setOrder', response.data.data.order)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
}

</script>
