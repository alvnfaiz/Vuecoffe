<template>
  <div>
    <h3 class="text-3xl font-medium text-sky-800">
      Kategori
    </h3>
    <button class="bg-sky-500 text-white p-2 rounded" @click="create">
      Tambah Kategori
    </button>
    <div class="w-full">
      <div v-for="cat in kategori" :key="cat.id" class="inline-block md:w-1/2 lg:w-1/3 p-4">
        <div class="bg-white rounded shadow">
          <div class="p-4">
            <img :src="cat.icon_url" class="w-12 h-12 rounded-full">
            <span class="text-sm text-gray-600">
              {{ cat.name }}
            </span>
            <div class="flex justify-between">
              <div class="flex">
                <nuxt-link class="bg-sky-500 text-white rounded px-4 py-2" :to="{ path: 'kategori/'+ cat.id}">
                  Edit
                </nuxt-link>
                <button class="bg-red-500 text-white rounded px-4 py-2" @click="deleteCat(cat.id)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'KategoriAdd',
  layout: 'dashboard',
  data () {
    return {
      kategori: []
    }
  },
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
            category {
              icon_url
              id
              name
            }
          }
          `
      }
    }).then((response) => {
      this.kategori = response.data.data.category
    })
  },
  methods: {
    create () {
      this.$router.push('/dashboard/kategori/add')
    },
    deleteCat (cat) {
      axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'V9yQv0wj8YGJM7GwIQE8XnGb2lwb5qPoYYkNfh4lR156O7aHDroowZ7X7feybJM6'
        },
        url: 'https://guided-treefrog-70.hasura.app/v1/graphql',
        data: {
          query: `
              mutation MyMutation {
                delete_category(where: {id: {_eq: ${cat}}}) {
                  affected_rows
                }
              }
              `
        }
      }).then((response) => {
        this.kategori = this.kategori.filter(item => item.id !== cat)
        this.$router.push('/dashboard/kategori')
      })
    }
  }
}
</script>
