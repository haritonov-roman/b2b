<script>
import { currentUserRep } from '@/utils'
import { fetchCursor } from '@/api/issues'
import UiBreadcrumbs from '@/components/UiBreadcrumbs'
import UiIssues from '@/components/UiIssues'

export default {
  name: 'IssuesView',

  components: {
    UiBreadcrumbs,
    UiIssues
  },

  data: () => ({
    itemsOnPage: 25
  }),

  computed: {
    routes () {
      return [
        { text: 'repositories', to: { name: 'main' } },
        {
          text: 'issues',
          to: {
            name: 'issues',
            params: {
              user: this.$route.params.user,
              rep: this.$route.params.rep
            }
          }
        }
      ]
    }
  },

  created () {
    this.getData({
      first: this.itemsOnPage
    })
  },

  methods: {
    getData (payload) {
      this.$store.dispatch('getIssues', currentUserRep.call(this, payload))
    },

    async updateData (value) {
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
            await fetchCursor(currentUserRep.call(this, {
              first: 100,
              after: cursor ? `"${cursor}"` : ''
            })).then((res) => {
              cursor = res.data.repository.openIssues.pageInfo.endCursor
            })
          }

          return cursor
        }

        fetchCursor(currentUserRep.call(this, {
          first: items > 100 ? (items - (result * 100) ? items - (result * 100) : this.itemsOnPage) : items,
          after: items > 100 ? `"${await fn(result)}"` : ''
        })).then((res) => {
          this.getData({
            first: this.itemsOnPage,
            after: `"${res.data.repository.openIssues.pageInfo.endCursor}"`
          })
        })
      }
    }
  }
}
</script>

<template>
  <div>
    <ui-breadcrumbs :routes="routes" />
    <ui-issues
      :items-on-page="itemsOnPage"
      @change="updateData"
    />
  </div>
</template>
