import Vue from 'vue'
import { Store } from '../store/'
import { ACTIONS, GETTERS } from '../store/module-login/name'
import { storage } from 'firebase';
const self = new Vue()

/**
 * Description
 */
export const validationSession = async (to, from, next) => {
  let validation = await Store.dispatch(ACTIONS.VALID_SESSION)
  const appModule = to.path.split('/').slice(2)
  const hasPermission = await hasPermissions(appModule, from, next)

  if (validation && !hasPermission) {
    return next({ name: 'Main' })
  }

  if (!validation && !hasPermission) {
    return next({ name: 'login' })
  }

  next()
}
/**
 * Description
 */
export const validationNotSession = async (to, from, next) => {
  let validation = await Store.dispatch(ACTIONS.VALID_SESSION)
  if (validation) {
    next({ name: 'Main' })
  }
  next()
}
/**
 * Description
 */
const hasPermissions = async (appModule, from, next) => {
  let { response } = await self.$mockData.getData('permissions')
  let data = await Store.dispatch(ACTIONS.GET_DATA_USER, {
    token: localStorage.getItem('TOKEN'),
    self: self
  })
  console.log(data)
  let hasPermission = await validateRoute(appModule, response.data.content)
  return hasPermission
}
/**
 * Description
 */
const validateRoute = async (appModule, permissions) => {
  let result = false
  permissions.map(element => {
    for (const rol in element) {
      for (const name of appModule) {
        if (element[rol][name] && element[rol][name]['viewAny']) {
          result = element[rol][name]['viewAny']
        } else {
          result = false
        }
      }
    }
  })
  return result
}
