<template>
  <div>
    <DataTabulated
      :headers="usersConfig"
      :tableData="dataTable"
      :checkBox="false"
      :stripe="true"
      :totalPage="params.totalField"
      :perPages="params.perPage"
      :loading="loadingTable"
      :border="false"
      :circle="true"
      :options="[5, 20, 50, 100]"
      @on-load-data="getUsers"
      @search-data="eventSearch"
    />
    <v-dialog
      v-model="loadingDialog"
      persistent
      app
      width="300">
      <v-card
        color="teal"
        dark>
        <v-card-text fixed>
          {{ translateEntity('users', 'loading') }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-btn
      fab
      bottom
      right
      color="teal"
      dark
      fixed
      @click="addDynamic">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
import DataTabulated from '../components/DataTabulated'
import { usersConfig } from '../config/usersConfig'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  components: {
    DataTabulated
  },
  name: 'Users',
  created () {
    this.getUsers()
  },
  data () {
    return {
      /**
       * File configuration
       * @type {Array}
       */
      usersConfig: usersConfig,
      /**
       * Data of table
       * @type {Array} data loading
       */
      dataTable: [],
      /**
       * Entity of end point
       * @type {String} name entity
       */
      entity: 'users',
      /**
       * loading of page
       * @type {Boolean} status loading
       */
      loadingDialog: true,
      /**
       * loading of table
       * @type {Boolean} status loading
       */
      loadingTable: true,
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
        sortField: 'name',
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
       * Name micreservices
       * @type {String} name of microservices
       */
      microservices: 'condominiums',
      /**
       * Paramaters for search
       * @type {Array}
       */
      search: {
        name: '',
        lastname: '',
        documents: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    /**
     * gets users
     * @param  {Object} data parmas table
     */
    getUsers (data) {
      data = Object.assign(this.params, data)
      let params = {
        paginate: true,
        page: data.page,
        perPage: data.perPage,
        sortField: data.sortField,
        sortOrder: data.sortOrder,
        dataSearch: data.search
      }
      this.loadingTable = true
      this.$services.getData([this.microservices, this.entity], params)
        .then((response) => {
          this.dataTable = response.res.data.data
          this.params.totalField = response.res.data.meta.total
          this.loadingTable = false
          this.loadingDialog = false
        }).catch((err) => {
          this.dataTable = []
          this.$notify({
            title: this.translateEntity('users', 'tileErrorServices'),
            message: this.translateEntity('users', 'errorServices'),
            type: 'error',
            duration: 1000
          })
          this.loadingTable = false
          this.loadingDialog = false
          this.params.totalField = 0
          console.log(err)
        })
    },
    /**
     * eventSearch searches data in microservices
     * @param  {String} data data search
     */
    eventSearch (data) {
      for (let field in this.search) {
        this.search[field] = data
      }
      this.params.page = 1
      this.params.search = this.search
      this.getUsers(this.params)
    },
    /**
     * Route add dynamic
     */
    addDynamic () {
      this.$router.push({ path: `add/${this.entity}` })
    }
  }
}
</script>
<style>
</style>
