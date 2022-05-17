<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-xl lg:w-1/4 md:w-1/3 sm:w-1/2 mx-auto border border-gray-100 rounded-xl p-10 shadow-xl">
      <h1 class="text-4xl font-medium mb-6 text-center text-sky-800">
        Login
      </h1>
      <div class="login-form-content">
        <form @submit.prevent="login">
          <div class="my-2">
            <label for="email" class="block text-lg text-sky-800 my-2">Email</label>
            <input id="email" v-model="email" type="text" class="w-full p-2 rounded border focus:border focus:border-slate-400 outline-none bg-blue-50 focus:bg-blue-100" placeholder="email">
          </div>
          <div class="my-2">
            <label for="password" class="block text-lg text-sky-800 my-2">Password</label>
            <input id="password" v-model="password" type="password" class="w-full p-2 rounded border focus:border focus:border-slate-400 outline-none bg-blue-50 focus:bg-blue-100" placeholder="Password">
          </div>
          <div class="my-2">
            <span class="text-sm text-sky-600 my-2">Login akan tersimpan selama 24 Jam</span>
          </div>
          <div class="w-full">
            <span class="relative my-4">
              <button type="submit" class="inline-flex w-full items-center px-4 py-3 justify-center font-semibold leading-6 text-sm shadow rounded-md text-white bg-sky-600 hover:bg-sky-400 transition ease-in-out duration-150">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" :class="ping_shown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Login
              </button>
              <span class="my-2">
                <span class="text-sm text-green-600">
                  {{ message }}
                </span>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import { store } from '../store'
// import { login } from '../store/actions'

export default {
  name: 'LoginComponent',
  data () {
    return {
      email: '',
      password: '',
      is_ping_shown: true,
      ping_shown: 'hidden',
      message: ''
    }
  },
  computed: {},
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.$store.state.accessToken)
    if (this.$store.state.accessToken) {
      this.$axios.defaults.headers.common.Authorization = `Bearer ${this.$store.state.accessToken}`
      this.$axios.get('/valid-token').then((response) => {
        if (response.data.status === true) {
          this.$router.push('/dashboard')
        } else {
          this.$store.dispatch('clear')
          // // eslint-disable-next-line no-console
          // console.log('token expired')
        }
      })
    }
  },
  methods: {
    async login () {
      this.ping_show()
      await axios.post('https://laracoffe.herokuapp.com/api/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          if (response.status === 200) {
            this.$store.commit('setAccessToken', response.data.access_token)
            this.message = response.data.message
            this.$store.commit('setUser', response.data.data)
            // this.$router.push('/dashboard')
          } else {
            // eslint-disable-next-line no-console
            console.log(response.data.message)
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.message = error.response.data.message
          } else {
            this.message = 'Something went wrong'
          }
        })
        .finally(() => {
          this.ping_show()
        })
    },
    ping_show () {
      this.is_ping_shown = !this.is_ping_shown
      if (this.is_ping_shown) {
        this.ping_shown = 'hidden'
      } else {
        this.ping_shown = 'flex'
      }
    }
  }
}
</script>
