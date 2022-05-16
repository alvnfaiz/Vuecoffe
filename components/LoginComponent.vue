<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-md mx-auto border border-gray-100 rounded-xl p-10 shadow-xl">
      <h1 class="text-4xl mb-6 text-center ">
        Login
      </h1>
      <div class="login-form-content">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">email</label>
            <input id="email" v-model="email" type="text" class="form-control" placeholder="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" class="form-control" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
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
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios.post('https://laracoffe.herokuapp.com/api/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('access_token', response.data.access_token)
            // eslint-disable-next-line no-console
            console.log(response.data.access_token)
            this.$router.push('/dashboard')
          } else {
            // eslint-disable-next-line no-console
            console.log(response.data.message)
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  }
}
</script>
