<template>
  <div>
    <Metadata
      route="coursesclassrooms"
      :config="courseClassRoomsConfig"
      :params="params"
      :entity="entity"
      :search="search"
      :loading="loadingTable"
      @selectRow="selectRow"
      @selectedData="selectedData"
      @dataSelected="dataSelected"/>
    <panelEdition
      :config="courseClassRoomsConfig"
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
import { courseClassRoomsConfig, propsPanelEdition, courseClassRoomsServices } from '../config/courseClassrooms'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'coursesclassrooms',
  components: {
    Metadata,
    panelEdition
  },
  data () {
    return {
      courseClassRoomsServices,
      entity: 'semestres_materias',
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
        sortField: 'id_estudiante',
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
      courseClassRoomsConfig,
      /**
       * Paramaters for search
       * @type {Array}
       */
      search: {
        id_materia: '',
        id_estudiante: ''
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
    this.setRelationalData(this.courseClassRoomsServices, [], this)
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
      try {
        this.loading = true
        this.loadingTable = true
        let response = await this.$services.putData(['ficde', this.entity, data.cod_sm], data)
        if (response.res.data === 1) {
          this.$notify({
            title: this.translateEntity(this.entity, 'titleUpdateSeccess'),
            message: this.translateEntity(this.entity, 'messageUpdateSeccess'),
            type: 'success',
            duration: 1000
          })
          this.loading = false
          this.loadingTable = false
        }
      } catch (e) {
        this.$notify({
          title: this.translateEntity(this.entity, 'tileErrorServices'),
          message: this.translateEntity(this.entity, 'errorServices'),
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
      try {
        this.loading = true
        this.loadingTable = true
        let res = await this.$services.deleteData(['ficde', this.entity, data.cod_sm])
        if (!res.status) throw new Error(res['response']['response']['data']['message'])
        this.$notify({
          title: this.translateEntity(this.entity, 'titleUpdateSeccess'),
          message: this.translateEntity(this.entity, 'messageDeleteSeccess'),
          type: 'success',
          duration: 1000
        })
        this.loading = false
        this.loadingTable = false
      } catch (e) {
        this.$notify({
          title: this.translateEntity(this.entity, 'tileErrorServices'),
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
