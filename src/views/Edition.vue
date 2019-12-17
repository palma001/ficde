<template>
   <v-layout
    wrap>
    <v-navigation-drawer
      v-model="drawerDefined"
      right
      dark
      app
      stateless
      v-loading="loading"
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
      <formEdition
        entity="usuarios"
        :config="config"
        :propsPanelEdition="propsPanelEdition"
      />
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
      drawerDefined: false
    }
  }
}
</script>
