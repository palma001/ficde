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
    </v-app>
  </div>
</template>

<script>
import AdminMain from '../components/AdminMain'
import { mixins } from '../mixins'
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
      dialog: false,
      /**
       * items of menu
       * @type {Array}
       */
      items: [
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'metadata',
          model: false,
          children: [
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
              icon: 'fas fa-universal-access',
              text: 'modalities',
              router: 'modalities'
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
              icon: 'fas fa-book-reader',
              text: 'subjects',
              router: 'subjects'
            },
            {
              icon: 'far fa-user',
              text: 'students',
              router: 'students'
            },
            {
              icon: 'contacts',
              text: 'users',
              router: 'users'
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
      microservices: 'condominiums'
    }
  },
  created () {
    this.changeRoute(this.$route.name)
    this.links(this.$route.path.split('/'))
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
        this.$store.dispatch('logout')
          .then(() => {
            this.$router.push({ path: '/login' })
          })
      }
    }
  }
}
</script>
<style>
</style>
