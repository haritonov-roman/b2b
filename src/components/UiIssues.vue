<script>
import { mapGetters } from 'vuex'
import { fetchCursor } from '@/api/main'
import UiIssue from '@/components/UiIssue'
import store from '@/store'

export default {
  name: 'UiIssues',

  components: {
    UiIssue
  },

  data: () => ({
    itemsOnPage: 25,
    current: 1
  }),

  created () {
    this.getData({
      first: this.itemsOnPage
    })
  },

  computed: {
    ...mapGetters(['issuesTotalCount', 'issuesNodes'])
  },

  watch: {
    async current (value) {
      window.scrollTo(0, 0)

      // Пагинация работает не оптимальным образом: требуется делать избыточное количество запросов.
      // GitHub GraphQl для списков не позволяет передать параметр offset чтобы была возможность запросить записи начиная с ...
      // Вместо этого нужно запросить page-1 и взять свойство endCursor и уже от него брать нужное количество
      // Вторая проблема: api не отдает больше 100 записей, т.о. чтобы запросить курсор 100+ записи нужно сделать это итеративно
      if (value === 1) {
        this.getData({
          first: this.itemsOnPage
        })
      } else {
        const items = (value - 1) * this.itemsOnPage
        const result = Math.trunc(items / 100)

        const fn = async (count) => {
          let cursor = ''

          for (let i = 0; i < count; i++) {
            await fetchCursor({
              first: 100,
              after: cursor ? `"${cursor}"` : ''
            }).then((res) => {
              cursor = res.data.repository.openIssues.pageInfo.endCursor
            })
          }

          return cursor
        }

        fetchCursor({
          first: items > 100 ? (items - (result * 100) ? items - (result * 100) : this.itemsOnPage) : items,
          after: items > 100 ? `"${await fn(result)}"` : ''
        }).then((res) => {
          this.getData({
            first: this.itemsOnPage,
            after: `"${res.data.repository.openIssues.pageInfo.endCursor}"`
          })
        })
      }
    }
  },

  methods: {
    getData (payload) {
      store.dispatch('getIssues', payload)
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
      <div class="issues__wrap">
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
    padding: 0.5rem 1rem;
  }

  &__header {
    justify-content: space-between;
    border-bottom: var(--cds-border-element-01) var(--cds-color-border-element-primary);
  }

  &__footer {
    justify-content: center;
  }

  &__wrap {
    grid-column-gap: 0.25rem;
  }
}
</style>
