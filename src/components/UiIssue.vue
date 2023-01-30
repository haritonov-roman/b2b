<script>
import { transformDate } from '@/utils'

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
      return `#${this.issue.number} opened on ${transformDate(this.issue.publishedAt)} ${this.issue.author ? `by ${this.issue.author.login}` : ''}`
    },

    toIssue () {
      return {
        name: 'issue',
        params: {
          id: this.issue.number
        }
      }
    }
  }
}
</script>

<template>
  <div class="issue">
    <div class="issue__container">
      <div class="issue__left">
        <cds-icon name="Alert"/>
        <router-link
          class="issue__title"
          :to="toIssue"
        >
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
        </router-link>
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
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

@media screen and (min-width: 20rem) {
  .issue {
    display: flex;
    flex-direction: column;
    grid-row-gap: toRem(4px);
    padding: toRem(8px) toRem(16px);
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
        margin-right: toRem(8px);
      }
    }

    &__right {
      display: none;
      align-items: center;
      flex: 0 0 10rem;
      justify-content: flex-end;
    }

    &__title {
      font-size: var(--cds-font-heading-5);
      font-weight: var(--cds-font-weight-semi-bold);
      color: var(--cds-color-interactive-01-default);
      cursor: pointer;
      text-decoration: none;
      transition: 0.2s ease-in;

      &:hover {
        color: var(--cds-color-interactive-01-hover);
      }
    }

    &__subtitle {
      font-size: var(--cds-font-heading-6);
      margin-left: toRem(24px);
    }

    &__comment {
      display: flex;
      align-items: center;
      grid-column-gap: toRem(4px);
    }
  }
}

@media screen and (min-width: 42rem) {
  .issue {
    &__right {
      display: flex;
    }
  }
}

</style>
