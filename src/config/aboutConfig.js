export const aboutConfig = [
  {
    classTag: 'infoAbout',
    index: 0,
    children: [
      /* title */
      {
        addible: {
          propTag: 'title',
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
          propTag: 'title',
          sortable: true,
          type: Number,
          fixed: false,
          visible: true,
          align: 'left'
        }
      },
      /* tag */
      {
        addible: {
          propTag: 'tag',
          addible: false,
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
                  min: 8,
                  required: true
                }
              }
            ]
          }
        },
        tabulated: {
          propTag: 'tag',
          type: String,
          sortable: true,
          fixed: false,
          visible: false,
          align: 'left'
        }
      },
      /* description */
      {
        addible: {
          propTag: 'description',
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
          propTag: 'description',
          type: String,
          sortable: true,
          fixed: false,
          visible: true,
          align: 'left'
        }
      }
    ]
  }
]

export const aboutTabsCofig = {
  titleAdd: 'aboutAdd',
  component: {
    props: {
      animated: true,
      'has-navigation': false,
      type: 'is-success'
    },
    children: [
      {
        propsTag: 'infoUsers',
        props: {
          icon: 'account-plus'
        }
      },
      {
        propsTag: 'infoAdi',
        props: {
          icon: 'account'
        }
      }
    ]
  },
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
        color: 'teal'
      }
    }
  ]
}
