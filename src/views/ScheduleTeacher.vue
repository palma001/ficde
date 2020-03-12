<template>
  <v-layout>
    <vue-cal selected-date="2018-11-19"
      :time-from="7 * 60"
      :time-to="22 * 60"
      :disable-views="['years', 'year', 'month']"
      :events="events"
      :on-event-click="onEventClick">
    </vue-cal>

    <!-- Using Vuetify -->
    <v-dialog v-model="showDialog">
      <v-card>
        <v-card-title>
          <v-icon>{{ selectedEvent.icon }}</v-icon>
          <h1>{{ selectedEvent.title }}</h1>
          <v-spacer/>
          <strong>{{ selectedEvent.startDate && selectedEvent.startDate.format('DD/MM/YYYY') }}</strong>
        </v-card-title>
        <v-card-text>
          <p v-html="selectedEvent.contentFull"/>
        </v-card-text>
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
        paginate: true,
        perPage: 1
      })
      this.getInfo(res.data.data)
    },
    getInfo (data) {
      this.events = data.map(element => {
        return {
          start: `2018-11-22 ${element.hora_e}`,
          end: `2018-11-22 ${element.hora_s}`,
          title: `${element.nombreMateria} - ${element.nombreProfesor}`,
          contentFull: `
            Nombre del Aula - <strong>${element.nombreAula}</strong>
            <br>
            <ul>
              <li>Nombre del Profesor: ${element.nombreProfesor}</li>
            </ul>
          `,
          class: 'sport'
        }
      })
      console.log(this.events)
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
