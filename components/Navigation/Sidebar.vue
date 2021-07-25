<template>
  <!-- sidebar -->
  <div class="sidebar bg-blue-800 text-blue-300 w-64 min-w-64 space-y-6 py-7 px-2 absolute overflow-y-auto z-30 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

    <!-- logo -->
    <a href="/" class="text-white flex items-center space-x-2 px-4">
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <span class="text-2xl font-extrabold">Fubon Dev</span>
    </a>

    <!-- nav -->
    <nav>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/')" exact v-text="$t('nav.home')"></NuxtLink>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/posts')" v-text="$t('nav.posts')"></NuxtLink>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/about')" v-text="$t('nav.about')"></NuxtLink>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/users')" v-text="$t('nav.users')"></NuxtLink>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/admin')" v-text="$t('nav.admin')"></NuxtLink>
      <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/admin/auth')" v-text="$t('nav.auth')"></NuxtLink>
    </nav>

    <!-- Lang -->
    <LanguageSwitch />
  </div>
</template>

<script>
import LanguageSwitch from '~/components/Navigation/LanguageSwitch'
export default {
  name: "Sidebar",
  components: {
    LanguageSwitch
  }
}
</script>

<style scoped>
  .active {
    @apply bg-blue-700 text-white;
  }
</style>
