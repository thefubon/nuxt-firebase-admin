<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheSize />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
export default {
  components: {
    TheHeader
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>
