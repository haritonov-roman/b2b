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
  <div>
    <cds-breadcrumbs
      :items="routes"
      class="breadcrumbs"
    />
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 1rem;
}
</style>
