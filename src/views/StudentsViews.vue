<template>
  <div>
    <Metadata
      route="students"
      :config="studentsConfig"
      :params="params"
      :entity="entity"
      :search="search"/>
  </div>
</template>
<script>
import Metadata from './Metadata.vue'
import { studentsConfig } from '../config/studentsConfig'
export default {
  name: 'Students',
  components: {
    Metadata
  },
  data () {
    return {
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
      }
    }
  }
}
</script>

  <style lang="css" scoped>
  </style>
