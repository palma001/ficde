<template>
  <v-app data-app>
    <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-form
            @submit.prevent="login">
            <v-card class="elevation-12">
              <v-alert
                :value="alert"
                color="error"
                border="bottom"
                type="error"
                transition="scale-transition">
                {{ translateEntity('message', message) }}
              </v-alert>
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ translateEntity('LOGIN',
                'loginTitle') }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                  <v-text-field
                    prepend-icon="person"
                    name="email"
                    v-model="dni"
                    type="text"
                    v-validate="'required'"
                    :error-messages="this.errors.first('email')"
                    :label="translateEntity('users', 'emailOrDocument')" />
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    v-model="password"
                    name="password"
                    type="password"
                    v-validate="'required'"
                    :error-messages="this.errors.first('password')"
                    :label="translateEntity('users', 'password')"/>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  type="submit"
                  :dark="dark"
                  :disabled="loading"
                  @click="login">
                  <span
                    v-if="dark">
                      {{ translateEntity('LOGIN', 'loginTitle') }}
                  </span>
                  <v-icon
                    v-if="loading">
                    mdi-cached
                  </v-icon>
                  <span
                  style="margin-left: 5px;"
                  v-if="loading">
                      {{ translateEntity('users', 'loading') }}
                  </span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mixins } from '../mixins'
export default {
  mixins: [mixins.containerMixin],
  name: 'Login',
  props: {
    source: String
  },
  data () {
    return {
      drawer: null,
      dni: '',
      password: '',
      entity: 'authenticate',
      microservices: 'ficde',
      alert: false,
      message: 'error',
      loading: false,
      dark: true
    }
  },
  methods: {
    login () {
      this.validateBeforeSubmit()
        .then(res => {
          if (res) {
            this.loading = true
            this.dark = false
            this.$store.dispatch('login', { this: this })
              .then(res => {
                this.$router.push({ name: 'users' })
                this.loading = false
                this.dark = true
              })
              .catch(error => {
                this.alert = true
                this.message = error.response.message
                this.loading = false
                this.dark = true
                setTimeout(() => {
                  this.alert = false
                  this.message = 'error'
                }, 5000)
              })
          }
        })
    },
    /**
     * Verify formulary error
     * @param {String} event form to change
     */
    validateBeforeSubmit () {
      return this.$validator.validateAll()
        .then((result) => {
          return result
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
