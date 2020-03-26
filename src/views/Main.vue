<template>
  <div id="app">
    <v-app id="inspire">
      <AdminMain
        :title="this.translateLabel('titleApp')"
        :items="items"
        :itemsToolbar="itemsToolbar"
        @changeRoute="changeRoute"/>
      <v-content>
          <v-container fluid fill-height>
            <v-layout justify-center>
              <div style="width: 100%;">
                <v-breadcrumbs
                  :items="itemsLink">
                  <template v-slot:divider>
                    <v-icon>chevron_right</v-icon>
                  </template>
                </v-breadcrumbs>
                <v-layout justify-center>
                  <div style="width: 90%; margin-top: 10px">
                    <router-view/>
                  </div>
                </v-layout>
              </div>
            </v-layout>
          </v-container>
      </v-content>
      <v-dialog
        v-model="GET_TOKEN"
        max-width="390"
        persistent
        >
          <v-card>
            <v-card-title class="headline">Mensaje de Sistema</v-card-title>

            <v-card-title>
              <h3>
                Su sesion a expirado, ¿desea continuar con la sesion?
              </h3>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="primary darken-1"
                text
                @click="changeRoute('logout')"
              >
                Salir
              </v-btn>

              <v-btn
                color="primary darken-1"
                text
                @click="refreshToken"
              >
                Continuar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-app>
  </div>
</template>

<script>
import AdminMain from '../components/AdminMain'
import { mixins } from '../mixins'
import { mapActions, mapGetters } from 'vuex'
import { ACTIONS, GETTERS } from '../store/module-login/name.js'
export default {
  mixins: [mixins.containerMixin],
  name: 'Main',
  components: {
    AdminMain
  },
  data () {
    return {
      /**
       * status of form
       * @type {Boolean}
       */
      dialog: true,
      /**
       * items of menu
       * @type {Array}
       */
      items: [
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'admin',
          model: false,
          children: [
            {
              icon: 'fas fa-user-edit',
              text: 'inscription',
              router: 'inscription'
            },
            {
              icon: 'fas fa-user',
              text: 'students',
              router: 'students'
            },
            {
              icon: 'contacts',
              text: 'users',
              router: 'users'
            },
            {
              icon: 'fas fa-university',
              text: 'headquarters',
              router: 'headquarters'
            },
            {
              icon: 'fas fa-chalkboard-teacher',
              text: 'classrooms',
              router: 'classrooms'
            },
            {
              icon: 'fas fa-calendar-alt',
              text: 'semesters',
              router: 'semesters'
            },
            {
              icon: 'fas fa-book',
              text: 'courses',
              router: 'courses'
            },
            {
              icon: 'fas fa-atlas',
              text: 'coursesclassrooms',
              router: 'coursesclassrooms'
            },
            {
              icon: 'fas fa-book-reader',
              text: 'subjects',
              router: 'subjects'
            },
            {
              icon: 'fas fa-universal-access',
              text: 'modalities',
              router: 'modalities'
            },
            {
              icon: 'fas fa-clock',
              text: 'turn',
              router: 'turn'
            }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'teachers',
          model: false,
          children: [
            {
              icon: 'fas fa-sticky-note',
              text: 'notes',
              router: 'notes'
            },
            {
              icon: 'fas fa-users',
              text: 'assists',
              router: 'assists'
            },
            {
              icon: 'fas fa-calendar-alt',
              text: 'schedule',
              router: 'schedule'
            }
          ]
        },
        {
          icon: 'logout',
          text: 'logout',
          router: 'logout'
        }
        // { icon: 'content_copy', text: 'Duplicates' },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'add', text: 'Create label' }
        //   ]
        // },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'More',
        //   model: false,
        //   children: [
        //     { text: 'Import' },
        //     { text: 'Export' },
        //     { text: 'Print' },
        //     { text: 'Undo changes' },
        //     { text: 'Other contacts' }
        //   ]
        // },
        // { icon: 'settings', text: 'Settings' },
        // { icon: 'chat_bubble', text: 'Send feedback' },
        // { icon: 'phonelink', text: 'App downloads' },
        // { icon: 'keyboard', text: 'Go to the old version' }
      ],
      /**
       * items of toolbar
       * @type {Array}
       */
      itemsToolbar: [
        { icon: 'search' },
        { icon: 'more_vert' }
      ],
      /**
       * [itemsLink description]
       * @type {Array}
       */
      itemsLink: [],
      /**
       * [tabsConfig description]
       * @type {Object}
       */
      tabsConfig: null,
      /**
       * Name microservices
       * @type {String}
       */
      microservices: 'ficde'
    }
  },
  computed: {
    ...mapGetters([
      GETTERS.GET_TOKEN
    ])
  },
  created () {
    this.changeRoute(this.$route.name)
    this.links(this.$route.path.split('/'))
    this.itemsMenu()
  },
  methods: {
    links (router) {
      this.itemsLink = []
      router.forEach((element) => {
        if (element) {
          this.itemsLink.push(
            {
              text: this.translateEntity('ROUTE', element),
              disabled: true,
              href: ''
            }
          )
        }
      })
    },
    /**
     * Router
     * @param  {String} data route view
     */
    changeRoute (data) {
      if (data !== 'logout') {
        this.$router.push({ name: data })
        this.links(this.$route.path.split('/'))
        this.$emit('routeChange', { route: data })
      } else {
        this[ACTIONS.LOGOUT]({ self: this })
      }
    },

    refreshToken () {
      this[ACTIONS.REFRESH_TOKEN]({ self: this })
    },

    async itemsMenu () {
      let { response } = await this.$mockData.getData('permissions')
      response.data.content.map(permissions => {
        this.items = this.items.filter(item => {
          for (let rols in permissions) {
            if (rols === item.text) {
              item.children = item.children.filter(children => {
                for (let modules in permissions[rols]) {
                  if (children.text === modules && permissions[rols][modules]['viewAny']) {
                    return true
                  }
                }
              })
              return true
            }
          }
        })
      })
    },

    ...mapActions([ACTIONS.LOGOUT, ACTIONS.REFRESH_TOKEN])
  }
}
</script>
<style>
</style>
