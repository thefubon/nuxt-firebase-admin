<template>
  <div class="header-container bg-gray-600 text-white h-14 mb-4 flex items-center">
    <nav class="the-header container flex items-center">
      <div class="logo flex-1">
        <a href="https://github.com/thefubon/nuxt" target="_blank">GinHub</a>
      </div>
      <div class="navigation-items">
        <ul class="nav-list hidden md:flex items-center space-x-4">
            <li class="nav-item"><NuxtLink class="" active-class="active" :to="localePath('/')" exact v-text="$t('nav.home')"></NuxtLink></li>
            <li class="nav-item"><NuxtLink class="" active-class="active" :to="localePath('/posts')" v-text="$t('nav.posts')"></NuxtLink></li>
            <li class="nav-item"><NuxtLink class="" active-class="active" :to="localePath('/about')" v-text="$t('nav.about')"></NuxtLink></li>
            <li class="nav-item"><NuxtLink class="" active-class="active" :to="localePath('/admin')" v-text="$t('nav.admin')"></NuxtLink></li>
            <li class="nav-item"><NuxtLink class="" active-class="active" :to="localePath('/admin/auth')" v-text="$t('nav.auth')"></NuxtLink></li>
          <li class="nav-item"> <NuxtLink class="" active-class="active" :to="localePath('/users')" v-text="$t('nav.users')"></NuxtLink></li>
        </ul>
      </div>
      <div class="ml-6"><LanguageSwitch /></div>
    </nav>
  </div>
</template>

<script>
import LanguageSwitch from '~/components/Navigation/LanguageSwitch'
export default {
  name: "TheHeader",
  components: {
    LanguageSwitch
  }
}
</script>

<style scoped>
  .active {
    @apply py-1 px-2 bg-gray-100 text-black rounded;
  }
</style>
