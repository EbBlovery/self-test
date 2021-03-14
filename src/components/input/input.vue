<template>
  <div>
    <input :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  inject: ['cform'],
  data() {
    return {

    }
  },
  props: {
    value: null,
    type: {
      type: String,
      default: text
    }
  },
  methods:{
    handleInput(v) {
      this.$emit('input', v)
      this.cform.validate()
    }
  }
}
</script>