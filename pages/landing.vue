<template>
  <div class="container p-4 bg-gray-100 rounded sticky top-0">
    Landing
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: this.$t('head.title')
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }
  }
</script>
