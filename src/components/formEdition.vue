<script>

import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'formEdition',
  props: {
    /**
     * File configurations
     * @type {Object}
     */
    config: {
      type: Array,
      required: true,
      default: null
    },
    /**
     * Entity
     * @type {Object}
     */
    entity: {
      type: String,
      required: true
    },
    /**
     * Props configurations
     * @type {Object}
     */
    propsPanelEdition: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      objectToBind: {}
    }
  },
  methods: {
    getHeader (createElement, config, self) {
      let header = []
      header.push(
        createElement('v-list',
          [
            self.propsPanelEdition['buttonsTop'].map(button => {
              return createElement('v-btn',
                {
                  class: {
                    ...button['class']
                  },
                  props: {
                    ...button['props']
                  },
                  style: {
                    ...button['style']
                  },
                  on: {
                    click: function () {
                      switch (button['action'].toLowerCase()) {
                        case 'update':
                          self.update(self.objectToBind)
                          break
                        case 'delete':
                          self.delete(self.objectToBind)
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
                  (button['label']) ? self.translateLabel(button['name']) : '',
                  (button['icon']['icon']) ? self.createIcon(createElement, button['icon']['iconName']) : ''
                ]
              )
            })
          ]
        )
      )
      config.map(children => {
        children.children.map(element => {
          if (element['edition'] && element['edition']['header']) {
            let propTag = element.edition['propTag']
            header.push(
              createElement('v-list',
                {
                  style: {
                    padding: '0px'
                  }
                },
                [
                  createElement('v-toolbar-title',
                    {
                      class: {
                        'headline': true
                      }
                    },
                    [
                      (self.propsPanelEdition['data'][propTag]) ? self.propsPanelEdition['data'][propTag].toUpperCase() : self.propsPanelEdition['data'][propTag]
                    ]
                  )
                ]
              )
            )
          }
        })
      })
      header.push(
        createElement('v-divider')
      )
      return header
    },
    createIcon (createElement, iconName) {
      return createElement('v-icon', iconName)
    },
    /**
     * Update data users
     * @param  {Object} data  users
     */
    update (data) {
      this.validateBeforeSubmit()
        .then(res => {
          if (res) {
            let datas = this.objectToBindS(this.propsPanelEdition['data'], data)
            this.$emit('update', datas)
          }
        })
    },
    /**
     * Assign data object
     * @param  {Object} dataOld data selected
     * @param  {Object} value data
     * @return {Object} new data
     */
    objectToBindS (dataOld, value) {
      let transform = {}
      for (let datasOld in dataOld) {
        transform[datasOld] = (value[datasOld]) ? value[datasOld] : dataOld[datasOld]
      }
      return transform
    },
    /**
     * Delete data
     * @param  {Object} data
     */
    delete (data) {
      data = Object.assign(this.propsPanelEdition['data'], data)
      this.$emit('deleteData', data)
    },
    /**
     * [createContainer description]
     * @param  {[type]} createElement [description]
     * @param  {[type]} config        [description]
     * @param  {[type]} self          [description]
     * @return {[type]}               [description]
     */
    createContainer (createElement, config, self) {
      return createElement('div',
        [
          self.getHeader(createElement, config, self),
          createElement('v-container',
            [
              createElement('v-form',
                {
                  ref: 'from',
                  style: {
                    width: '100%'
                  }
                },
                [
                  self.createInput(createElement, config, self)
                ]
              )
            ]
          )
        ]
      )
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
          if (prop['edition'] && prop['edition']['editable']) {
            let propTag = prop.edition['propTag']
            prop['edition']['component']['props']['value'] = self.propsPanelEdition.data[propTag]
            return createElement('v-flex',
              [
                createElement(prop['edition']['component']['name'],
                  {
                    props: {
                      label: (prop['edition']['visibleLabel']) ? self.translateEntity(self.entity, propTag) : '',
                      ...prop['edition']['component']['props'],
                      errorMessage: (self.errorValidation(propTag)) ? [self.errorValidation(propTag)] : '',
                      'error-messages': (self.errorValidation(propTag)) ? [(self.errorValidation(propTag))] : ''
                    },
                    attrs: {
                      name: propTag,
                      ...prop['edition']['component']['attrs']
                    },
                    class: {
                      ...prop['edition']['component']['class']
                    },
                    style: {
                      ...prop['edition']['component']['style']
                    },
                    on: {
                      input: function (value) {
                        self.objectToBind[propTag] = value
                      },
                      select: function (value) {
                        self.objectToBind[propTag] = value
                      }
                    },
                    directives: (function () {
                      if (prop['edition']['component']['directives']) {
                        let directives = [
                          ...prop['edition']['component']['directives']
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
     * Error validations
     * @param  {String} propTag name
     * @return {String} error message
     */
    errorValidation (propTag) {
      if (this.errors.has(propTag)) {
        return this.errors.first(propTag)
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
    }
  },
  render: function (createElement) {
    let self = this
    return createElement('div',
      {
        class: {
          'text-xs-center': true
        }
      },
      [
        createElement('v-layout',
          {
            props: {
              'justify-center': true
            }
          }
        ),
        self.createContainer(createElement, self.config, self)
      ]
    )
  }
}
</script>
