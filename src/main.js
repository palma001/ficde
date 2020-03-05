import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mockData from '../mockData/services'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import { defaultLanguage } from './config'
import Buefy from 'buefy'
import es from './lang/es.js'
import services from '../microservices/services'
import VeeValidate from 'vee-validate'
import 'buefy/dist/buefy.css'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vuetify, {
  VLayout,
  VCard,
  VToolbar,
  VToolbarTitle,
  VContainer,
  VForm,
  VFlex,
  VTextField,
  VDivider,
  VCardActions,
  VSpacer,
  VBtn,
  VNavigationDrawer,
  VList,
  VListTileContent,
  VListTileTitle,
  VTextarea,
  VIcon,
  VAutocomplete,
  VDatePicker
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAutocomplete,
    VTextarea,
    VLayout,
    VCard,
    VToolbar,
    VToolbarTitle,
    VContainer,
    VForm,
    VFlex,
    VTextField,
    VDivider,
    VCardActions,
    VSpacer,
    VIcon,
    VBtn,
    VNavigationDrawer,
    VList,
    VListTileContent,
    VListTileTitle,
    VDatePicker
  }
})

Vue.use(VeeValidate)

Vue.use(Buefy)

Vue.use(VueAxios, axios)

Vue.use(ElementUI)

Vue.use(VueI18n)

Vue.use(mockData, {
  baseUrl: 'http://localhost:8080'
})

Vue.use(services, {
  baseUrl: 'https://ficde.herokuapp.com',
  // baseUrl: 'http://localhost:8000/'
})

Vue.config.productionTip = false

/*
 *  Translations to the Components of UILibrary
 */
const messages = {
  'es-ES': {
    ...es
  }
}
// Create VueI18n instance with options

const i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale: 'es-ES',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
