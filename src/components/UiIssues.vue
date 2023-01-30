<script>
import { mapGetters } from 'vuex'
import UiIssue from '@/components/UiIssue'

export default {
  name: 'UiIssues',

  components: {
    UiIssue
  },

  props: {
    itemsOnPage: {
      type: Number,
      required: true,
      default: 5
    }
  },

  data: () => ({
    current: 1
  }),

  computed: {
    ...mapGetters(['issuesTotalCount', 'issuesNodes'])
  },

  watch: {
    current (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<template>
  <div class="issues">
    <div class="issues__header">
      <div class="issues__wrap">
        <span>{{ issuesTotalCount }} Open</span>
      </div>
      <div class="issues__wrap issues__pagination">
        <cds-pagination
          v-model="current"
          :perPage="itemsOnPage"
          :count="issuesTotalCount"
        />
      </div>
    </div>
    <ui-issue
      v-for="item in issuesNodes"
      :key="item.id"
      :issue="item"
    />
    <div class="issues__footer">
      <cds-pagination
        v-model="current"
        :perPage="itemsOnPage"
        :count="issuesTotalCount"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

@media screen and (min-width: 20rem) {
  .issues {
    display: flex;
    flex-direction: column;
    border: var(--cds-border-element-01) var(--cds-color-border-element-primary);
    border-radius: var(--cds-border-radius-m);
    background-color: var(--cds-color-background-container-secondary);
    overflow: hidden;

    &__header,
    &__footer,
    &__wrap {
      display: flex;
      align-items: center;
    }

    &__header,
    &__footer {
      padding: toRem(8px) toRem(16px);
    }

    &__header {
      justify-content: space-between;
      border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
    }

    &__footer {
      justify-content: center;
    }

    &__wrap {
      grid-column-gap: toRem(4px);
    }

    &__pagination {
      display: none;
    }
  }
}

@media screen and (min-width: 42rem) {
  .issues__pagination {
    display: block;
  }
}
</style>
