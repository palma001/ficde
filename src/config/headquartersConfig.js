export const headquartersConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* cod_institucion */
      {
        addible: {
          propTag: 'cod_institucion',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'nombre',
              'item-value': 'cod_institucion',
              'prepend-icon': 'fas fa-university'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'institucion',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'cod_institucion',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'nombre',
              'item-value': 'cod_institucion',
              'prepend-icon': ''
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true,
                  numeric: true
                }
              }
            ]
          }
        }
      },
      /* nombre */
      {
        addible: {
          propTag: 'nombre',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': 'fas fa-university'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'nombre',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'nombre',
          editable: true,
          header: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        }
      },
      /* telefono */
      {
        addible: {
          propTag: 'telefono',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': 'fas fa-mobile-alt'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'telefono',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'telefono',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        }
      },
      /* direccion */
      {
        addible: {
          propTag: 'direccion',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-textarea',
            props: {
              type: 'text',
              'prepend-icon': 'fas fa-route'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'direccion',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'direccion',
          editable: true,
          type: 'String',
          header: false,
          visibleLabel: true,
          component: {
            name: 'v-textarea',
            props: {
              type: 'text'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        }
      },
      /* user_r */
      {
        addible: {
          propTag: 'user_r',
          addible: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'map',
              'prepend-icon': 'map',
              defaultValue: 'Y'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'user_r',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'user_r',
          editable: false,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: false
                }
              }
            ]
          }
        }
      }
    ]
  }
]

export const tabsHeadquartersConfig = {
  titleAdd: 'headquartersAdd',
  buttons: [
    {
      name: 'cancel',
      action: 'cancel',
      label: true,
      icon: {
        icon: false
      },
      props: {
        color: 'error'
      }
    },
    {
      name: 'restore',
      action: 'restore',
      label: true,
      icon: {
        icon: false,
        iconName: 'remove'
      },
      props: {
        color: 'warning'
      }
    },
    {
      name: 'add',
      action: 'add',
      label: true,
      icon: {
        icon: false,
        iconName: 'add'
      },
      props: {
        dark: true,
        color: 'primary'
      }
    }
  ]
}

export const propsPanelEdition = {
  data: {},
  buttonsTop: [
    {
      name: 'delete',
      action: 'delete',
      label: false,
      icon: {
        icon: true,
        iconName: 'far fa-trash-alt'
      },
      props: {
        color: 'error'
      },
      style: {
        'border-radius': '50px',
        'margin-left': '25px'
      }
    },
    {
      name: 'update',
      action: 'update',
      label: false,
      icon: {
        icon: true,
        iconName: 'fas fa-pencil-alt'
      },
      props: {
        color: 'primary'
      },
      style: {
        'border-radius': '50px'
      }
    }
  ]
}

export const relationalDataConfiguration = [
  {
    targetPropTag: 'cod_institucion',
    entity: 'institucion',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  }
]
export const headquartersServices = {
  props: propsPanelEdition,
  config: headquartersConfig,
  propData: 'items',
  relationalData: relationalDataConfiguration
}
