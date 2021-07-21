<template>
  <div class="admin-page container p-4 bg-gray-100">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin />
    </section>
  </div>
</template>

<script>
import PostList from '~/components/Posts/PostList'
import AppButton from '~/components/UI/AppButton'
export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  }
}
</script>
