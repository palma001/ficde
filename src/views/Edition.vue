<template>
  <formEdition
    entity="users"
    :config="usersConfig"
    :propsPanelEdition="propsPanelEdition"
  />
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
      propsPanelEdition: {
        data: [
          {
            documents: '26720270',
            name: 'luis',
            lastname: 'palma'
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
