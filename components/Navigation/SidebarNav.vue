<template>
  <nav>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/')" exact v-text="$t('nav.home')"></NuxtLink>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/posts')" v-text="$t('nav.posts')"></NuxtLink>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/about')" v-text="$t('nav.about')"></NuxtLink>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/users')" v-text="$t('nav.users')"></NuxtLink>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/admin')" v-text="$t('nav.admin')"></NuxtLink>
    <NuxtLink class="block py-2.5 px-4 rounded transition duration-200 hover:text-white" active-class="active" :to="localePath('/admin/auth')" v-text="$t('nav.auth')"></NuxtLink>
  </nav>
</template>

<style scoped>
  .active {
    @apply bg-blue-700 text-white;
  }
</style>
