<script>
import UiHeader from '@/components/UiHeader'

export default {
  components: {
    UiHeader
  }
}
</script>

<template>
  <div id="app">
    <ui-header />
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  background-color: var(--cds-color-background-page-primary);
}

.content {
  padding: 32px 0;
}
</style>
