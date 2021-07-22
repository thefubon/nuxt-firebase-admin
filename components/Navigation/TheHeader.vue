<template>
  <div class="header-container bg-gray-600 text-white p-4 mb-4">
    <header class="the-header flex items-center">
      <TheSideNavToggle class="mr-4" @toggle="$emit('sidenavToggle')" />
      <div class="logo flex-1">
        <NuxtLink class="font-bold" to="/">Nuxt</NuxtLink>
      </div>
      <div class="navigation-items">
        <ul class="nav-list flex items-center space-x-4">
          <li class="nav-item"><NuxtLink to="/posts">Posts</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/admin">Admin</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/admin/auth">Login</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/users">Users</NuxtLink></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from '~/components/Navigation/TheSideNavToggle'
export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
}
</script>
