<template>
  <div>
    ijashgd
  </div>
</template>
<script>
import axios from 'axios'
import store from '@/store/index.js'

export default {
  name: 'DashboardIndex',
  components: {},
  layout: 'dashboard',
  data () {
    return {
      id: '',
      name_cat: '',
      icon_url: ''
    }
  },
  mounted: () => {
    if (store.state.data.role !== 'admin') {
      this.$router.push('/')
    }
  },
  methods: {
    async update () {
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
        this.categories = response.data.data.category
      })
    }
  }
}
</script>
