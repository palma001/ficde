export const usersConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* documents */
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
              'prepend-icon': 'person'
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
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'number'
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
          header: true,
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
      /* rol */
      {
        addible: {
          addible: true,
          propTag: 'rol',
          type: String,
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
          propTag: 'rol',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'rol',
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
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'email',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'email'
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
      /* phone */
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
              'prepend-icon': 'phone'
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
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'number'
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
      /* user */
      {
        addible: {
          propTag: 'user',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'user',
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
          propTag: 'user',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'user',
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
      /* password */
      {
        addible: {
          propTag: 'pass',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'pass',
              'prepend-icon': 'lock'
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
          propTag: 'pass',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'pass',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-text-field',
            props: {
              type: 'password'
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
              type: 'map',
              'prepend-icon': 'map'
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
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'direccion',
          editable: true,
          header: false,
          type: 'String',
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
                  required: false
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
          visible: true,
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

export const tabsCofig = {
  titleAdd: 'usersAdd',
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
  data: {
    dni: '26720270',
    apellido: 'luis',
    rol: 'admin',
    nombre: 'luis'
  },
  buttonsTop: [
    {
      name: 'delete',
      action: 'delete',
      label: true,
      icon: {
        icon: false
      },
      props: {
        color: 'error'
      }
    },
    {
      name: 'update',
      action: 'update',
      label: true,
      icon: {
        icon: false
      },
      props: {
        color: 'primary'
      }
    }
  ]
}
