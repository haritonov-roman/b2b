<script>
export default {
  name: 'UiIssue',

  props: {
    issue: {
      type: Object,
      required: false
    }
  }
}
</script>

<template>
  <div class="issue">
    {{ issue.title }}
  </div>
</template>

<style lang="scss" scoped>
.issue {
  display: flex;
  padding: 8px 16px;
  background-color: var(--cds-color-background-container-primary);

  &:not(:last-child) {
    border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  }
}
</style>
