<template
>
   <v-layout
    dark
    wrap>
    <v-navigation-drawer
      app
      right
      dark
      stateless
      v-model="drawerDefined"
      v-loading="loading"
      :clipped="$vuetify.breakpoint.lgAndUp">
      <formEdition
        :entity="entity"
        :config="config"
        :propsPanelEdition="propsPanelEdition"
        @deleteData="deleteData"
        @update="update"
      />
    </v-navigation-drawer>
    <v-navigation-drawer
      right
      stateless
      absolute
      v-model="drawerDefinedIcon"
      :mini-variant="true"
      mini-variant-width="14px">
      <v-list-tile-action>
        <v-btn
          icon
          absolute
          style="left: -4px"
          @click="eventPanel(!drawer)"
        >
          <v-icon
            color="primary"
            style="font-weight: bold; font-size: 32px"
            v-if="drawer">
            chevron_right
          </v-icon>
          <v-icon
            color="primary"
            style="font-weight: bold; font-size: 32px"
            v-else-if="!drawer">
            chevron_left
          </v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
import formEdition from '../components/formEdition'
export default {
  name: 'panelEdition',
  components: {
    formEdition
  },
  props: {
    entity: {
      type: String,
      requered: true
    },
    config: {
      type: Array,
      requered: true
    },
    propsPanelEdition: {
      type: Object,
      requered: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      requered: true
    }
  },
  watch: {
    drawer (val) {
      this.drawerDefined = val
    }
  },
  data () {
    return {
      /**
       * Stastus panel
       * @type {Boolean}
       */
      drawerDefined: false,
      /**
       * Mini panel
       * @type {Boolean}
       */
      mini: true,
      /**
       * Status icon
       * @type {Boolean}
       */
      drawerDefinedIcon: true
    }
  },
  methods: {
    /**
     * Emit event panel
     * @param  {Boolean} status
     */
    eventPanel (status) {
      this.$emit('eventPanel', status)
    },
    /**
     * Emit event panel
     * @param  {Object} data
     */
    update (data) {
      this.$emit('update', data)
    },
    /**
     * Emit event panel
     * @param  {Object} data
     */
    deleteData (data) {
      this.$emit('deleteData', data)
    }
  }
}
</script>
