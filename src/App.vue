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
      <cds-grid fluid>
        <cds-row>
          <cds-col xs="8" sm="8" md="10" offset-md="3">
            <router-view/>
          </cds-col>
        </cds-row>
      </cds-grid>
    </div>
  </div>
</template>

<style lang="scss">
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

html {
  font-family: var(--cds-font-family-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--cds-font-base);
  color: var(--cds-color-text-primary);
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
  background-color: var(--cds-color-background-page-primary);
}

.content {
  padding: toRem(32px) 0;
}
</style>
