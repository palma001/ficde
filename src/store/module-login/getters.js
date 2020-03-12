import { GETTERS } from './name'

export const getters = {
  /**
   * Status of de expire date
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  [GETTERS.GET_TOKEN]: (state) => {
    if (!state.TOKEN) {
      return true
    }
    return false
  },
  /**
   * Status of de NAME
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  [GETTERS.GET_NAME]: (state) => {
    return state.name
  },
  /**
   * Status of de LAST NAME
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  [GETTERS.GET_LAST_NAME]: (state) => {
    return state.lastName
  },
  /**
   * Status of de EMAIL
   * @param  {[type]} state [description]
   * @return {[type]}       [description]
   */
  [GETTERS.GET_EMAIL]: (state) => {
    return state.email
  }
}
