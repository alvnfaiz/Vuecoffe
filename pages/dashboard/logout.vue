<template>
  <div>
    <h1>Logout</h1>
  </div>
</template>
<script>
export default {
  name: 'NewOrder',
  layout: 'dashboard',
  data () {
    return {
      role: ''
    }
  },
  mounted () {
    this.$store.dispatch('clear')
    this.$router.push('/login')
  }
}
</script>
