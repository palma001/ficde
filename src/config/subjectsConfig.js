export const subjectsConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* cod_curso */
      {
        addible: {
          propTag: 'cod_curso',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              type: 'text',
              items: [],
              'item-text': 'curso',
              'item-value': 'cod_curso',
              'prepend-icon': 'person'
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
          propTag: 'cod_curso',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'cod_curso',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              type: 'text',
              items: [],
              'item-text': 'curso',
              'item-value': 'cod_curso',
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
          propTag: 'materia',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': 'person'
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
          propTag: 'materia',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'materia',
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
      /* dascripcion */
      {
        addible: {
          propTag: 'descripcion',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-textarea',
            props: {
              type: 'text',
              'prepend-icon': 'person'
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
          propTag: 'descripcion',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'descripcion',
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
      /* status */
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

export const tabsSubjectsCofig = {
  titleAdd: 'subjectsAdd',
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
    targetPropTag: 'cod_curso',
    entity: 'cursos',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  }
]
export const subjectsServices = {
  props: propsPanelEdition,
  config: subjectsConfig,
  propData: 'items',
  relationalData: relationalDataConfiguration
}
