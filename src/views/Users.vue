<template>
  <div>
    <Metadata
      route="users"
      :config="usersConfig"
      :params="params"
      :entity="entity"
      :search="search"
      :loading="loadingTable"
      @selectRow="selectRow"
      @selectedData="selectedData"
      @dataSelected="dataSelected"/>
    <panelEdition
      :config="usersConfig"
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
import { usersConfig, propsPanelEdition } from '../config/usersConfig'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
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
      /**
       * loadding panel
       * @type {Boolean}
       */
      loading: false,
      /**
       * [loadingTable description]
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
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
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
     * Selected default
     * @param  {Array} data selected
     */
    selectedData (data) {
      this.propsPanelEdition.data = data[0]
    },
    /**
     * data selected panel
     * @param  {Object} data selected
     */
    dataSelected (data) {
      console.log(data)
      this.propsPanelEdition.data = data
    },
    /**
     * event panel
     * @param  {Boolean} status panel
     */
    eventPanel (status) {
      this.drawer = status
    },
    /**
     * update user
     * @param  {Object} data user
     */
    async updateUsers (data) {
      this.loading = true
      this.loadingTable = true
      try {
        let response = await this.$services.putData(['ficde', 'usuarios', data.dni], data)
        if (response.res.data === 1) {
          this.$notify({
            title: this.translateEntity('usuarios', 'titleUpdateSeccess'),
            message: this.translateEntity('usuarios', 'messageUpdateSeccess'),
            type: 'success',
            duration: 1000
          })
          this.loading = false
          this.loadingTable = false
        }
      } catch (e) {
        this.$notify({
          title: this.translateEntity('usuarios', 'tileErrorServices'),
          message: this.translateEntity('usuarios', 'errorServices'),
          type: 'error',
          duration: 1000
        })
      }
    },
    /**
     * update user
     * @param  {Object} data user
     */
    async deleteData (data) {
      this.loading = true
      this.loadingTable = true
      try {
        let res = await this.$services.deleteData(['ficde', 'usuarios', data.dni])
        if (!res.status) throw new Error(res['response']['response']['data']['message'])
        this.$notify({
          title: this.translateEntity('usuarios', 'titleUpdateSeccess'),
          message: this.translateEntity('usuarios', 'messageUpdateSeccess'),
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
