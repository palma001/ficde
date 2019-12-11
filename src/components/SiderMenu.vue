<template>
  <v-layout
    wrap>
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :mini-variant="collapseMenu"
      :hide-overlay="hideOverlay"
      :stateless="stateless"
      :dark="dark"
      :clipped="clipped"
      :disable-resize-watcher="disabledResizeWatcher"
      :disable-route-watcher="disableRouteWatcher"
      :fixed="fixed"
      :floating="floating"
      :height="height"
      :mini-variant-width="miniVariantWidth"
      :mobile-break-point="mobileBreakPoint"
      :permanent="permanent"
      :right="right"
      :temporary="temporaryMenu"
      :width="width"
      :absolute="absolute"
      :items="items"
      :collapse="collapse"
      :avatar="avatar"
      :title="title"
      :class="classSiderMenu"
      app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-1">
          <v-list-tile
            @click="eventClick(title)">
            <v-list-tile-avatar>
              <img :src="avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="collapsePanel"
              >
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list
        class="pt-2"
        :dense="true">
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="eventClick(item.title)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="collapseMenu" @click.stop="collapsePanel">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: 'SiderMenu',
  props: {
    /**
     * Class sider menu
     * @type {Array}
     */
    classSiderMenu: {
      type: Array,
      default: null
    },
    /**
     * Color Sider Menu
     * @type {String}
     */
    color: {
      type: String,
      default: 'purple'
    },
    /**
     * Items binding
     * @type {Array}
     */
    items: {
      type: Array,
      requerd: true
    },
    /**
     * dark themes of v-navigation-drawer
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
      default: false
    },
    /**
     * A clipped drawer rests under the application toolbar
     * @type {Boolean}
     */
    clipped: {
      type: Boolean,
      default: false
    },
    /**
     * Will automatically open/close drawer when resized depending if mobile or desktop
     * @type {Bolean}
     */
    disabledResizeWatcher: {
      type: Boolean,
      default: false
    },
    /**
     * Disables opening of navigation drawer when route changes
     * @type {Boolean}
     */
    disableRouteWatcher: {
      type: Boolean,
      default: true
    },
    /**
     * Position the element fixed
     * @type {Boolean}
     */
    fixed: {
      type: Boolean,
      default: false
    },
    /**
     * A floating drawer has no visible container (no border-right)
     * @type {Boolean}
     */
    floating: {
      type: Boolean,
      default: false
    },
    /**
     * A floating drawer has no visible container (no border-right)
     * @type {Numeber|String}
     */
    height: {
      type: [Number, String],
      default: '100%'
    },
    /**
     * Designates the width assigned when the mini prop is turned on
     * @type {Number|String}
     */
    miniVariantWidth: {
      type: [Number, String],
      default: 80
    },
    /**
     * Sets the designated mobile breakpoint
     * @type {Number|String}
     */
    mobileBreakPoint: {
      type: [Number, String],
      default: 1264
    },
    /**
     * The drawer remains visible regardless of screen size
     * @type {Boolean}
     */
    permanent: {
      type: Boolean,
      default: false
    },
    /**
     * Places the navigation drawer on the right
     * @type {Boolean}
     */
    right: {
      type: Boolean,
      default: false
    },
    /**
     * Remove all automated state functionality (resize, mobile, route) and manually control the drawer state
     * @type {Boolean}
     */
    stateless: {
      type: Boolean,
      default: false
    },
    /**
     * A temporary drawer sits above its application and uses a scrim (overlay) to darken the background
     * @type {Boolean}
     */
    temporary: {
      type: Boolean,
      default: false
    },
    /**
     * The width of the content
     * @type {Number|String}
     */
    width: {
      type: [Number, String],
      default: 300
    },
    /**
     * Hide the display of the overlay
     * @type {Boolean}
     */
    hideOverlay: {
      type: Boolean,
      default: false
    },
    /**
     * Position side menu
     * @type {Boolean}
     */
    absolute: {
      type: Boolean,
      default: false
    },
    /**
     * Collpase sider menu
     * @type {Boolean}
     */
    collapse: {
      type: Boolean,
      default: false
    },
    /**
     * Title app
     * @type {String}
     */
    title: {
      type: String,
      default: 'Binfrix'
    },
    /**
     * Avatar Users
     * @type {String}
     */
    avatar: {
      type: String,
      default: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
  },
  data () {
    return {
      drawer: true,
      collapseMenu: this.collapse,
      temporaryMenu: this.temporary
    }
  },
  methods: {
    eventClick (data) {
      this.$emit('changeRoute', data)
    },
    collapsePanel () {
      this.collapseMenu = !this.collapseMenu
      this.temporaryMenu = !this.temporaryMenu
    }
  }
}
</script>

<style>

</style>
