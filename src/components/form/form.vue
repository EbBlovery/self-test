<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      cForm: this
    }
  },
  prop: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  created() {
    this.$on('form-add', (item) => {
      console.log(item)
    })
  }
}
</script>

<style>

</style>