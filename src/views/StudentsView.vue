<template>
  <div>
    <Metadata
      route="students"
      :config="studentsConfig"
      :params="params"
      :loading="loadingTable"
      :entity="entity"
      :search="search"
      @selectRow="selectRow"/>
      <panelEdition
        :config="studentsConfig"
        :propsPanelEdition="propsPanelEdition"
        :loading="loading"
        :drawer="drawer"
        :entity="entity"
        @deleteData="deleteData"
        @update="updateUsers"
        @eventPanel="eventPanel">
      </panelEdition>
  </div>
</template>
<script>
import Metadata from './Metadata.vue'
import panelEdition from './Edition.vue'
import { studentsConfig, propsPanelEdition } from '../config/studentsConfig'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'Students',
  components: {
    Metadata,
    panelEdition
  },
  data () {
    return {
      /**
       * Entity students
       * @type {String}
       */
      entity: 'estudiantes',
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
      studentsConfig,
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
      /**
       * Status panel left
       * @type {Boolean}
       */
      drawer: false,
      /**
       * Props panel
       * @type {Object}
       */
      propsPanelEdition,
      /**
       * loadding panel
       * @type {Boolean}
       */
      loading: false,
      /**
       * loading table
       * @type {Boolean}
       */
      loadingTable: false,
      /**
       * Data selected
       * @type {Object}
       */
      selected: {}
    }
  },
  methods: {
    /**
     * Select data
     * @param  {Object} data students
     */
    selectRow (data) {
      this.loading = true
      this.drawer = true
      setTimeout(() => {
        this.propsPanelEdition.data = data
        this.loading = false
      }, 500)
    },

    /**
     * event panel
     * @param  {Boolean} status panel
     */
    eventPanel (status) {
      this.drawer = status
    },
    /**
     * update students
     * @param  {Object} data students
     */
    async updateUsers (data) {
      this.loading = true
      this.loadingTable = true
      try {
        let response = await this.$services.putData(['ficde', 'estudiantes', data.dni], data)
        if (response.res.data === 1) {
          this.$notify({
            title: this.translateEntity('estudiantes', 'titleUpdateSeccess'),
            message: this.translateEntity('estudiantes', 'messageUpdateSeccess'),
            type: 'success',
            duration: 1000
          })
          this.loading = false
          this.loadingTable = false
        }
      } catch (e) {
        this.$notify({
          title: this.translateEntity('estudiantes', 'tileErrorServices'),
          message: this.translateEntity('estudiantes', 'errorServices'),
          type: 'error',
          duration: 1000
        })
      }
    },
    /**
     * update students
     * @param  {Object} data students
     */
    async deleteData (data) {
      this.loading = true
      this.loadingTable = true
      try {
        let res = await this.$services.deleteData(['ficde', 'estudiantes', data.dni])
        if (!res.status) throw new Error(res['response']['response']['data']['message'])
        this.$notify({
          title: this.translateEntity('estudiantes', 'titleUpdateSeccess'),
          message: this.translateEntity('estudiantes', 'messageDeleteSeccess'),
          type: 'success',
          duration: 1000
        })
        this.loading = false
        this.loadingTable = false
      } catch (e) {
        this.$notify({
          title: this.translateEntity('usuarios', 'tileErrorServices'),
          message: this.translateEntity('message', e.message),
          type: 'error',
          duration: 1000
        })
        this.loading = false
        this.loadingTable = false
      }
    }
  }
}
</script>

  <style lang="css" scoped>
  </style>
