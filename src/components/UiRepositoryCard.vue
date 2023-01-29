<script>
export default {
  name: 'UiRepositoryCard',

  props: {
    value: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<template>
  <cds-container
    color="primary"
    type="clickable"
    label="container"
    :href="value.route"
  >
    <div class="repository__wrap">
      <span class="repository__title">{{ value.name }}</span>
      <cds-icon name="External"/>
    </div>
  </cds-container>
</template>

<style lang="scss" scoped>
.repository {
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-weight: var(--cds-font-margin-heading-4);
  }
}
</style>
