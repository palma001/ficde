import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    route: null
  },
  mutations: {
    retrieveToken (state, token) {
      state.token = token
    },
    removeToken (state) {
      state.token = null
    },
    routeChange (state, route) {
      state.route = route.route
    }
  },
  actions: {
    login (context, vm) {
      let self = vm.this
      return new Promise((resolve, reject) => {
        self.$services.postData([self.microservices, self.entity],
          {
            email: self.text,
            password: self.password
          }
        )
          .then(res => {
            if (res.status) {
              let token = res.res.data.api_token
              localStorage.setItem('access_token', token)
              context.commit('retrieveToken', token)
              resolve(res.res)
            } else {
              reject(res)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout (context, vm) {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('access_token')
          context.commit('removeToken')
          resolve()
        }
      })
    },
    routeChange (context, params) {
      context.commit('routeChange', params)
    }
  }
})
