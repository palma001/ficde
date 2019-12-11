<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn
      fab
      bottom
      right
      color="teal"
      dark
      fixed
      @click="addDynamic">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      entity: this.$route.name
    }
  },
  methods: {
    /**
     * Route add dynamic
     */
    addDynamic () {
      this.$router.push({ path: `add/${this.entity}` })
    }
  }
}
</script>
