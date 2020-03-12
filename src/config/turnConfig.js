export const turnConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* dia */
      {
        addible: {
          propTag: 'dia',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [
                'Lunes',
                'Martes', 
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
              ],
              'prepend-icon': 'fas fa-calend'
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
          propTag: 'dia',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'dia',
          editable: true,
          header: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [
                'Lunes',
                'Martes', 
                'Miercoles',
                'Jueves',
                'Viernes',
                'Sabado',
                'Domingo'
              ]
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
      /* turno */
      {
        addible: {
          propTag: 'turno',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              'prepend-icon': 'fas fa-book'
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
          propTag: 'turno',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'turno',
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
      /* hora_e */
      {
        addible: {
          propTag: 'hora_e',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'time',
              'prepend-icon': 'fas fa-clock'
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
          propTag: 'hora_e',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'hora_e',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'time'
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
      /* hora_s */ 
      {
        addible: {
          propTag: 'hora_s', 
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'time',
              'prepend-icon': 'fas fa-clock'
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
          propTag: 'hora_s', 
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'hora_s',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'time'
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
          propTag: 'status',
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
          propTag: 'status',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'status',
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
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              disabled: true
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
      },
      /* created_at */
      {
        addible: {
          propTag: 'created_at',
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
          propTag: 'created_at',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'created_at',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              disabled: true
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
      },
      /* update_at */
      {
        addible: {
          propTag: 'updated_at',
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
          propTag: 'updated_at',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'updated_at',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'text',
              disabled: true
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

export const tabsTurnCofig = {
  titleAdd: 'turnAdd',
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
