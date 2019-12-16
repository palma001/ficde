<script>
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'formEdition',
  props: {
    config: {
      type: Array,
      required: true,
      default: null
    },
    entity: {
      type: String,
      required: true
    },
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
      config.map(children => {
        children.children.map(element => {
          if (element['edition'] && element['edition']['header']) {
            let propTag = element.edition['propTag']
            header.push(
              createElement('v-toolbar',
                {
                  props: {
                    dark: true,
                    color: 'dark'
                  },
                  class: {
                    'three-line': true
                  }
                },
                [
                  createElement('v-toolbar-title',
                    {
                      class: {
                        'headline': true,
                        'mb-1': true
                      }
                    },
                    [
                      self.propsPanelEdition['data'][0][propTag]
                    ]
                  )
                ]
              )
            )
          }
        })
      })
      return header
    },
    createButtonTop () {

    },
    createContainer (createElement, config, self) {
      return createElement('v-card',
        [
          self.getHeader(createElement, config, self),
          self.createButtonTop(createElement, config, self),
          createElement('v-container',
            [
              createElement('v-form',
                {
                  ref: 'from',
                  style: {
                    width: '90%',
                    margin: 'auto'
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
            prop['edition']['component']['props']['value'] = self.propsPanelEdition.data[0][propTag]
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
      [
        createElement('v-layout',
          {
            props: {
              row: true,
              wrap: true
            }
          }
        ),
        self.createContainer(createElement, self.config, self)
      ]
    )
  }
}
</script>
