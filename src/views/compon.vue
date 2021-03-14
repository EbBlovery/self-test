<template>
  <div>
    <c-form :rules="rules" :model="formPannel">
      <c-form-item label="名称" prop="name">
        <c-input v-model="formPannel.name"></c-input>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPannel: {
        name: ''
      },
      rules: {
        name: { required: true, message: 'sdfsfdsdfsdfs' }
      }
    }
  }
}
</script>