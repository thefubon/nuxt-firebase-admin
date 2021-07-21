<template>
  <button
    class="button bg-indigo-600 text-white py-2 px-4 rounded"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>
