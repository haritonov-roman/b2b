<script>
import { mapGetters } from 'vuex'
import UiIssue from '@/components/UiIssue'

export default {
  name: 'UiIssues',

  components: {
    UiIssue
  },

  computed: {
    ...mapGetters(['issuesTotalCount', 'issuesNodes'])
  }
}
</script>

<template>
  <div class="issues">
    <div class="issues__header">
      <div class="issues__wrap">
        <span>{{ issuesTotalCount }} Open</span>
      </div>
    </div>
    <ui-issue
      v-for="item in issuesNodes"
      :key="item.id"
      :issue="item"
    />
  </div>
</template>

<style lang="scss" scoped>
.issues {
  display: flex;
  flex-direction: column;
  border: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  border-radius: var(--cds-border-radius-m);
  background-color: var(--cds-color-background-container-secondary);
  overflow: hidden;

  &__header,
  &__wrap {
    display: flex;
    align-items: center;
  }

  &__header {
    padding: 0.5rem 1rem;
    border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  }

  &__wrap {
    grid-column-gap: 0.25rem;
  }
}
</style>
