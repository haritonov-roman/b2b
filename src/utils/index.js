import moment from 'moment'

export function currentUserRep (params) {
  return {
    owner: this.$route.params.user,
    name: this.$route.params.rep,
    ...params
  }
}

export function transformDate (value) {
  return moment(value).calendar(null, {
    sameDay: '[Today]',
    lastDay: '[Yesterday]',
    lastWeek: '[Last week]',
    sameElse: 'DD.MM.YYYY'
  })
}
