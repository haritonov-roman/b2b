<script>
import { mapGetters } from 'vuex'
import UiAva from '@/components/UiAva'

export default {
  name: 'UiIssueBody',

  components: {
    UiAva
  },

  computed: {
    ...mapGetters(['issueData', 'issueBodyHTML'])
  }
}
</script>

<template>
  <div class="issue-body">
    <div
      v-html="issueBodyHTML"
      class="issue-body__desc"
    />
    <div class="issue-body__sidebar">
      <div
        v-if="issueData && issueData.labels.nodes.length"
        class="issue-body__labels"
      >
        <span class="issue-body__sidebar-title">Labels:</span>
        <cds-tag
          v-for="(item, index) in issueData.labels.nodes"
          :key="index"
          size="sm"
          :title="item.name"
          :style="{
              backgroundColor: `#${item.color}`,
              transform: 'translateY(-0.125rem)'
            }"
        />
      </div>
      <div
        v-if="issueData && issueData.participants.nodes.length"
        class="issue-body__participants"
      >
        <span class="issue-body__sidebar-title">Participants:</span>
        <div
          class="issue-body__participants-wrap"
        >
          <a
            v-for="(item, index) in issueData.participants.nodes"
            :key="index"
            :href="item.url"
          >
            <ui-ava :src="item.avatarUrl"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

.issue-body {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: toRem(16px);

  &__desc,
  &__sidebar
  {
    display: flex;
    flex-direction: column;
    grid-row-gap: toRem(16px);
    padding: toRem(16px);
    background-color: var(--cds-color-background-container-primary);
    border: var(--cds-border-element-01) var(--cds-color-border-element-secondary);
    border-radius: var(--cds-border-radius-m);
  }

  &__desc {
    & a {
      text-decoration: none;
      color: var(--cds-color-interactive-01-default);

      &:hover {
        color: var(--cds-color-interactive-01-hover);
      }
    }

    & hr {
      display: none;
    }

    & h3 {
      font-size: var(--cds-font-heading-5);
      font-weight: var(--cds-font-weight-semi-bold);
    }

    & .snippet-clipboard-content pre {
      overflow-x: auto;
    }
  }

  &__sidebar {
    height: fit-content;
  }

  &__labels *:not(:last-child) {
    margin-right: toRem(8px);
  }

  &__sidebar-title {
    font-weight: var(--cds-font-weight-semi-bold);
  }

  &__participants {
    display: flex;
    flex-direction: column;
    grid-row-gap: toRem(8px);
  }

  &__participants-wrap {
    display: flex;
    flex-wrap: wrap;
    grid-gap: toRem(8px);
  }
}
</style>
