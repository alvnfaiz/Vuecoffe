<template>
  <div class="w-full">
    <form @submit.prevent="addMenu">
      <label for="nama">Nama Menu</label>
      <input v-model="nama" type="text" name="nama" class="w-full">
      <label for="harga">Harga</label>
      <input v-model="harga" type="text" name="harga" class="w-full">
      <label for="kategori">Kategori</label>
      <select v-model="kategori" name="kategori" class="w-full">
        <option v-for="item in kategori" :key="item.id" :item="item">
          {{ item.nama }}
        </option>
      </select>
      <label for="gambar">Gambar</label>
      <input type="file" name="gambar" class="w-full">
      <button type="submit" class="w-full bg-sky-800 text-white py-2 px-4 rounded">
        Tambah Menu
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddMenu',
  components: {},
  layout: 'dashboard',
  mounted: () => {
    if (this.$store.state.data.role !== 'admin') {
      this.$router.push('/')
    }
  }
}
</script>
