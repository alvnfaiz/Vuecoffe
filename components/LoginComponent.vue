<template>
  <div class="login">
    <div class="login-form">
      <div class="login-logo">
        <img src="assets/images/logo.png" alt="">
      </div>
      <div class="login-form-content">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LoginComponent',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('/api/login', {
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.data.success) {
          this.$router.push('/')
        } else {
          alert(response.data.message)
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    }
  }
}
</script>
