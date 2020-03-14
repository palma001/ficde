<template>
    <v-app id="inspire">
      <v-autocomplete
        :items="studentAll"
        :item-text="labelStudent"
        item-value="cod_estudiante"
        dense
        v-model="selectedEstudent"
        label="Seleccione un estudiante"/>
      <vue-cal
        selected-date="2018-11-19"
        :time-from="1 * 60"
        :time-to="24 * 60"
        :disable-views="['years', 'year', 'month']"
        :events="events"
        :on-event-click="onEventClick">
      </vue-cal>
      <!-- Using Vuetify -->
      <v-dialog v-model="showDialog" max-width="550" persistent>
        <v-alert
          v-model="alert"
          :type="tipeAlert">
          {{
            translateLabel(messageAlert)
          }}
        </v-alert>
        <v-card>
          <v-card-title class="headline">
            <h4>{{ selectedEvent.title }}</h4>
          </v-card-title>
          <v-card-text>
            <p v-html="selectedEvent.contentFull"/>
          </v-card-text>
           <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary darken-1"
                text
                @click="activeAlert(null, null, true)"
              >
                {{ translateLabel('close') }}
              </v-btn>

              <v-btn
                color="primary darken-1"
                text
                @click="register(selectedEvent.data)"
              >
               {{ translateEntity('estudiantes_materias', 'btn-inscription')}}
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  components: { VueCal },
  data: () => ({
    /**
     * [selectedEvent description]
     * @type {Object}
     */
    selectedEvent: {},
    /**
     * [showDialog description]
     * @type {Boolean}
     */
    showDialog: false,
    /**
     * [events description]
     * @type {Array}
     */
    events: [],
    /**
     * [studentAll description]
     * @type {Array}
     */
    studentAll: [],
    /**
     * [selectedEstudent description]
     * @type {[type]}
     */
    selectedEstudent: null,
    /**
     * [alert description]
     * @type {Boolean}
     */
    alert: false,
    /**
     * [tipeAlert description]
     * @type {String}
     */
    tipeAlert: 'error',
    /**
     * [messageAlert description]
     * @type {String}
     */
    messageAlert: 'selecte-studnet'
  }),
  created () {
    this.getHorarios()
    this.getStudent()
  },
  methods: {
    /**
     * [labelStudent description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    labelStudent (data) {
      return `${data.dni} - ${data.nombre} ${data.apellido}`
    },
    /**
     * [getHorarios description]
     * @return {[type]} [description]
     */
    async getHorarios () {
      let { res } = await this.$services.getData(['ficde', 'semestres_materias'], {
        paginate: false
      })
      this.getInfo(res.data.data)
    },
    /**
     * [getInfo description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    getInfo (data) {
      this.events = data.map(element => {
        return {
          start: this.getDate(element.dia, element.hora_e),
          end: this.getDate(element.dia, element.hora_s),
          title: `${element.nombreMateria} - ${element.nombreProfesor}  ${element.apellidoProfesor}`,
          contentFull: `
            <div class="details-info">
              <h4><strong>Datos del Profesor</strong></h4>
              <ul>
                <li>Dni: <strong>${element.dniProfesor}</strong></li>
                <li>Nombre: <strong>${element.nombreProfesor} ${element.apellidoProfesor}</strong></li>
              </ul>
              <h4 style="margin-top: 20px;"><strong>Detalles de la Asignatura</strong></h4>
              <ul>
                <li>Aula - <strong>${element.nombreAula}</strong></li>
                <li>${element.nombreMateria} - <strong>${element.nombreSemestre}</strong></li>
                <li>Modalidad: <strong>${element.modalidad}</strong></li>
              </ul>
            </div>
          `,
          data: element,
          class: this.getClassRandom()
        }
      })
    },
    /**
     * [register description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    async register (data) {
      if (!this.selectedEstudent) {
        this.activeAlert('selecte-studnet', 'error', false)
      } else {
        let { res } = await this.$services.postData(['ficde', 'estudiantes_materias'], {
          id_semestre: data.cod_sm,
          id_estudiante: this.selectedEstudent,
          user_r: 'Luis Palma'
        })
        if (res.status === 201) {
          this.activeAlert('message-success-inscription', 'success', true)
        }
      }
    },
    /**
     * [activeAlert description]
     * @param  {[type]} message     [description]
     * @param  {[type]} typeAlert   [description]
     * @param  {[type]} closeDialog [description]
     * @return {[type]}             [description]
     */
    activeAlert (message, typeAlert, closeDialog) {
      if (message && typeAlert) {
        this.alert = true
        this.messageAlert = message
        this.tipeAlert = typeAlert
      }
      if (closeDialog) {
        setTimeout(() => {
          this.showDialog = false
          this.alert = false
        }, 1000)
      }
    },
    /**
     * [getDate description]
     * @param  {[type]} day   [description]
     * @param  {[type]} hours [description]
     * @return {[type]}       [description]
     */
    getDate(day, hours) {
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
    /**
     * [getClassRandom description]
     * @return {[type]} [description]
     */
    getClassRandom () {
      let className = [
        'default',
        'danger',
        'primary',
        'success',
        'yellow',
        'dad',
        'mom',
        'kid1',
        'kid2',
        'kid3'
      ]
      return className[Math.floor(Math.random() * className.length)]
    },

    async getStudent () {
      let { res } = await this.$services.getData(['ficde', 'estudiantes'], {
        paginate: false
      })
      this.studentAll = res.data.data
    },
    /**
     * [onEventClick description]
     * @param  {[type]} event [description]
     * @param  {[type]} e     [description]
     * @return {[type]}       [description]
     */
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
.vuecal__menu {
  color: #ffffff;
  background: #4a8ff3;
}

.vuecal__now-line {
  background: #f5a416;
}
.vuecal__event.primary {
  background: #4a8ff3;
  border: 2px solid #4a8ff3;
  color: #fff;
}
.vuecal__event.danger {
  background-color: rgba(255, 102, 102, 0.9);
  border: 2px solid rgba(255, 102, 102, 1);
  color: #fff;
}
.vuecal__event.dad {
  background-color: rgba(221, 238, 255, 0.5);
  border: 2px solid rgba(221, 238, 255, 0.6);
  color: black;
}
.vuecal__event.mom {
  background-color: rgba(255, 232, 251, 0.5);
  border: 2px solid rgba(255, 232, 251, 0.6);
  color: black;
}
.vuecal__event.kid1 {
  background-color: rgba(221, 255, 239, 0.5);
  border: 2px solid rgba(221, 255, 239, 0.7);
  color: black;
}
.vuecal__event.kid2 {
  background-color: rgba(255, 250, 196, 0.5);
  border: 2px solid rgba(255, 250, 196, 0.7);
  color: black;
}
.vuecal__event.kid3 {
  background-color: rgba(255, 206, 178, 0.5);
  border: 2px solid rgba(255, 206, 178, 0.7);
  color: black;
}
.vuecal__event.success {
  background-color: rgba(164, 230, 210, 0.9);
  border: 2px solid #4a8ff3;
  color: #fff;
}

.vuecal__event {
  cursor: pointer;
}

.vuecal__event-content {
  font-style: italic;
}

.details-info {
  font-size: 20px;
}
</style>
