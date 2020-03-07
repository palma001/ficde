export const courseClassRoomsConfig = [
  {
    classTag: 'infoUsers',
    index: 0,
    children: [
      /* id_aula */
      {
        addible: {
          propTag: 'id_aula',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['nombreSede']} - ${value['nombre']}`
              },
              'item-value': 'cod_aula',
              'prepend-icon': 'fas fa-chalkboard-teacher'
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
          propTag: 'id_aula',
          type: String,
          sortable: true,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'id_aula',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['nombreSede']} - ${value['nombre']}`
              },
              'item-value': 'cod_aula'
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
      /* id_semestres */
      {
        addible: {
          propTag: 'id_semestres',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'nombre',
              'item-value': 'cod_semestre',
              'prepend-icon': 'fas fa-calendar-alt'
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
          propTag: 'id_semestres',
          type: String,
          sortable: true,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'id_semestres',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': 'nombre',
              'item-value': 'cod_semestre'
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
      /* id_materia */
      {
        addible: {
          propTag: 'id_materia',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['curso']} - ${value['materia']}`
              },
              'item-value': 'cod_materia',
              'prepend-icon': 'fas fa-book-reader'
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
          propTag: 'id_materia',
          sortable: true,
          type: Number,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'id_materia',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['curso']} - ${value['materia']}`
              },
              'item-value': 'cod_materia'
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
      /* id_usuario */
      {
        addible: {
          propTag: 'id_usuario',
          addible: true,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['dni']} - ${value['nombre']} ${value['apellido']}`
              },
              'item-value': 'cod_usuario',
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
          propTag: 'id_usuario',
          type: String,
          sortable: true,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'id_usuario',
          editable: true,
          header: false,
          type: 'String',
          visibleLabel: true,
          component: {
            name: 'v-autocomplete',
            props: {
              items: [],
              'item-text': value => {
                return `${value['dni']} - ${value['nombre']} ${value['apellido']}`
              },
              'item-value': 'cod_usuario'
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
      /* nombreAula */
      {
        addible: {
          propTag: 'nombreAula',
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
          propTag: 'nombreAula',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'nombreAula',
          editable: false,
          header: true,
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
      /* Nombre curso */
      {
        addible: {
          propTag: 'curso',
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
          propTag: 'curso',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'curso',
          editable: false,
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
      /* nombreMateria */
      {
        addible: {
          propTag: 'nombreMateria',
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
          propTag: 'nombreMateria',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'nombreMateria',
          editable: false,
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
      /* nombreProfesor */
      {
        addible: {
          propTag: 'nombreProfesor',
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
          propTag: 'nombreProfesor',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'nombreProfesor',
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
      /* dniProfesor */
      {
        addible: {
          propTag: 'dniProfesor',
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
          propTag: 'dniProfesor',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'dniProfesor',
          editable: false,
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
      /* apellidoProfesor */
      {
        addible: {
          propTag: 'apellidoProfesor',
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
          propTag: 'apellidoProfesor',
          sortable: true,
          type: String,
          fixed: false,
          visible: false,
          align: 'left'
        },
        edition: {
          propTag: 'apellidoProfesor',
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
      /* nombreSemestre */
      {
        addible: {
          propTag: 'nombreSemestre',
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
          propTag: 'nombreSemestre',
          sortable: true,
          type: String,
          fixed: false,
          visible: true,
          align: 'left'
        },
        edition: {
          propTag: 'nombreSemestre',
          editable: false,
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
export const tabsourseClassRoomsCofig = {
  titleAdd: 'coursesClassroomsAdd',
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
    targetPropTag: 'id_materia',
    entity: 'materias',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  },
  {
    targetPropTag: 'id_semestres',
    entity: 'semestres',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  },
  {
    targetPropTag: 'id_aula',
    entity: 'aulas',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false
    }
  },
  {
    targetPropTag: 'id_usuario',
    entity: 'usuarios',
    microservice: 'ficde',
    propData: 'items',
    petitionParams: {
      paginate: false,
      dataSearch: {
        rol: 'teacher'
      },
      sortField: 'cod_usuario',
      sortOrder: 'desc'
    }
  }
]
export const courseClassRoomsServices = {
  props: propsPanelEdition,
  config: courseClassRoomsConfig,
  propData: 'items',
  relationalData: relationalDataConfiguration
}
