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
html {
  font-family: var(--cds-font-family-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--cds-font-base);
  color: var(--cds-color-text-primary);
}

#app {
  min-height: 100vh;
  background-color: var(--cds-color-background-page-primary);
}

.content {
  padding: 32px 0;
}
</style>
