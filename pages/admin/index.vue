<template>
  <div class="admin-page container p-4 bg-gray-100">
    <section class="new-post text-center mb-4">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
