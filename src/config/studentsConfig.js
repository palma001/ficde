export const studentsConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* dni */
      {
        addible: {
          propTag: 'dni',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'number',
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
        },
        tabulated: {
          propTag: 'dni',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'dni',
          editable: false,
          header: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
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
              'prepend-icon': ''
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
          type: 'String',
          header: false,
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': ''
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

      /* apellido */
      {
        addible: {
          propTag: 'apellido',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': ''
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
          propTag: 'apellido',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'apellido',
          editable: true,
          type: 'String',
          header: false,
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': ''
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
      /** email */
      {
        addible: {
          propTag: 'email',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'email',
              'prepend-icon': 'email'
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true,
                  email: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'email',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'email',
          editable: true,
          type: 'String',
          header: false,
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'email',
              'prepend-icon': ''
            },
            directives: [
              {
                name: 'validate',
                value: {
                  required: true,
                  email: true
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
              type: 'number',
              'prepend-icon': 'telefono'
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
        },
        tabulated: {
          propTag: 'telefono',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'telefono',
          editable: true,
          type: 'String',
          header: false,
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': ''
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
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': ''
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
          visible: false,
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
              type: 'text',
              'prepend-icon': ''
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
      }
    ]
  }
]

export const tabsCofigStudents = {
  titleAdd: 'studentsAdd',
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
