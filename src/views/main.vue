<script>
import UiBreadcrumbs from '@/components/UiBreadcrumbs'
import UiRepositoryCard from '@/components/UiRepositoryCard'

export default {
  name: 'MainView',

  components: {
    UiBreadcrumbs,
    UiRepositoryCard
  },

  data: () => ({
    routes: [
      { text: 'repositories', to: { path: '/' } }
    ],
    reps: [
      {
        name: 'Vue',
        route: 'vuejs/vue/issues'
      },
      {
        name: 'React',
        route: 'facebook/react/issues'
      },
      {
        name: 'Angular',
        route: 'angular/angular/issues'
      },
      {
        name: 'Svelte',
        route: 'sveltejs/svelte/issues'
      }
    ]
  })
}
</script>

<template>
  <div>
    <ui-breadcrumbs :routes="routes" />
    <div class="main__wrap">
      <ui-repository-card
        v-for="(item, index) in reps"
        :key="index"
        :value="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

@media screen and (min-width: 20rem) {
  .main__wrap {
    display: flex;
    flex-direction: column;
    grid-row-gap: toRem(16px);
  }
}

@media screen and (min-width: 42rem) {
  .main__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: toRem(16px);
  }
}
</style>
