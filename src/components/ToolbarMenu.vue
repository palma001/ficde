<template>
  <div class="toolbar">
    <v-toolbar
      :color="color"
      :grow="grow"
      :itemas="items"
      :dark="dark"
      :tabs="tabs"
      :class="classToolbar"
      :classIcon="classIcon"
      :dense="dense"
      :title="title"
      :flat="flat"
      :clipped-left="clippedLeft"
      :clipped-right="clippedRight">
      <v-spacer></v-spacer>
      <template v-slot:extension v-if="title !== ''">
        <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      </template>
      <v-toolbar-items :class="classIcon" v-for="item in items" :key="item.title">
        <v-btn icon
          @click="eventIcon(item.icon)">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'ToolbarMenu',
  props: {
    /**
     * Designates that the applications v-navigation-drawer is clipped on the left side of the toolbar
     * @type {Boolean}
     */
    clippedLeft: {
      type: Boolean,
      default: false
    },
    /**
     * Designates that the applications v-navigation-drawer is clipped on the right side of the toolbar
     * @type {Boolean}
     */
    clippedRight: {
      type: Boolean,
      default: false
    },
    /**
     * Removes the toolbar box-shadow
     * @type {Boolean}
     */
    flat: {
      type: Boolean,
      default: false
    },
    /**
     * title app
     * @type {String}
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * dense
     * @type {Boolean}
     */
    dense: {
      type: Boolean,
      default: false
    },
    /**
     * Class toolbar
     * @type {Array}
     */
    classToolbar: {
      type: Array,
      default: null
    },
    /**
     * Class toolbar
     * @type {Array}
     */
    classIcon: {
      type: Array,
      default: null
    },
    /**
     * tabs Toolbar
     * @param {Boolean}
     */
    tabs: {
      type: Boolean,
      default: true
    },
    /**
     * Applies the dark theme variant
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
      default: true
    },
    /**
     * Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))
     * @type {String}
     */
    color: {
      type: String,
      default: 'purple'
    },
    /**
     * The class used when item is active
     * @type {String}
     */
    activeClass: {
      type: String,
      default: 'v-tabs__item--active'
    },
    /**
     * Force v-tab's to take up all available space
     * @type {Boolean}
     */
    grow: {
      type: Boolean,
      default: false
    },
    /**
     * Items Toolbar
     * type {Array}
     */
    items: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      model: 'tab-2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    /**
     * Event emit the button icons
     * @param  {String} data type icons
     */
    eventIcon (data) {
      this.$emit('eventIcon', data)
    }
  }
}
</script>
<style>
.toolbar {
  width: 100%;
}
</style>
