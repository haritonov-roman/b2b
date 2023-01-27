<script>
export default {
  name: 'UiHeader'
}
</script>

<template>
  <cds-header class="header">
    <template #left>
      <div class="header_logo">
        <img src="@/assets/svg/github-mark.svg" alt="github-mark" />
      </div>
    </template>
    <h4>vue / issues</h4>
  </cds-header>
</template>

<style lang="scss" scoped>
.header_logo {
  width: 48px;
  height: 48px;
}
</style>
