<template>
  <div>
    <Metadata
      route="turn"
      :config="turnConfig"
      :params="params"
      :entity="entity"
      :search="search"
      :loading="loadingTable"
      @selectRow="selectRow"
      @selectedData="selectedData"
      @dataSelected="dataSelected"/>
    <panelEdition
      :config="turnConfig"
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
import { turnConfig, propsPanelEdition } from '../config/turnConfig'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'Turn',
  components: {
    Metadata,
    panelEdition
  },
  data () {
    return {
      entity: 'turnos',
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
        sortField: 'turno',
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
      turnConfig,
      /**
       * Paramaters for search
       * @type {Array}
       */
      search: {
        turno: '',
        hora: ''
      },
      /**
       * status panel
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
        let response = await this.$services.putData(['ficde', 'turnos', data.cod_turno], data)
        if (response.res.data === 1) {
          this.$notify({
            title: this.translateEntity('turnos', 'titleUpdateSeccess'),
            message: this.translateEntity('turnos', 'messageUpdateSeccess'),
            type: 'success',
            duration: 1000
          })
          this.loading = false
          this.loadingTable = false
        }
      } catch (e) {
        this.$notify({
          title: this.translateEntity('turnos', 'tileErrorServices'),
          message: this.translateEntity('turnos', 'errorServices'),
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
        let res = await this.$services.deleteData(['ficde', 'turnos', data.cod_turno])
        if (!res.status) throw new Error(res['response']['response']['data']['message'])
        this.$notify({
          title: this.translateEntity('turnos', 'titleUpdateSeccess'),
          message: this.translateEntity('turnos', 'messageUpdateSeccess'),
          type: 'success',
          duration: 1000
        })
        this.loading = false
        this.loadingTable = false
      } catch (e) {
        this.$notify({
          title: this.translateEntity('cursos', 'tileErrorServices'),
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
