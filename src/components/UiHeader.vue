<script>
export default {
  name: 'UiHeader',

  computed: {
    rep () {
      return this.$route.params.rep ? `: ${this.$route.params.rep}` : ''
    }
  }
}
</script>

<template>
  <cds-header-service>
    <template #left>
      <div class="header">
        <div class="header__logo">
          <img src="@/assets/svg/github-mark.svg" alt="github-mark" />
        </div>
        <h1 class="header__title">GitHub issue viewer{{ rep }}</h1>
      </div>
    </template>
  </cds-header-service>
</template>

<style lang="scss" scoped>
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

.header {
  display: flex;
  grid-column-gap: toRem(16px);
  align-items: center;

  &__logo {
    width: toRem(32px);
    height: toRem(32px);
  }

  &__title {
    font-size: var(--cds-font-heading-4);
  }
}
</style>
