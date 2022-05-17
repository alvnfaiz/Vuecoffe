<template>
  <div>
    ijashgd
  </div>
</template>
<script>
export default {
  name: 'DashboardIndex',
  components: {},
  layout: 'dashboard',
  mounted: () => {
    if (this.$store.state.data.role !== 'admin') {
      this.$router.push('/')
    }
  }
}
</script>
