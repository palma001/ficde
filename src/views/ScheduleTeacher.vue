<template>
  <v-layout>
    <vue-cal selected-date="2018-11-19"
      :time-from="1 * 60"
      :time-to="24 * 60"
      :disable-views="['years', 'year', 'month']"
      :events="events"
      :on-event-click="onEventClick">
    </vue-cal>

    <!-- Using Vuetify -->
    <v-dialog v-model="showDialog" max-width="390" persistent>
      <v-card>
        <v-card-title class="headline">
          <h3>{{ selectedEvent.title }}</h3>
        </v-card-title>
        <v-card-text>
          <p v-html="selectedEvent.contentFull"/>
        </v-card-text>
         <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="primary darken-1"
              text
              @click="showDialog = false"
            >
              Salir
            </v-btn>

            <v-btn
              color="primary darken-1"
              text
            >
             Inscribir
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  components: { VueCal },
  data: () => ({
    selectedEvent: {},
    showDialog: false,
    events: []
  }),
  created () {
    this.getHorarios()
  },
  methods: {
    async getHorarios () {
      let { res } = await this.$services.getData(['ficde', 'semestres_materias'], {
        paginate: false
      })
      this.getInfo(res.data.data)
    },
    getInfo (data) {
      this.events = data.map(element => {
        return {
          start: this.getDate(element.dia, element.hora_e),
          end: this.getDate(element.dia, element.hora_s),
          title: `${element.nombreMateria} - ${element.nombreProfesor}`,
          contentFull: `
            Nombre del Aula - <strong>${element.nombreAula}</strong>
            <br>
            <ul>
              <li>Deni del Profesor: ${element.dniProfesor}</li>
              <li>Nombre del Profesor: ${element.nombreProfesor} ${element.apellidoProfesor}</li>
              <li>Modalidad: ${element.modalidad}</li>
              
            </ul>
          `,
          class: 'sport'
        }
      })
      console.log(this.events)
    },
    getDate(day, hours) {
      console.log(day, hours)
      switch (day) {
        case 'Lunes':
          return `2018-11-20 ${hours}`
        case 'Martes':
          return `2018-11-21 ${hours}`
        case 'Miercoles':
          return `2018-11-22 ${hours}`
        case 'Jueves':
          return `2018-11-23 ${hours}`
        case 'Viernes':
          return `2018-11-24 ${hours}`
        case 'Sabado':
          return `2018-11-25 ${hours}`
        default:
          return `2018-11-19 ${hours}`
          // statements_def
          break;
      }
    },
    onEventClick (event, e) {
      this.selectedEvent = event
      this.showDialog = true

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    }
  }
}
</script>
<style>
.vuecal__event {
  cursor: pointer;
}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.vuecal__flex .weekday-label span:last-child{
  display: none;
}
.vuecal__title-bar {
  display: none;
}
.vuecal__event-content {
  font-style: italic;
}
</style>
