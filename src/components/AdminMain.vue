<template>
  <div id="app">
    <v-navigation-drawer
      app
      dark
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ translateEntity('ROUTE', item.text) }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              style="margin-left: 20px;"
              @click="chageRoute(child.router)">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ translateEntity('ROUTE', child.text) }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text"
            @click="chageRoute(item.router)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ translateEntity('ROUTE', item.text) }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed>
      <v-toolbar-title
        style="width: 300px"
        class="ml-1 pl-2">
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer" />
        <span
          class="hidden-sm-and-down">
          {{ title }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        v-for="icon in itemsToolbar"
        :key="icon.id">
        <v-btn icon>
          <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-btn icon large>
        <v-avatar size="32px">
          <img
            src="https://noescinetodoloquereluce.com/wp-content/uploads/2014/03/scarlett-widow.jpg"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'AdminMain',
  data () {
    return {
      drawer: null
    }
  },
  props: {
    source: String,
    items: {
      type: Array,
      require: true
    },
    title: {
      type: String,
      require: false
    },
    itemsToolbar: {
      type: Array,
      require: false
    }
  },
  methods: {
    chageRoute (router) {
      this.$emit('changeRoute', router)
    }
  }
}
</script>
<style>
  body {
    overflow: auto;
  }
</style>
