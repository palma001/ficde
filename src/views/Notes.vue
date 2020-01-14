<template>
  <div>
    <Metadata
      route="notes"
      :config="notesConfig"
      :params="params"
      :entity="entity"
      :search="search"
      :loading="loadingTable"
      @selectRow="selectRow"
      @selectedData="selectedData"
      @dataSelected="dataSelected"/>
    <panelEdition
      :config="notesConfig"
      :propsPanelEdition="propsPanelEdition"
      :loading="loading"
      :drawer="drawer"
      :entity="entity"
      @deleteData="deleteData"
      @update="updateNotes"
      @eventPanel="eventPanel">
    </panelEdition>
  </div>
</template>
<script>
import Metadata from './Metadata.vue'
import panelEdition from './Edition.vue'
import { notesConfig, propsPanelEdition, notesServices } from '../config/notes'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'Notes',
  components: {
    Metadata,
    panelEdition
  },
  data () {
    return {
      notesServices,
      entity: 'notas',
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
      notesConfig,
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
  created () {
    this.setRelationalData(this.notesServices, [], this)
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
    async updateNotes (data) {
      this.loading = true
      this.loadingTable = true
      try {
        let response = await this.$services.putData(['ficde', 'notas', data.cod_nota], data)
        if (response.res.data === 1) {
          this.$notify({
            title: this.translateEntity('notas', 'titleUpdateSeccess'),
            message: this.translateEntity('notas', 'messageUpdateSeccess'),
            type: 'success',
            duration: 1000
          })
          this.loading = false
          this.loadingTable = false
        }
      } catch (e) {
        this.$notify({
          title: this.translateEntity('notas', 'tileErrorServices'),
          message: this.translateEntity('notas', 'errorServices'),
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
        let res = await this.$services.deleteData(['ficde', 'notas', data.cod_nota])
        if (!res.status) throw new Error(res['response']['response']['data']['message'])
        this.$notify({
          title: this.translateEntity('notas', 'titleUpdateSeccess'),
          message: this.translateEntity('notas', 'messageUpdateSeccess'),
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
