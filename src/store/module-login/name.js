/**
 * Actions
 */
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const VALID_SESSION = 'VALID_SESION'
const REFRESH_TOKEN = 'REFRESH_TOKEN'
const AUTO_LOGOUT = 'AUTO_LOGOUT'
const GET_DATA_USER = 'GET_DATA_USER'

/**
 * Mutations
 */
const SET_TOKEN = 'SET_TOKEN'
const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN'
const SET_EMAIL = 'SET_EMAIL'
const SET_ROLES = 'SET_ROLES'
const SET_EXPIRE_IN = 'SET_EXPIRE_IN'
const CLEAR_ACCOUNT_STATE = 'CLEAR_ACCOUNT_STORE'
const SET_LAST_NAME = 'LAST_NAME'
const SET_NAME = 'NAME'

/**
 * Getters
 */

const GET_TOKEN = 'GET_TOKEN'
const GET_LAST_NAME = 'GET_LAST_NAME'
const GET_NAME = 'GET_NAME'
const GET_EMAIL = 'GET_EMAIL'
/**
 * Actions Login
 * @type {Object}
 */
export const ACTIONS = {
  LOGIN,
  LOGOUT,
  VALID_SESSION,
  REFRESH_TOKEN,
  AUTO_LOGOUT,
  GET_DATA_USER
}

/**
 * Muttations Lgin
 * @type {Object}
 */
export const MUTATIONS = {
  CLEAR_ACCOUNT_STATE,
  SET_TOKEN,
  SET_REFRESH_TOKEN,
  SET_EMAIL,
  SET_ROLES,
  SET_EXPIRE_IN,
  SET_LAST_NAME,
  SET_NAME
}

export const GETTERS = {
  GET_TOKEN,
  GET_NAME,
  GET_LAST_NAME,
  GET_EMAIL
}
