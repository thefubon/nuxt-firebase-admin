<template>
  <div class="relative min-h-screen md:flex">
    <TheSize />
    <Sidebar />

    <!-- content -->
    <div class="flex-1 p-10 overflow-y-auto">
      <Nuxt />
    </div>

    <TheSize />
  </div>
</template>

<script>
import MobileMenuBar from '~/components/Navigation/MobileMenuBar'
import Sidebar from '~/components/Navigation/Sidebar'
export default {
  name: "Home",
  components: {
    MobileMenuBar,
    Sidebar
  }
}
</script>
