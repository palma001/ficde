<script>
import searchSelect from './input/searchSelect'
export default {
  name: 'DynamicForm',
  components: {
    searchSelect
  },
  data () {
    return {
      objectToBind: {},
      invalidateKey: false
    }
  },
  props: {
    config: {
      type: Array,
      required: true
    },
    entity: {
      type: String,
      require: true
    },
    tabs: {
      type: Object,
      require: true
    },
    primaryKey: {
      type: Array,
      required: false
    },
    microservices: {
      type: String,
      required: false
    }
  },
  methods: {
    createContainer (createElement, tabs) {
      let container = []
      let self = this
      container.push(
        createElement('v-card',
          [
            createElement('v-toolbar',
              {
                props: {
                  dark: true,
                  color: 'teal'
                }
              },
              [
                createElement('v-toolbar-title',
                  [
                    self.translateLabelEntity(tabs['titleAdd'], self.entity)
                  ]
                )
              ]
            ),
            createElement('v-container',
              [
                createElement('v-form',
                  {
                    ref: 'form'
                  },
                  [
                    self.createInput(createElement, self.config, self)
                  ]
                )
              ]
            ),
            createElement('v-divider'),
            createElement('v-card-actions',
              [
                createElement('v-spacer'),
                tabs.buttons.map(buttons => {
                  return createElement('v-btn',
                    {
                      props: {
                        ...buttons['props']
                      },
                      on: {
                        click: function () {
                          switch (buttons['action'].toLowerCase()) {
                            case 'add':
                              self.addData()
                              break
                            case 'cancel':
                              self.cancel()
                              break
                            case 'restore':
                              self.restore()
                              break
                            default:
                          }
                        }
                      }
                    },
                    [
                      (buttons['label']) ? self.translateLabel(buttons['name']) : '',
                      (buttons['icon']['icon']) ? self.createIcon(createElement, buttons['icon']['iconName']) : ''
                    ]
                  )
                })
              ]
            )
          ]
        )
      )
      return container
    },
    createIcon (createElement, iconName) {
      return createElement('v-icon', iconName)
    },
    /**
     * Cancel Add dynamic
     */
    cancel () {
      this.$router.go(-1)
    },
    /**
     * restore form
     */
    restore () {
      this.$refs.form.reset()
      this.$validator.reset()
      this.invalidateKey = false
    },
    /**
     *
     *
     */
    getPrimaryKey (data) {
      this.$services.getDataParams(
        [this.microservices, this.entity],
        data[this.primaryKey[0]])
        .then(res => {
          if (res.res.status === 200) {
            this.invalidateKey = true
            this.errorValidation(this.primaryKey[0])
          } else {
            this.invalidateKey = false
          }
        })
    },
    /**
     * Add data
     */
    addData () {
      this.validateBeforeSubmit()
        .then(res => {
          if (res && !this.invalidateKey) {
            this.$emit('save', this.objectToBind)
          }
        })
    },
    /**
    * Creates the input according to the propTag config data
    * @param {Function} createElement builds element nodes
    * @param {Array} config to create components
    */
    createInput (createElement, config, self) {
      let createInputDynamic = []
      config.map(element => {
        createInputDynamic.push(element.children.map(prop => {
          if (prop['addible'] && prop['addible']['addible']) {
            let propTag = prop.addible['propTag']
            prop['addible']['component']['props']['value'] = self.objectToBind[propTag]
            return createElement('v-flex',
              [
                createElement(prop['addible']['component']['name'],
                  {
                    props: {
                      label: (prop['addible']['visibleLabel']) ? self.translateLabelEntity(propTag, self.entity) : '',
                      ...prop['addible']['component']['props'],
                      errorMessage: (self.errorValidation(propTag)) ? [self.errorValidation(propTag)] : '',
                      'error-messages': (self.errorValidation(propTag)) ? [(self.errorValidation(propTag))] : ''
                    },
                    attrs: {
                      name: propTag,
                      ...prop['addible']['component']['attrs']
                    },
                    class: {
                      ...prop['addible']['component']['class']
                    },
                    on: {
                      input: function (value) {
                        self.objectToBind[propTag] = value
                      },
                      select: function (value) {
                        self.objectToBind[propTag] = value
                      },
                      blur: function () {
                        self.getPrimaryKey(self.objectToBind)
                      }
                    },
                    directives: (function () {
                      if (prop['addible']['component']['directives']) {
                        let directives = [
                          ...prop['addible']['component']['directives']
                        ]
                        return directives
                      }
                    })()
                  }
                )
              ]
            )
          }
        }))
      })
      return createInputDynamic
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
     * Validations the errors
     * @param  {String} propTag data fromulary
     * @return {String} errors
     */
    errorValidation (propTag) {
      if (this.errors.has(propTag) || !this.invalidateKey) {
        return this.errors.first(propTag)
      } else {
        return this.messageErrorPrimary(propTag)
      }
    },
    /**
     * Message primary key
     * @param  {String} propTag
     * @return {String} message the error
     */
    messageErrorPrimary (propTag) {
      if (this.invalidateKey && propTag === this.primaryKey[0]) {
        return this.translateLabelEntity('invalidatePrimaryKey', 'message')
      } else {
        return ''
      }
    },
    /**
     * Verify formulary error
     * @param {String} event form to change
     */
    validateBeforeSubmit () {
      return this.$validator.validateAll()
        .then((result) => {
          return result
        })
        .catch((err) => {
          console.log(err)
        })
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
  },
  render: function (createElement) {
    let self = this
    return createElement('div', {
      porps: {
        'grid-list-sm': true
      },
      class: {
        'p-4': true
      }
    },
    [
      createElement('v-layout', {
        props: {
          row: true,
          wrap: true
        }
      }),
      self.createContainer(createElement, self.tabs)
    ])
  }
}
</script>
