<template>
  <div>
    <v-dialog v-model="dialog"
      persistent
      max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ translateEntity('message', 'titleDialogSysem') }}</span>
        </v-card-title>
        <v-card-text>
          {{ translateEntity('message', 'messageSysem') }}
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="warning" @click="cancel">{{ translateEntity('message', 'cancelRegister') }}</v-btn>
          <v-btn dark color="teal" @click="dialog = false">{{ translateEntity('message', 'addRegister') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <DynamicForm
    :config="configData"
    :tabs="tabsConfig"
    :entity="entity"
    :microservices="addMicroservices"
    :primaryKey="primaryKey"
    @save="addData"/>
  </div>
</template>
<script>
import DynamicForm from '../components/formAdd'
import { getConfigAdd } from '../config/addConfig.js'
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  components: {
    DynamicForm
  },
  data () {
    return {
      /**
       * Status dialog
       * @type {Boolean}
       */
      dialog: false,
      /**
       * file config
       * @type {Object}
       */
      addConfig: null,
      /**
       * configuration of form
       * @type {[type]}
       */
      configData: null,
      /**
       * name entity
       * @type {String}
       */
      entity: this.$route.path.split('/')[3],
      /**
       * [tabsConfig description]
       * @type {Object}
       */
      tabsConfig: null,
      /**
       * Name microservices
       * @type {String}
       */
      microservices: 'condominiums',
      /**
       * primary keys microservices
       * @type {String}
       */
      addMicroservices: '',
      /**
       * Primary keys
       * @type {Array}
       */
      primaryKey: []
    }
  },
  created () {
    this.setConfig(this.entity)
  },
  methods: {
    /**
     * Cancel Add dynamic
     */
    cancel () {
      this.$router.go(-1)
    },
    /**
     * Add dynamic
     * @param {Object} data data of users
     */
    addData (data) {
      this.$services.postData([this.microservices, this.entity], data)
        .then(res => {
          if (res.status) {
            this.dialog = true
          } else {
            this.$notify({
              title: this.translateEntity('users', 'tileErrorServices'),
              message: this.translateEntity('users', 'errorServices'),
              type: 'error',
              duration: 5000
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    /**
     * Search file config
     * @param {String} newRouter name of entity
     */
    setConfig (newRouter) {
      this.setConfigurationAdd(getConfigAdd(newRouter))
    },
    /**
     * Sets the configuration to create the form to add the entity
     * @parmas {Array} addConfig files of configuration
     */
    setConfigurationAdd (addConfig) {
      addConfig.forEach((config) => {
        if (config.entity.toLowerCase() === this.entity.toLowerCase()) {
          this.configData = config.config
          this.tabsConfig = config.tabsCofig
          this.entity = config.entity.toLowerCase()
          this.primaryKey = config.primaryKey
          this.addMicroservices = config.microservices
        }
      })
    }
  }
}
</script>
