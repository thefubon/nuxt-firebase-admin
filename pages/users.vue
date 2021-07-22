<template>
  <div class="container p-4 bg-gray-100">
    <h1 class="text-2xl font-bold mb-4">Users</h1>
    <input class="p-2 border focus:outline-none rounded" type="text" v-model="userId">
    <button class="py-2 px-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded" @click="onLoadUser">Load User</button>
    <NuxtChild></NuxtChild>
  </div>
</template>

<script>
export default {
  name: 'users',
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId);
    }
  }
}
</script>
