<script>
import { currentUserRep } from '@/utils'
import UiBreadcrumbs from '@/components/UiBreadcrumbs'
import UiIssueHeading from '@/components/UiIssueHeading'
import UiIssueBody from '@/components/UiIssueBody'

export default {
  name: 'IssueView',

  components: {
    UiBreadcrumbs,
    UiIssueHeading,
    UiIssueBody
  },

  computed: {
    issueId () {
      return this.$route.params.id
    },

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
        },
        {
          text: `issue #${this.issueId}`,
          to: {
            name: 'issue',
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
    this.$store.dispatch('getIssue', currentUserRep.call(this, { number: this.issueId }))
  }
}
</script>

<template>
  <div>
    <ui-breadcrumbs :routes="routes" />
    <ui-issue-heading />
    <ui-issue-body />
  </div>
</template>
