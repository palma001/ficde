<template>
   <v-layout
    wrap
    style="height: 200px;">
    <v-btn
        color="pink"
        dark
        @click.stop="drawer = !drawer"
      >
        Toggle
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      hide-overlay
      dark
      stateless
    >
      <formEdition
        entity="usuarios"
        :config="usersConfig"
        :propsPanelEdition="propsPanelEdition"
      />
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
import formEdition from '../components/formEdition'
import { usersConfig } from '../config/usersConfig'
export default {
  name: 'Edition',
  components: {
    formEdition
  },
  data () {
    return {
      usersConfig,
      drawer: false,
      propsPanelEdition: {
        data: [
          {
            dni: '26720270',
            apellido: 'luis',
            rol: 'admin',
            nombre: 'luis'
          }
        ],
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
          }
        ]
      }
    }
  }
}
</script>
