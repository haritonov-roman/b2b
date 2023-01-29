<script>
import { transformDate } from '@/utils'
import { mapGetters } from 'vuex'

export default {
  name: 'UiBreadcrumbs',

  computed: {
    ...mapGetters(['issueData']),

    title () {
      return this.issueData ? this.issueData.title : ''
    },

    subtitle () {
      if (this.issueData) {
        return `
          ${this.issueData.author.login}
          ${this.issueData.closed ? 'closed' : 'opened'} this issue
          ${transformDate(this.issueData.publishedAt)} · comments:
          ${this.issueData.comments.totalCount ? this.issueData.comments.totalCount : 0}
        `
      } else {
        return ''
      }
    }
  }
}
</script>

<template>
  <div class="issue-heading">
    <h1 class="issue-heading__title">{{ title }}</h1>
    <span>{{ subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

.issue-heading {
  display: flex;
  flex-direction: column;
  grid-row-gap: toRem(8px);
  margin-bottom: toRem(32px);

  &__title {
    font-size: var(--cds-font-heading-2);
  }
}
</style>
