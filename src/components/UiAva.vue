<script>
export default {
  name: 'UiAva',

  props: {
    src: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<template>
  <img
    :src="src"
    class="ava"
    alt="ava"
  />
</template>

<style lang="scss" scoped>
@import "@central-design-system/components/dist/mixins/scss/layout/convert";

.ava {
  width: toRem(40px);
  height: toRem(40px);
  border-radius: 50%;
  overflow: hidden;
}
</style>
