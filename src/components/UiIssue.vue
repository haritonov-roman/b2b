<script>
import moment from 'moment'

export default {
  name: 'UiIssue',

  props: {
    issue: {
      type: Object,
      required: false
    }
  },

  computed: {
    subtitle () {
      return `#${this.issue.number} opened on ${moment(this.issue.publishedAt).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: '[Last week]',
        sameElse: 'DD.MM.YYYY'
      })} by ${this.issue.author.login}`
    }
  }
}
</script>

<template>
  <div class="issue">
    <div class="issue__container">
      <div class="issue__left">
        <cds-icon name="Alert"/>
        <span class="issue__title">
          {{ issue.title }}
          <cds-tag
            v-for="(item, index) in issue.labels.nodes"
            :key="index"
            size="sm"
            :title="item.name"
            :style="{
              backgroundColor: `#${item.color}`,
              transform: 'translateY(-0.125rem)'
            }"
          />
        </span>
      </div>
      <div class="issue__right">
        <div
          v-if="issue.comments.totalCount"
          class="issue__comment"
        >
          <cds-icon name="Comment"/>
          <span>{{ issue.comments.totalCount }}</span>
        </div>
      </div>
    </div>
    <span class="issue__subtitle">{{ subtitle }}</span>
  </div>
</template>

<style lang="scss" scoped>
.issue {
  display: flex;
  flex-direction: column;
  grid-row-gap: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: var(--cds-color-background-container-primary);

  &:hover {
    background-color: var(--cds-color-background-container-secondary);
  }

  &:not(:last-child) {
    border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  }

  &__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__left {
    display: flex;
    flex: 1 1 auto;

    & > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    flex: 0 0 10rem;
    justify-content: flex-end;
  }

  &__title {
    font-size: var(--cds-font-heading-5);
    font-weight: var(--cds-font-weight-semi-bold);
  }

  &__subtitle {
    font-size: var(--cds-font-heading-6);
    margin-left: 1.5rem;
  }

  &__comment {
    display: flex;
    align-items: center;
    grid-column-gap: 0.25rem;
  }
}
</style>
