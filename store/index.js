import Vuex from 'vuex'

const store = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      user: [],
      accessToken: null
    },
    mutations: {
      setUser (state, user) {
        state.user = user
      },
      setAccessToken (state, accessToken) {
        state.accessToken = accessToken
      }
    },
    actions: {
      logout ({ commit }) {
        commit('setUser', [])
        this.$axios.defaults.headers.common.Authorization = 'Bearer ' + this.state.accessToken
        this.$axios.post('/logout')
          .then((resp) => {
            if (resp.data.status === 'success') {
              commit('setAccessToken', null)
            }
          })
      },
      clear ({ commit }) {
        commit('setUser', [])
        commit('setAccessToken', null)
      }
    }
  })
}

export default store
