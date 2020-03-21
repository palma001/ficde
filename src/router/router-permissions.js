import Vue from 'vue'
import { Store } from '../store/'
import { ACTIONS } from '../store/module-login/name'
export const validateAll = async (to, from, next) => {
  let usuario = await Store.dispatch(ACTIONS.VALID_SESSION)
  console.log(Vue)
  if (!usuario) {
    next('login')
  } else if (usuario) {
    next('dashboard')
  } else {
    next()
  }
}
