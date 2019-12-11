<template>
  <v-autocomplete
    :disabled="disabled"
    :items="data"
    :filter="customFilter"
    :color="color"
    :item-text="itemText"
    :label="label"
    :box="box"
    :counter="counter"
    :dark="dark"
    :error="error"
    :error-count="errorCount"
    :error-messages="errorMessage"
    :item-value="itemValue"
    :loading="loading"
    :return-object="returnObject"
    :prepend-icon="prependIcon"
    @change="selectSearch"
  />
</template>
<script>
export default {
  name: 'searchSelect',
  props: {
    /**
     * Can be an array of objects or array of strings. When using objects, will look for a text and value field. This can be changed using the item-text and item-value props.
     * @type {Array}
     */
    data: {
      type: Array,
      require: true
    },
    /**
     * Sets input label
     * @type {String}
     */
    label: {
      type: String,
      require: false
    },
    /**
     * Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5))
     * @type {String}
     */
    color: {
      type: String,
      default: 'primary'
    },
    /**
     * Set property of items's text value
     * @type {String}
     */
    itemText: {
      type: String,
      require: true
    },
    /**
     * Applies the alternate box input style
     * @type {Boolean}
     */
    box: {
      type: Boolean,
      default: false
    },
    /**
     * Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.
     * @type {Boolean|Number|String}
     */
    counter: {
      type: [Boolean, Number, String],
      default: undefined
    },
    /**
     * Applies the dark theme variant
     * @type {Boolean}
     */
    dark: {
      type: Boolean,
      default: false
    },
    /**
     * Disable the input
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Puts the input in a manual error state
     * @type {Boolean}
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * The total number of errors that should display at once
     * @type {String|Number}
     */
    errorCount: {
      type: [String, Number],
      default: 1
    },
    /**
     * Puts the input in an error state and passes through custom error messsages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation
     * @type {String|Array}
     */
    errorMessage: {
      type: [String, Array],
      require: false
    },
    /**
     * Set property of items's value - must be primative. Dot notation is supported
     * @type {String|Array|Function}
     */
    itemValue: {
      type: [String, Array, Function],
      require: true
    },
    /**
     * Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar
     * @type {Boolean|String}
     */
    loading: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Sets input type
     * @type {String}
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * Changes the selection behavior to return the object directly rather than the value specified with item-value
     * @type {Boolean}
     */
    returnObject: {
      type: Boolean,
      default: true
    },
    /**
     * show icons
     * @type {String}
     */
    prependIcon: {
      type: String,
      require: false
    }
  },
  methods: {
    /**
     * filter in component select
     * @param  {Object} item      data in the select
     * @param  {String} queryText data of filter
     * @param  {String} itemTex
     * @return {Boolean} data match
     */
    customFilter (item, queryText, itemText) {
      for (let tag in item) {
        if (item[tag]) {
          return item[tag].toLowerCase().includes(queryText.toLowerCase())
        }
      }
    },
    /**
     * emits events
     * @param  {Object} data data
     */
    selectSearch (data) {
      if (data) {
        this.$emit('select', data)
      }
    }
  }
}
</script>
