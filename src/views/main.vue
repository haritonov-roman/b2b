<script>
import store from '@/store'
import UiIssues from '@/components/UiIssues'

export default {
  name: 'MainView',

  components: {
    UiIssues
  },

  created () {
    store.dispatch('fetchIssues', {
      first: 25
    })
  }
}
</script>

<template>
  <cds-grid fluid>
    <cds-row>
      <cds-col xs="1" sm="8" md="10" offset-md="3">
        <ui-issues />
      </cds-col>
    </cds-row>
  </cds-grid>
</template>
