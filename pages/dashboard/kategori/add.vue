<template>
  <div class="w-full">
    <h1 class="text-3xl font-medium text-sky-700">
      Tambah Kategori
    </h1>
    <div class="flex flex-wrap justify-between">
      <div class="w-full p-8 text-white rounded">
        <form @submit.prevent="addKategori">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 p-2">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Nama Kategori
              </label>
              <input id="grid-first-name" v-model="namaCat" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Nama Kategori">
            </div>
            <div class="w-full md:w-1/2 p-2">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Icon URL
              </label>
              <input id="grid-last-name" v-model="iconUrl" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Icon Url">
            </div>
          </div>
          <button class="w-full md:w-1/2 p-2 bg-sky-500 text-white rounded hover:bg-sky-600" type="submit">
            Tambah Kategori
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'AddKategori',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      iconUrl: '',
      namaCat: ''
    }
  },
  mounted: () => {
    // if (this.$store.state.data.role !== 'admin') {
    //   this.$router.push('/')
    // }
  },
  methods: {
    async addKategori () {
      await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-hasura-admin-secret': 'V9yQv0wj8YGJM7GwIQE8XnGb2lwb5qPoYYkNfh4lR156O7aHDroowZ7X7feybJM6'
        },
        url: 'https://guided-treefrog-70.hasura.app/v1/graphql',
        data: {
          query: `
            mutation MyMutation {
              insert_category(objects: {
                icon_url: "` + this.iconUrl + `", 
                name: "` + this.namaCat + `", 
                }){
                affected_rows
              }
            }
          `
        }
      }).then((response) => {
        if (response.status === 200) {
          this.$router.push('/dashboard/kategori')
        }
      })
    }
  }
}
</script>
