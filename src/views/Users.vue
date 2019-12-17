<template>
  <div>
    <Metadata
      route="users"
      :config="usersConfig"
      :params="params"
      :entity="entity"
      :search="search"
      @selectRow="selectRow"/>
    <panelEdition
      :config="usersConfig"
      :propsPanelEdition="propsPanelEdition"
      :loading="loading"
      :drawer="drawer"/>
  </div>
</template>
<script>
import Metadata from './Metadata.vue'
import panelEdition from './Edition.vue'
import { usersConfig, propsPanelEdition } from '../config/usersConfig'
export default {
  name: 'Users',
  components: {
    Metadata,
    panelEdition
  },
  data () {
    return {
      entity: 'usuarios',
      /***
       * parameters of micreoservices request
       * @type {Object} parameters request
       */
      params: {
        /**
         * number page
         * @type {Number} number page
         */
        page: 0,
        /**
         * size paginate
         * @type {Number} size paginate
         */
        perPage: 20,
        /**
         * name of field order
         * @type {String} name field
         */
        sortField: 'nombre',
        /**
         * type of order
         * @type {String} type order
         */
        sortOrder: 'desc',
        /**
         * Number total of field
         * @type {Number} total field
         */
        totalField: 0,
        /**
         * Search data of microservices
         * @type {Object}
         */
        search: {}
      },
      /**
       * Configurations table
       * @type {Object}
       */
      usersConfig,
      /**
       * Paramaters for search
       * @type {Array}
       */
      search: {
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        telefono: ''
      },
      drawer: false,
      /**
       * Props panel
       * @type {Object}
       */
      propsPanelEdition,
      loading: true
    }
  },
  methods: {
    selectRow (data) {
      this.loading = true
      this.drawer = true
      setTimeout(() => {
        this.propsPanelEdition.data = data
        this.loading = false
      }, 500)
    }
  }
}
</script>
