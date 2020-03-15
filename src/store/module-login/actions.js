import { ACTIONS, MUTATIONS } from './name'
/**
 * Login
 * @param {Object} context
 * @param {Object} credentials user
 */

export const actions = {
  [ACTIONS.LOGIN]: ({ commit, dispatch }, { self }) => {
    return new Promise((resolve, reject) => {
      self.$services.postData([self.microservices, self.entity],
        {
          dni: self.dni,
          pass: self.password
        }
      )
        .then(res => {
          if (res.status) {
            resolve(res.res)
            commit(MUTATIONS.SET_TOKEN, res.res.data.api_token)
            commit(MUTATIONS.SET_REFRESH_TOKEN, res.res.data.refresh_token)
            commit(MUTATIONS.SET_EMAIL, res.res.data.user.email)
            commit(MUTATIONS.SET_NAME, res.res.data.user.nombre)
            commit(MUTATIONS.SET_LAST_NAME, res.res.data.user.apellido)
            commit(MUTATIONS.SET_EXPIRE_IN, Number(res.res.data.expires_in))
            dispatch(ACTIONS.AUTO_LOGOUT, Number(res.res.data.expires_in))
          } else {
            reject(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  /**
   * Logout of the app
   * @param {Object} context
   */
  [ACTIONS.LOGOUT]: ({ commit }, { self }) => {
    commit(MUTATIONS.CLEAR_ACCOUNT_STATE)
    self.$router.push({ name: 'login' })
  },
  /**
   * Valiad session active
   */
  [ACTIONS.VALID_SESSION]: ({ commit, dispatch }) => {
    let token = localStorage.getItem('TOKEN')
    let expireIn = new Date(localStorage.getItem('expires_in'))
    let now = new Date()
    let email = localStorage.getItem('email')
    let refreshToken = localStorage.getItem('REFRESH_TOKEN')
    let invalidToken = !token || token === 'null'
    let invalidRefreshToken = !refreshToken || refreshToken === 'null'
    let invalidDate = !expireIn || expireIn === 'null' || now.getTime() >= expireIn.getTime()
    let invalidUser = !email || email === 'null'
    if (invalidToken || invalidDate || invalidRefreshToken || invalidUser) {
      commit(MUTATIONS.CLEAR_ACCOUNT_STATE)
      return false
    }
    commit(MUTATIONS.SET_TOKEN, token)
    commit(MUTATIONS.SET_REFRESH_TOKEN, refreshToken)
    commit(MUTATIONS.SET_EMAIL, email)
    commit(MUTATIONS.SET_EXPIRE_IN, expireIn)
    dispatch(ACTIONS.GET_DATA_USER, { self: self, token: token })
    return true
  },
  /**
   * Refresh user token
   * @param {Object} context
   */
  [ACTIONS.REFRESH_TOKEN]: async ({ commit, dispatch }, { self }) => {
      let { res } = await self.$services.postData([self.microservices, 'refreshToken'],
          {
            refresh_token: localStorage.getItem('REFRESH_TOKEN'),
          }
      )
      if (res.status && res.status === 200) {  
        commit(MUTATIONS.SET_TOKEN, res.data.api_token)
        commit(MUTATIONS.SET_REFRESH_TOKEN, res.data.refresh_token)
        commit(MUTATIONS.SET_EMAIL, res.data.user.email)
        commit(MUTATIONS.SET_NAME, res.data.user.nombre)
        commit(MUTATIONS.SET_LAST_NAME, res.data.user.apellido)
        commit(MUTATIONS.SET_EXPIRE_IN, Number(res.data.expires_in))
        dispatch(ACTIONS.AUTO_LOGOUT, Number(res.data.expires_in))
      }
  },
  /**
   * Starts user time session
   * @param {number} expireIn
   */
  [ACTIONS.AUTO_LOGOUT]: ({ commit }, expiresIn) => {
    setTimeout(() => {
      commit(MUTATIONS.SET_TOKEN, null)
      commit(MUTATIONS.SET_EXPIRE_IN, null)
    }, expiresIn)
  },
  /** 
   * Gets data users
   */

  [ACTIONS.GET_DATA_USER]: ({ commit }, { self, token }) => {
    console(self, token)
  }
}
