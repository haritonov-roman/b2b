<script>
import { mapGetters } from 'vuex'
import UiIssue from '@/components/UiIssue'

export default {
  name: 'UiIssues',

  components: {
    UiIssue
  },

  computed: {
    ...mapGetters(['getIssuesTotalCount', 'getIssuesNodes'])
  }
}
</script>

<template>
  <div class="issues">
    <header class="issues__header">
      Шапка
    </header>
    <ui-issue
      v-for="item in getIssuesNodes"
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

  &__header {
    color: var(--cds-color-background-container-secondary);
    border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  }
}
</style>
