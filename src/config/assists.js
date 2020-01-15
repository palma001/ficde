export const assistsConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* cod_asistencia */
      {
        addible: {
          propTag: 'cod_asistencia',
          addible: false,
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
          propTag: 'cod_asistencia',
          sortable: true,
          type: Number,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'cod_asistencia',
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
                  required: true
                }
              }
            ]
          }
        }
      },
      /* id_estudiante */
      {
        addible: {
          propTag: 'id_estudiante',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'dni',
              'item-value': 'cod_estudiante',
              'prepend-icon': 'fas fa-user'
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
          propTag: 'id_estudiante',
          type: String,
          sortable: true,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'id_estudiante',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'dni',
              'item-value': 'cod_estudiante'
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
      /* id_em */
      {
        addible: {
          propTag: 'id_em',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'id_semestre',
              'item-value': 'cod_em',
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
          propTag: 'id_em',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'id_em',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'id_semestre',
              'item-value': 'cod_em'
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
      /* dni */
      {
        addible: {
          propTag: 'dni',
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
          propTag: 'dni',
          sortable: true,
          type: String,
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
      /* nombreEstudiante */
      {
        addible: {
          propTag: 'nombreEstudiante',
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
          propTag: 'nombreEstudiante',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'nombreEstudiante',
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
      /* apellidoEstudiante */
      {
        addible: {
          propTag: 'apellidoEstudiante',
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
          propTag: 'apellidoEstudiante',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'apellidoEstudiante',
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
      /* estatus */
      {
        addible: {
          propTag: 'estatus',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [
                {
                  label: 'Asistio',
                  value: true
                },
                {
                  label: 'Ausente',
                  value: false
                }
              ],
              'item-text': 'label',
              'item-value': 'value',
              'prepend-icon': 'fas fa-signature'
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
          propTag: 'estatus',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left',
          tag: true,
          functionValue: value => {
            return value ? 'Asistió' : 'Ausente'
          },
          functionClass: value => {
            return value ? 'success' : 'danger'
          }
        },
        edition: {
          propTag: 'estatus',
          editable: true,
          header: false,
          type: 'Boolean',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [
                {
                  name: 'Asistió',
                  value: 'true'
                },
                {
                  name: 'Ausente',
                  value: 'false'
                }
              ],
              'item-text': 'name',
              'item-value': 'value'
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

export const tabsAssistsCofig = {
  titleAdd: 'assistsAdd',
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
    targetPropTag: 'id_estudiante',
    entity: 'estudiantes',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  },
  {
    targetPropTag: 'id_em',
    entity: 'estudiantes_materias',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  }
]
export const assistsServices = {
  props: propsPanelEdition,
  config: assistsConfig,
  propData: 'items',
  relationalData: relationalDataConfiguration
}
