<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')">
    </div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul
          class="nav-list"
          @click="$emit('close')">
          <li class="nav-item"><NuxtLink to="/posts">Posts</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
          <li class="nav-item"><NuxtLink to="/admin">Admin</NuxtLink></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Thesidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
