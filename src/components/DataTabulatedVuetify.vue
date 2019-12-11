<template>
  <v-card>
    <v-card-title v-if="searchInput && hideActions === true">
      <v-select
        menu-props="auto"
        :items="itemsPaginate"
        :label="translateLabel('paginate')"
        @change="paginationPerpage"/>
      <v-spacer></v-spacer>
      <v-text-field
      v-model="search"
      append-icon="search"
      single-line
      :label="translateLabel('search')"
      @input="searchData"/>
    </v-card-title>
    <v-data-table
      class="elevation-1"
      :headers="headersData"
      :items="items"
      :dark="darkTable"
      :loading="loadingTable"
      :total-items="totalItems"
      :search="search"
      :hide-actions="hideActions"
      :pagination.sync="pagination"
      @update:pagination="onloadData">
      <template
        v-slot:items="props">
        <td
          v-for="value in props.item"
          :key="value"
          @click="selectRow(props.item)">
          {{ value }}
        </td>
      </template>
    </v-data-table>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div v-if="hideActions">
        <v-pagination
          v-model="pagination.page"
          :length="pages"
          :color="colorPagination"
          :circle="circle"
          @input="paginationData"/>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'VuetifyDataTabulated',
  props: {
    /**
     * Table checkBox
     * @type {Boolean}
     */
    checkBox: {
      type: Boolean,
      default: false
    },
    headers: {
      type: Array,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * Color pagination
     * @type {String}
     */
    colorPagination: {
      type: String,
      default: 'primary'
    },
    loadingTable: {
      type: Boolean,
      default: false
    },
    darkTable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Users'
    },
    hideActions: {
      type: Boolean,
      default: false
    },
    searchInput: {
      type: Boolean,
      default: false
    },
    /**
     * Manually sets total number of row items
     * @type {Number}
     */
    totalItems: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      headersData: [],
      search: '',
      pagination: {},
      selected: [],
      itemsPaginate: [5, 10, 20, 50]
    }
  },
  created () {
    this.setHeaders()
  },
  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
      this.pagination.totalItems == null) return 0
      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  },
  methods: {
    /**
     * setHeaders gets headers of table
     */
    setHeaders () {
      this.headers.map(element => {
        element.children.map(tag => {
          if (tag.tabulated.visible) {
            this.headersData.push(
              {
                value: tag.tabulated.propTag,
                text: this.translateLabelEntity(tag.tabulated.propTag, 'USERS'),
                alig: tag.tabulated.aling
              }
            )
          }
        })
      })
    },
    /**
     * paginationPerpage number page
     * @param  {Number} data number of page
     */
    paginationPerpage (data) {
      this.pagination.rowsPerPage = data
      this.onloadData(this.pagination)
    },
    /**
     * paginationData numbers the row in the table
     * @param  {Number} data number the row
     */
    paginationData (data) {
      this.pagination.page = data
      this.onloadData(this.pagination)
    },
    /**
     * searchData data of filters
     * @param  {String} data [description]
     */
    searchData (data) {
      this.pagination.data = data
      this.onloadData(this.pagination)
    },
    /**
     * onloadData emit event and send data of the pagination
     * @param  {Object} data of pagination
     */
    onloadData (data) {
      this.$emit('on-load-data', data)
    },
    /**
     * translateLabel translates text
     * @param  {String} value text
     * @return {String} translated text
     */
    translateLabel (value) {
      return this.$i18n.t(`template.${value}.label`)
    },
    /**
     * [translateLabelEntity translates text for entity]
     * @param  {String} value  Text
     * @param  {String} entity Entity
     * @return {String} translated text
     */
    translateLabelEntity (value, entity) {
      return this.$i18n.t(`template.${entity}.${value}.label`)
    }
  }
}
</script>
