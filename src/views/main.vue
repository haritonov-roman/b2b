<script>
import store from '@/store'

export default {
  name: 'MainView',

  created () {
    store.dispatch('fetchIssues', {
      first: 20
    })
  }
}
</script>

<template>
  <div></div>
</template>
