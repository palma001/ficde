<template>
  <v-card>
    <v-card-title>
      <el-select
        v-model="value"
        @change="changeRowsPerPage">
        <el-option
          v-for="item in dataOptions"
          :key="item"
          :label="item"
          :value="item"/>
      </el-select>
      <v-spacer/>
      <el-row class="demo-autocomplete">
        <el-col :span="32">
          <el-input
            suffix-icon="el-icon-search"
            v-model="valueSearch"
            :placeholder="translateLabel('search')"
            @input="search"/>
        </el-col>
      </el-row>
    </v-card-title>
    <el-table
      ref="singleTable"
      style="width: 100%"
      highlight-current-row
      v-loading="loading"
      :data="tableData"
      :headers="headers"
      :checkBox="checkBox"
      :stripe="stripe"
      :border="border"
      :element-loading-text="translateLabel('loading')"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      @current-change="handleCurrentChange"
      @row-click="selectRow"
      @selection-change="selectRow"
      @sort-change="sortField">
      <el-table-column
        v-if="checkBox"
        type="selection">
      </el-table-column>
      <el-table-column
        v-for="header in headersData"
        :key="header.propTag"
        :prop="header.propTag"
        :label="translateEntity(entity, header.propTag)"
        :fixed="header.fixed"
        :align="header.align"
        :sortable="header.sortable"/>
    </el-table>
    <v-card-actions>
      <template>
        <div class="text-xs-center">
          <v-pagination
            v-model="pages"
            :length="lengthPage"
            :total-visible="7"
            :circle="circle"
            color="primary"
            @input="changePerPage"
          ></v-pagination>
        </div>
      </template>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  props: {
    /**
     * style pagination
     * @type {Boolean}
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     * Entity table
     * @type {Boolean}
     */
    entity: {
      type: String,
    },
    /**
     * Values of the pagination
     * @type {Array}
     */
    options: {
      type: Array,
      require: true
    },
    /**
     * loading table
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies whether the table has vertical borders
     * @type {Boolean}
     */
    border: {
      type: Boolean,
      default: false
    },
    /**
     * Specifies whether the table will be in stripes
     * @type {Boolean}
     */
    stripe: {
      type: Boolean,
      default: false
    },
    /**
     * tableData data of table
     * @type {Array}
     */
    tableData: {
      type: Array,
      default: null
    },
    /**
     * columns of table
     * @type {Array}
     */
    headers: {
      type: Array,
      default: null
    },
    /**
     * options checkbox
     * @type {Boolean}
     */
    checkBox: {
      type: Boolean,
      default: false
    },
    /**
     * Size pagination
     * @type {Number}
     */
    perPages: {
      type: Number,
      default: 5
    },
    /**
     * Total items
     * @type {Number}
     */
    totalPage: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data () {
    return {
      /**
       * pages page initial of table
       * @type {Number}
       */
      pages: 1,
      /**
       * currentRow
       * @type {type}
       */
      currentRow: null,
      /**
       * valueSearch value of search]
       * @type {String}
       */
      valueSearch: '',
      /**
       * dataOptions number of pagination
       * @type {Array}
       */
      dataOptions: this.options,
      /**
       * value number select of pagination
       * @type {[type]}
       */
      value: this.perPages,
      /**
       * pagination data of pagination
       * @type {Object}
       */
      pagination: {
        page: 0,
        perPage: this.perPages,
        sortField: 'name',
        sortOrder: 'desc',
        totalField: 0
      },
      /**
       * headersData content the headers
       * @type {Array}
       */
      headersData: []
    }
  },
  computed: {
    /**
     * lengthPage calculates the page
     * @return {Number} number of pages
     */
    lengthPage () {
      let pagination = Math.ceil(this.totalPage / this.perPages)
      return pagination
    }
  },
  created () {
    this.setHeaders()
  },
  methods: {
    /**
     * order of the table
     * @param {Object} data
     */
    sortField (data) {
      this.pagination.sortField = data.prop
      this.pagination.sortOrder = (data.order === 'descending') ? 'desc' : 'asc'
      this.$emit('on-load-data', this.pagination)
    },
    /**
     * setHeaders gets headers of table
     */
    setHeaders () {
      this.headers.map(element => {
        element.children.map(tag => {
          if (tag.tabulated.visible) {
            this.headersData.push(tag.tabulated)
          }
        })
      })
    },
    /**
     * search emit event for search
     * @param  {String} data value of search input
     */
    search (data) {
      this.pages = 1
      this.pagination.page = 1
      this.$emit('search-data', data)
    },
    /**
     * [setCurrent description]
     * @param {[type]} row [description]
     */
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    /**
     * changePerPage changes of pagination
     * @param  {Number} data number of pagination
     */
    changePerPage (data) {
      this.pagination.page = data
      this.$emit('on-load-data', this.pagination)
    },
    /**
     * changeRowsPerPage changes the pagination of the table
     * @param  {Number} data number of pagination
     */
    changeRowsPerPage (data) {
      this.pagination.perPage = data
      this.pagination.page = 1
      this.pages = 1
      this.$emit('on-load-data', this.pagination)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    /**
     * selectRow data of the row selected
     * @param  {Object} row row selected
     */
    selectRow (row) {
      this.$emit('selectRow', row)
    }
  }
}
</script>
<style>
  .el-table__row {
    cursor: pointer
  }
</style>
