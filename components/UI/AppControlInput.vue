<template>
  <div class="input-control container flex flex-col my-4">
    <label><slot /></label>
    <input
    class="input border p-2 focus:outline-none w-full rounded"
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      class="textarea border p-2 focus:outline-none w-full rounded"
      v-if="controlType === 'textarea'"
      rows="3"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
