<template>
  <div class="w-full">
    <form @submit.prevent="addMenu">
      <label for="nama">Nama Menu</label>
      <input v-model="nama" type="text" name="nama" class="w-full outline-none border border-slate-400 rounded p-2">
      <label for="harga">Harga</label>
      <input v-model="harga" type="text" name="harga" class="w-full outline-none border border-slate-400 rounded p-2">
      <label for="harga">Stok</label>
      <input v-model="stock" type="text" name="stock" class="w-full outline-none border border-slate-400 rounded p-2">
      <label for="harga">Deskripsi</label>
      <input v-model="desc" type="text" name="desc" class="w-full outline-none border border-slate-400 rounded p-2">
      <label for="kategori">Kategori</label>
      <select v-model="cat_id" name="kategori" class="w-full outline-none border border-slate-400 rounded p-2">
        <option v-for="item in cate" :key="item.id" :item="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <label for="gambar">Gambar</label>
      <input type="text" name="gambar" class="w-full outline-none border border-slate-400 rounded p-2" v-model="gambar">
      <button type="submit" class="w-full bg-sky-800 text-white py-2 px-4 rounded">
        Tambah Menu
      </button>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
// import store from '~/store'
export default {
  name: 'AddMenu',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      nama: '',
      harga: '',
      desc: '',
      cate: [],
      gambar: '',
      stock: '',
      cat_id: '',
      img: ''
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
              id
              name
            }
          }
          `
      }
    }).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data.data.category)
      this.cate = response.data.data.category
    })
  },
  methods: {
    uploadImage (img) {
      // const file = img.files
      // const reader = new FileReader()
      // reader.onloadend = function () {
      //   // eslint-disable-next-line no-console
      //   console.log('RESULT', reader.result)
      // }
      // reader.readAsDataURL(file)

      // const body = new FormData()
      // body.append('image', img)
      // body.set('key', 'fd682905ece42d60a81ef69a0588ab23')
      // axios({
      //   method: 'POST',
      //   url: 'https://api.imgbb.com/1/upload',
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   },
      //   data: body
      // }).then((response) => {
      //   this.gambar = response.data.data.display_url
      // })
    },
    async addMenu () {
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
              insert_menu(objects: { 
                name: "` + this.nama + `",
                image: " ` + this.gambar + `", 
                price: "` + this.harga + `",
                category_id: "` + this.cat_id + `",
                stock: "` + this.stock + `",
                description: "` + this.desc + `"
              }){
                affected_rows
              }
            }
          `
        }
      })
      this.$router.push('/dashboard/menu')
    }
  }
}
</script>
