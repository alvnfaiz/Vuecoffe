<template>
  <div class="w-full">
    asd
  </div>
</template>
<script>
export default {
  name: 'AddKategori',
  components: {},
  layout: 'dashboard',
  mounted: () => {
    if (this.$store.state.data.role !== 'admin') {
      this.$router.push('/')
    }
  }
}
</script>
