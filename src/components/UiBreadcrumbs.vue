<script>
export default {
  name: 'UiBreadcrumbs',

  props: {
    routes: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<template>
  <cds-breadcrumbs
    :items="routes"
    class="breadcrumbs"
  />
</template>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 1rem;
}
</style>
